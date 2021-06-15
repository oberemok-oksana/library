import $ from "../core";

$.prototype.getAttr = function (attrName) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].getAttribute(attrName)) {
      continue;
    }

    return this[i].getAttribute(attrName);
  }

  return this;
};

$.prototype.setAttr = function (name, value) {
  for (let i = 0; i < this.length; i++) {
    return this[i].setAttribute(name, value);
  }

  return this;
};

$.prototype.removeAttr = function (name) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].getAttribute(name)) {
      continue;
    }

    return this[i].removeAttribute(name);
  }

  return this;
};
