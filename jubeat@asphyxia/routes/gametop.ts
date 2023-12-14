import * as Jb10GameTop from '../jb10/routes/gametop'

export const getProfile = async (
  info: EamuseInfo,
  data: any,
  send: EamuseSend
) => {
  const modelInfo = info.model.split(':');
  const gameRevision: number = parseInt(modelInfo[4]);
  if(gameRevision >= 2018090501 && 2022052400){
    return await Jb10GameTop.getProfile(info, data, send);
  }
};

export const Getinfo = (
  info: EamuseInfo,
  data: any,
  send: EamuseSend
) => {
  const modelInfo = info.model.split(':');
  const gameRevision: number = parseInt(modelInfo[4]);
  if(gameRevision >= 2018090501 && 2022052400){
    return Jb10GameTop.Getinfo(info, data, send);
  }
};

export const loadScore = async(
  info: EamuseInfo,
  data: any,
  send: EamuseSend
) => {
  const modelInfo = info.model.split(':');
  const gameRevision: number = parseInt(modelInfo[4]);
  if(gameRevision >= 2018090501 && 2022052400){
    return await Jb10GameTop.loadScore(info, data, send);
  }
};

export const Meeting =(
  info: EamuseInfo,
  data: any,
  send: EamuseSend
) => {
  const modelInfo = info.model.split(':');
  const gameRevision: number = parseInt(modelInfo[4]);
  if(gameRevision >= 2018090501 && 2022052400){
    return Jb10GameTop.Meeting(info, data, send);
  }
};
