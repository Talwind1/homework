import Math
const yargs = require("yargs");

yargs.version('1.1.0')

yargs.command({
  command: 'add',
  describe: 'Adding two numbers',
  builder: {
    num1: {
      describe: 'First number',
      demandOption: true,
      type: 'integer'
    },
    num2: {
      describe: 'Second number',
      demandOption: true,
      type: 'integer'
    }
  },
  handler(argv){
    console.log(argv.num1 + argv.num2)
    
  }
})

yargs.command({
  command: 'sub',
  describe: 'Subscrubing two numbers',
  builder: {
    num1: {
      describe: 'First number',
      demandOption: true,
      type: 'integer'
    },
    num2: {
      describe: 'Second number',
      demandOption: true,
      type: 'integer'
    }
  },
  handler(argv){
    console.log(argv.num1 - argv.num2)
    
  }
})

yargs.command({
  command: 'multiple',
  describe: 'multiplying two numbers',
  builder: {
    num1: {
      describe: 'First number',
      demandOption: true,
      type: 'integer'
    },
    num2: {
      describe: 'Second number',
      demandOption: true,
      type: 'integer'
    }
  },
  handler(argv){
    console.log(argv.num1 * argv.num2)
    
  }
})

yargs.command({
  command: 'divide',
  describe: 'divide number by number',
  builder: {
    num1: {
      describe: 'First number',
      demandOption: true,
      type: 'integer'
    },
    num2: {
      describe: 'Second number',
      demandOption: true,
      type: 'integer'
    }
  },
  handler(argv){
    console.log(argv.num1 / argv.num2)
    
  }
})

yargs.command({
  command: 'power',
  describe: 'Powering two numbers',
  builder: {
    num1: {
      describe: 'First number',
      demandOption: true,
      type: 'integer'
    },
    num2: {
      describe: 'Second number',
      demandOption: true,
      type: 'integer'
    }
  },
  handler(argv){
    console.log(Math.pow(argv.num1, argv.num2))
    
  }
})
// parses all the arguments and commands
yargs.parse();