'use strict';

const methods = iface => {
  const fs = new Array();
  for (const element in iface) {
    if (typeof iface[element] === 'function') {
      fs.push([iface[element].name, iface[element].length]);
    }
  }
  return fs;
};
module.exports = { methods };
