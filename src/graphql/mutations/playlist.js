import { PlaylistTC } from "../../models";
export const createPlaylist = PlaylistTC.getResolver("createOne");
export const updatePlaylistById = PlaylistTC.getResolver("updateById");
export const removePlaylistById = PlaylistTC.getResolver("removeById");
