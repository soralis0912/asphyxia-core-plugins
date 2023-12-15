import * as Jb8GameEnd from '../jb8/routes/gameend'
import * as Jb10GameEnd from '../jb10/routes/gameend'
import * as utils from '../utility/utils'

export const saveProfile = async (
  info: EamuseInfo,
  data: any,
  send : EamuseSend
) => {
  const gameVersion = utils.getGameVersion(info);

  if (gameVersion == utils.jubeatVersions.QUBELL){
    return await Jb8GameEnd.saveProfile(info, data, send);
  }else if(gameVersion == utils.jubeatVersions.FESTO){
    return await Jb10GameEnd.saveProfile(info, data, send);
  }
}

