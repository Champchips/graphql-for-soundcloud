import { ValidationError } from "apollo-server-express";
import { schemaComposer } from "graphql-compose";
import jsonwebtoken from "jsonwebtoken";
import { UserTC, UserModel } from "../../models";
import { requiredAuth } from "../middlewares";

export const createUser = UserTC.getResolver("createOne");
export const updateUserById = UserTC.getResolver("updateById");
export const removeUserById = UserTC.getResolver("removeById");
const LoginPayload = schemaComposer.createObjectTC({
  name: "LoginPayload",
  fields: {
    token: "String",
    user: UserTC.getType(),
  },
});
export const login = schemaComposer.createResolver({
  name: "login",
  args: {
    email: "String!",
    password: "String!",
  },
  type: LoginPayload,
  resolve: async ({ args }) => {
    const { email, password } = args;
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new ValidationError(`Email ${email} not found`);
    }
    const valid = await user.verifyPassword(password);
    if (!valid) {
      throw new ValidationError("Incorrect password");
    }
    return {
      token: jsonwebtoken.sign(
        { _id: user._id, role: user.role },
        "local-secret",
        { expiresIn: "1d", algorithm: "HS256" }
      ),
      user,
    };
  },
});

const ChangePasswordPayload = schemaComposer.createObjectTC({
  name: "ChangePasswordPayload",
  fields: {
    token: "String",
    user: UserTC.getType(),
  },
});
export const changePassword = schemaComposer
  .createResolver({
    name: "changePassword",
    args: {
      password: "String!",
    },
    type: ChangePasswordPayload,
    resolve: async ({ args, context }) => {
      const { password } = args;
      const { _id: userId } = context.user;
      const user = await UserModel.findByIdAndUpdate(
        userId,
        { $set: { password } },
        { new: true }
      );
      if (!user) {
        throw new ValidationError("Invalid user ID");
      }
      return {
        token: jsonwebtoken.sign(
          { _id: user._id, role: user.role },
          "local-secret",
          { expiresIn: "1d", algorithm: "HS256" }
        ),
        user,
      };
    },
  })
  .wrapResolve(requiredAuth);
