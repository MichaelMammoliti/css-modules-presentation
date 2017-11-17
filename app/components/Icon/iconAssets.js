const generateSVGIconObject = icons => {
  const obj = {};

  icons.forEach(name =>
    obj[name] = require(`./assets/${name}.svg`)
  );

  return obj;
};

const iconNames = [
  'close',
  'edit',
  'tick',
];

export default generateSVGIconObject(iconNames);