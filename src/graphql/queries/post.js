import { PostTC } from "../../models";
export const post = PostTC.getResolver("findOne");
export const posts = PostTC.getResolver("findMany");
export const postById = PostTC.getResolver("findById");
