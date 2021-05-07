import { PlaylistTC } from "../../models";
export const playlist = PlaylistTC.getResolver("findOne");
export const playlists = PlaylistTC.getResolver("findMany");
export const playlistById = PlaylistTC.getResolver("findById");
