const exec = require("child_process").exec;

module.exports = async function(filepath) {
  return new Promise((resolve, reject) => {
    exec(`midi2abc ${filepath}`, function(error, stdout, stderr) {
      resolve(stdout);
    });
  });
};
