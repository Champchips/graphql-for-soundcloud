import { CommentTC } from "../../models";
export const createComment = CommentTC.getResolver("createOne");
export const updateCommentById = CommentTC.getResolver("updateById");
export const removeCommentById = CommentTC.getResolver("removeById");
