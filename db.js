const homedir = require('os').homedir() //home目录
const home = process.env.HOME || homedir  //优先home变量
const fs = require('fs')
const p = require('path')  //path用来拼路径，防止系统不一致
const dbPath = p.join(home, '.todo')

const db = {
  read(path = dbPath) {
    return new Promise((resolve, reject) => {
      fs.readFile(dbPath, {flag: 'a+'}, (err, data) => {  //参数多看文档，a+意思是读取并写，且无目录时创建目录
        if (err) {
          return reject(err)
        }
        let list
        try {
          list = JSON.parse(data.toString())
        } catch (err2) {
          list = []
        }
        resolve(list)
      })
    })
  },
  write(list, path = dbPath) {
    return new Promise(((resolve, reject) => {
      const string = JSON.stringify(list)
      fs.writeFile(dbPath, string + '\n', (err) => {
        if (err) {return reject(err)}
        resolve() 
      })
    }))
  }
}

module.exports = db