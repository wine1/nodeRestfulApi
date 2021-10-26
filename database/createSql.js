const { query } = require('./index')
async function selectAllData() {
  // let sql = `CREATE TABLE category(
  //   count int,
  //   id int,
  //   image_url varchar(255),
  //   level int,
  //   name varchar(255))`
  let sql = 'select * from shops;'
  let dataList = await query(sql)
  return dataList
}

async function getData() {
  let dataList = await selectAllData()
  return dataList
}

module.exports = { getData }
