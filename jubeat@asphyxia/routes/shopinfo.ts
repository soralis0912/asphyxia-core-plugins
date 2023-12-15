import * as Jb10GameShopInfo from '../jb10/routes/shopinfo'

export const ShopInfo =  (
  info: EamuseInfo,
  data: any,
  send: EamuseSend
) => {
  const modelInfo = info.model.split(':');
  const gameRevision: number = parseInt(modelInfo[4]);
  if(gameRevision >= 2018090501 && gameRevision <= 2022052400){
    return Jb10GameShopInfo.ShopInfo(info, data, send);
  }
};
