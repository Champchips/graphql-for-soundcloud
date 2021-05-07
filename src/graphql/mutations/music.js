import { MusicTC } from "../../models";
export const createMusic = MusicTC.getResolver("createOne");
export const updateMusicById = MusicTC.getResolver("updateById");
export const removeMusicById = MusicTC.getResolver("removeById");
