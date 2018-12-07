const twoParamFuncPropType = (props, propName, componentName) => {
  var fn = props[propName];
  if (
    !fn.prototype ||
    (typeof fn.prototype.constructor !== "function" &&
      fn.prototype.constructor.length !== 2)
  ) {
    return new Error(propName + " must be a function with 2 args");
  }
};

export default twoParamFuncPropType;
