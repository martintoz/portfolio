const app = require('./src/app.js');
require('dotenv').config();

const {
  PORT
} = process.env;

async function main() {
    await app.listen(PORT)
    console.log("Server on port " + PORT);
}

main(); 