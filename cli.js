const program = require('commander')
const api = require('./index')

program  //选项
  .option('-x, --xxx', 'xxx')
program  //命令
  .command('add')
  .description('add a task')
  .action((...args) => {
    const words = args.slice(0, -1).join(' ')
    api.add(words)
  })
program  //命令
  .command('clear')
  .description('clear all tasks')
  .action((...args) => {
    console.log('this is clear')
  })

program.parse(process.argv)