export default (length = 36) =>
    Date.now().toString(length) + Math.random().toString(length).substr(2)
