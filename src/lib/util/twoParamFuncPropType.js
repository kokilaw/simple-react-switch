const twoParamFuncPropType = (props, propName, componentName) => {
    const fn = props[propName]

    if (fn === undefined) {
        return new Error(
            `${propName} method must be a provided to handle the switch state changes`
        )
    }

    if (
        !fn.prototype ||
        (typeof fn.prototype.constructor !== 'function' &&
            fn.prototype.constructor.length !== 2)
    ) {
        return new Error(`${propName} must be a function with 2 args`)
    }

    return true
}

export default twoParamFuncPropType
