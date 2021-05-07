import { PostTC } from "../../models";
export const createPost = PostTC.getResolver("createOne");
export const updatePostById = PostTC.getResolver("updateById");
export const removePostById = PostTC.getResolver("removeById");
