const path = require('path')
const PROJECT_PATH = path.resolve(__dirname, '../')
const PROJECT_NAME = path.parse(PROJECT_PATH).name
module.exports = {
  PROJECT_NAME,
  PROJECT_PATH
}