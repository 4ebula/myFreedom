try {
  new Map({});
} catch (error) {
  console.log(error.name, error.message);
  //throw new Error('FUCK YOU')
}
console.log(new Image());
console.dir(new Image());

function setAttrParams() {
  elem.hasAttribute(attrName);
  elem.getAttribute(attrName);
  elem.setAttribute(attrName);
  elem.removeAttribute(attrName);
  elem.attribues; // get elem attributes coolection
}

import {functon} from './test.js';
import func2 from './test2.js';
console.log(functon);
console.log(func2);