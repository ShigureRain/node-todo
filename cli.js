const program = require('commander')
const api = require('./index')

program  //选项
  .option('-x, --xxx', 'xxx')
program  //命令
  .command('add')
  .description('add a task')
  .action((...args) => {
    const words = args.slice(0, -1).join(' ')
    api.add(words).then(() => {console.log('添加成功')},()=>{console.log('添加失败')})
  })
program  //命令
  .command('clear')
  .description('clear all tasks')
  .action(() => {
    api.clear().then(() => {console.log('清除成功')},()=>{console.log('清除失败')})
  })

program.parse(process.argv)

if(process.argv.length ===2 ){
  void api.showAll()
}