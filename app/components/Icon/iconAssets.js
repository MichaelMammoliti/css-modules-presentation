import fs from 'fs';

const assetsDirectory = './assets';

const iconNames = fs
  .readdirSync(assetsDirectory)
  .reduce((acc, fileName) => ({
    ...acc,
    [fileName]: require(`${assetsDirectory}/${fileName}.svg`)
  }))
;

export default iconNames;