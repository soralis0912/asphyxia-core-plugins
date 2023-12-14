import * as Jb10GameEnd from '../jb10/routes/gameend'

export const saveProfile = async (info: EamuseInfo, data: any, send : EamuseSend) => {
  const modelInfo = info.model.split(':');
  const gameRevision: number = parseInt(modelInfo[4]);
  if(gameRevision >= 2018090501 && 2022052400){
    return await Jb10GameEnd.saveProfile(info, data, send);
  }
}

