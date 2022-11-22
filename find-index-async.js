/**
run this code in node js | javascript execution platform ex: chrome, firefox browser
*/
// lets assume we have this array to be iterate
const arr = [12,3,5,6,7]
// we create custom find Index prototype function
Array.prototype.findIndexAsync = async function (callback) {
  for (let i in this) {
    // this callback simulate same as findIndex function callback
    const data = await callback(this[i], +i, this)
    // if data has true value then break the callbakc calling an return index
    if (data) {
      return +i // as index
    }
  }
  return -1
}
async function init() {
    // we name function find Index async function
const index = await arr.findIndexAsync(async (accu , index) => {
  // the same you are calling findById method from mongoose you can apply 
    const data = await databaseFinById(accu);
    if (data) return true 
  })
  console.log("index:", index)
}
init()
/**
database terms: not need to apply it is only for demo
*/
async function databaseFinById(id) {
  const db = [1,2,4,6,5,8,9]
  return db.find(accu => accu === id);
}
