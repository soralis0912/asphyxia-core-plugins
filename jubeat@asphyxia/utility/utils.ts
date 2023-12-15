export const getGameVersion = (info: EamuseInfo) =>
{
    const modelInfo = info.model.split(':');
    const gameRevision: number = parseInt(modelInfo[4]);
    if (gameRevision >=2016033001 && gameRevision <= 2017060600){
        return jubeatVersions.QUBELL;
    }else if(gameRevision == 2017061500){
        return jubeatVersions.QUBELL; // Qubell Extend
    }else if(gameRevision >= 2017072604 && gameRevision <= 2018070901){
        return jubeatVersions.CLAN;
    }else if(gameRevision >= 2018090501 && gameRevision <= 2022052400){
        return jubeatVersions.FESTO;
    }else{
        console.log(`gameRevision [${gameRevision}] is not support`)
    }
};

export const jubeatVersions = {
    QUBELL: 8,
    CLAN: 9,
    FESTO:  10,
}
