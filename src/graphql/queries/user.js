import { UserTC } from "../../models";

export const userById = UserTC.getResolver("findById");
export const users = UserTC.getResolver("findMany");
export const user = UserTC.getResolver("findOne");
