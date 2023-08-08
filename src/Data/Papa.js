


const csvFilePath = 'googleplaystore_user_reviews.csv'
const csv = require('csvtojson');
(async () => {
  const jsonObj = await csv().fromFile(csvFilePath)
  console.log(jsonObj);
})();