import * as Jb8GameLobby from '../jb8/routes/lobby'
import * as Jb10GameLobby from '../jb10/routes/lobby'
import * as utils from '../utility/utils'

export const Check = (
    info: EamuseInfo,
    data: any,
    send: EamuseSend
) => {
  const gameVersion = utils.getGameVersion(info);

  if(gameVersion == utils.jubeatVersions.QUBELL){
    return  Jb8GameLobby.Check(info, data, send);
  }else if(gameVersion == utils.jubeatVersions.FESTO){
    return  Jb10GameLobby.Check(info, data, send);
  }
};

export const Entry = (
    info: EamuseInfo,
    data: any,
    send: EamuseSend
) => {
  const gameVersion = utils.getGameVersion(info);

  if(gameVersion == utils.jubeatVersions.QUBELL){
    return  Jb8GameLobby.Entry(info, data, send);
  }else if(gameVersion == utils.jubeatVersions.FESTO){
    return  Jb10GameLobby.Entry(info, data, send);
  }
};

export const Refresh = (
    info: EamuseInfo,
    data: any,
    send: EamuseSend
) => {
  const gameVersion = utils.getGameVersion(info);

  if(gameVersion == utils.jubeatVersions.QUBELL){
    return  Jb8GameLobby.Refresh(info, data, send);
  }else if(gameVersion == utils.jubeatVersions.FESTO){
    return  Jb10GameLobby.Refresh(info, data, send);
  }
};

export const Report = (
    info: EamuseInfo,
    data: any,
    send: EamuseSend
) => {
  const gameVersion = utils.getGameVersion(info);

  if(gameVersion == utils.jubeatVersions.QUBELL){
    return  Jb8GameLobby.Report(info, data, send);
  }else if(gameVersion == utils.jubeatVersions.FESTO){
    return  Jb10GameLobby.Report(info, data, send);
  }
};
