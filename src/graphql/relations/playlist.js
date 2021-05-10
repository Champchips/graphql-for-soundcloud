import { PlaylistTC, MusicTC, UserTC } from "../../models";
PlaylistTC.addRelation("owner", {
  resolver: () => UserTC.getResolver("findOne"),
  prepareArgs: {
    filter: (source) => ({ _id: source.createBy }),
  },
  projection: { createBy: 1 },
});
PlaylistTC.addRelation("music", {
  resolver: () => MusicTC.getResolver("findMany"),
  prepareArgs: {
    filter: (source) => ({ _id: source.musicID }),
  },
  projection: { musicID: 1 },
});
