const core = require('@actions/core');
const github = require('@actions/github');

try {
  var humancat = require('humancat');

  const humanName = core.getInput('human-name');
  const catName = core.getInput('cat-name');

  console.log(`Hello ${humanName} and ${catName}!`);

  var hc = new humancat.Humancat(human_name=humanName, cat_name=catName);

  core.setOutput("human-name", hc.name);
  core.setOutput("human-age", hc.age);
  core.setOutput("cat-name", hc.name);
  core.setOutput("cat-status", hc.status);

} catch (error) {
  core.setFailed(error.message);
}

