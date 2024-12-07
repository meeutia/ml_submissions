const { Firestore } = require('@google-cloud/firestore');
const path = require('path');

const pathKey = path.resolve('./submissionmlgc-meutia-443708-9a30588b6001.json')
     
async function storeData(id, data) {

  try {
    const db = new Firestore();
 
    const predictCollection = db.collection('predictions');
    return predictCollection.doc(id).set(data);
  }catch(error) {
    console.error(error);
  }
}

 
module.exports = storeData;