import { UserTC } from "../../models";
import { requiredAuth } from "../middlewares";
import { schemaComposer } from "graphql-compose";
export const userById = UserTC.getResolver("findById");
export const users = UserTC.getResolver("findMany");
export const user = UserTC.getResolver("findOne");
export const me = schemaComposer
  .createResolver({
    name: "me",
    type: UserTC.getDInterface().getType(),
    resolve: async ({ context }) => {
      const { _id } = context.user;
      const user = await UserModel.findById(_id);
      return user;
    },
  })
  .wrapResolve(requiredAuth);
