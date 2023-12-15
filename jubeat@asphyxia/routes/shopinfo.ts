import * as Jb8GameShopInfo from '../jb8/routes/shopinfo'
import * as Jb10GameShopInfo from '../jb10/routes/shopinfo'
import * as utils from '../utility/utils'

export const ShopInfo = (
  info: EamuseInfo,
  data: any,
  send: EamuseSend
) => {
  const gameVersion = utils.getGameVersion(info);

  if(gameVersion == utils.jubeatVersions.QUBELL){
    return  Jb8GameShopInfo.ShopInfo(info, data, send);
  }else if(gameVersion == utils.jubeatVersions.FESTO){
    return  Jb10GameShopInfo.ShopInfo(info, data, send);
  }
};
