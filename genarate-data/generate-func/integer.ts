import floating from './floating'

export default (max = 100, min = 0) => Math.floor(floating(max, min))
