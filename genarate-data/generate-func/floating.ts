export default (max = 5, min = 0, rounding = 2) =>
    +(Math.random() * (+max - +min) + +min).toFixed(rounding)
