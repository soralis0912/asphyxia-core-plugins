import * as Jb8GameTop from '../jb8/routes/gametop'
import * as Jb10GameTop from '../jb10/routes/gametop'
import * as utils from '../utility/utils'


export const getProfile = async (
  info: EamuseInfo,
  data: any,
  send: EamuseSend
) => {
  const gameVersion = utils.getGameVersion(info);

  if(gameVersion == utils.jubeatVersions.FESTO){
    return await Jb8GameTop.getProfile(info, data, send);
  }else if(gameVersion == utils.jubeatVersions.FESTO){
    return await Jb10GameTop.getProfile(info, data, send);
  }
};

export const Getinfo = (
  info: EamuseInfo,
  data: any,
  send: EamuseSend
) => {
  const gameVersion = utils.getGameVersion(info);

  if(gameVersion == utils.jubeatVersions.QUBELL){
    return Jb8GameTop.Getinfo(info, data, send);
  }else if(gameVersion == utils.jubeatVersions.FESTO){
    return Jb10GameTop.Getinfo(info, data, send);
  }
};

export const loadScore = async(
  info: EamuseInfo,
  data: any,
  send: EamuseSend
) => {
  const gameVersion = utils.getGameVersion(info);

  if(gameVersion == utils.jubeatVersions.QUBELL){
    return await Jb8GameTop.loadScore(info, data, send);
  }else if(gameVersion == utils.jubeatVersions.FESTO){
    return await Jb10GameTop.loadScore(info, data, send);
  }
};

export const Meeting =(
  info: EamuseInfo,
  data: any,
  send: EamuseSend
) => {
  const gameVersion = utils.getGameVersion(info);

  if(gameVersion == utils.jubeatVersions.QUBELL){
    return Jb8GameTop.Meeting(info, data, send);
  }else if(gameVersion == utils.jubeatVersions.FESTO){
    return Jb10GameTop.Meeting(info, data, send);
  }
};
