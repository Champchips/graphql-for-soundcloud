import { MusicTC } from "../../models";
export const music = MusicTC.getResolver("findOne");
export const musics = MusicTC.getResolver("findMany");
export const musicById = MusicTC.getResolver("findById");
