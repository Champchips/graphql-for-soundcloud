import { PostTC, CommentTC, AdminTC } from "../../models";

PostTC.addRelation("admin", {
  resolver: () => AdminTC.getResolver("findOne"),
  prepareArgs: {
    filter: (source) => ({ username: source.postBy }),
  },
  projection: { postBy: 1 },
});
PostTC.addRelation("comments", {
  resolver: () => CommentTC.getResolver("findMany"),
  prepareArgs: {
    filter: (source) => ({ _id: source.commentID }),
  },
  projection: { commentID: 1 },
});
