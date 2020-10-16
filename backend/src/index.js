require('dotenv').config()
const app = require('./app')
require('./database')

const main = async () => {
  await app.listen(app.get('port'))
  console.log('SERVER ON PORT:', app.get('port'))
}

main();
