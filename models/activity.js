// 'use strict'

// const { query } = require('../database/index')

// const tables = {
//   activity: `create table if not exists activity(
//       description varchar(255),
//       icon_color varchar(255),
//       icon_name varchar(255),
//       id int,
//       name varchar(255),
//       ranking_weight int
//      )`,
// }

// const createTable = tb => {
//   query(
//     tb,
//     res => {
//       console.log('suss', res)
//     },
//     err => {
//       console.log('fail', err)
//     }
//   )
// }

// for (let key in tables) {
//   if (tables.hasOwnProperty(key)) {
//     createTable(tables[key])
//   }
// }
