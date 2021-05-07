import { CommentTC } from "../../models";
export const comment = CommentTC.getResolver("findOne");
export const comments = CommentTC.getResolver("findMany");
export const commentById = CommentTC.getResolver("findById");
