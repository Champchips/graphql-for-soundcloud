import { CommentTC, UserTC } from "../../models";
CommentTC.addRelation("commentator", {
  resolver: () => UserTC.getResolver("findOne"),
  prepareArgs: {
    filter: (source) => ({ username: source.commentBy }),
  },
  projection: { commentBy: 1 },
});
