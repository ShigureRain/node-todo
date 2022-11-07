const homedir = require('os').homedir() //home目录
const home = process.env.HOME || homedir  //优先home变量
const fs = require('fs')
const p = require('path')  //path用来拼路径，防止系统不一致
const dbPath = p.join(home, '.todo')
const db = require('./db.js')

module.exports.add = async (title) => {
  // 读取之前的任务
  const list = await db.read()
  // 往里面添加一个 title 任务
  list.push({title,done:false})
  // 存储任务到文件
  await db.write(list)
}