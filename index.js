const homedir = require('os').homedir() //home目录
const home = process.env.HOME || homedir  //优先home变量
const fs = require('fs')
const p = require('path')  //path用来拼路径，防止系统不一致
const dbPath = p.join(home, '.todo')

module.exports.add = (title) => {
  // 读取之前的任务
  // 往里面添加一个 title 任务
  // 存储任务到文件
  fs.readFile(dbPath, {flag: 'a+'}, (err, data) => {  //参数多看文档，a+意思是读取并写，且无目录时创建目录
    if (err) {
      console.log(err)
    } else {
      let list
      try {
        list = JSON.parse(data.toString())
      } catch (err2) {
        list = []
      }
      const task = {
        title: title,
        done: false
      }
      list.push(task)
      const string = JSON.stringify(list)
      fs.writeFile(dbPath, string + '\n', (err3) => {
        if (err3) {console.log(err3)}
      })
    }
  })
}