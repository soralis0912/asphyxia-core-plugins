import * as Jb10GameLobby from '../jb10/routes/lobby'

export const Check = (
    info: EamuseInfo,
    data: any,
    send: EamuseSend
  ) => {
    const modelInfo = info.model.split(':');
    const gameRevision: number = parseInt(modelInfo[4]);
    if(gameRevision >= 2018090501 && gameRevision <= 2022052400){
      return Jb10GameLobby.Check(info, data, send);
    }
};

export const Entry = (
    info: EamuseInfo,
    data: any,
    send: EamuseSend
  ) => {
    const modelInfo = info.model.split(':');
    const gameRevision: number = parseInt(modelInfo[4]);
    if(gameRevision >= 2018090501 && gameRevision <= 2022052400){
      return Jb10GameLobby.Entry(info, data, send);
    }
};

export const Refresh = (
    info: EamuseInfo,
    data: any,
    send: EamuseSend
  ) => {
    const modelInfo = info.model.split(':');
    const gameRevision: number = parseInt(modelInfo[4]);
    if(gameRevision >= 2018090501 && gameRevision <= 2022052400){
      return Jb10GameLobby.Refresh(info, data, send);
    }
};

export const Report = (
    info: EamuseInfo,
    data: any,
    send: EamuseSend
  ) => {
    const modelInfo = info.model.split(':');
    const gameRevision: number = parseInt(modelInfo[4]);
    if(gameRevision >= 2018090501 && gameRevision <= 2022052400){
      return Jb10GameLobby.Report(info, data, send);
    }
};

