const exec = require('child_process').exec;
const chalk = require('chalk');

const gitClone = 'npx rimraf react-cli && git clone git@github.com:zweekend01/react-cli.git && cd react-cli';
const npmInstall = 'npm install';

module.exports = () => {
  console.log(chalk.red('\n Start creating a new react project...'));

  exec(gitClone, (error, stdout, stderr) => {
    if (error) {
      console.log(error);
      process.exit();
    }

    console.log(chalk.blue('\n Create completed!'));
    console.log(chalk.red('\n Start install packages...'));

    exec(npmInstall, (error, stdout, stderr) => {
      if (error) {
        console.log(error);
        process.exit();
      }

      console.log(chalk.blue('Install Completed!'));
    })
  })
}