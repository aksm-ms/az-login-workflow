var utility = require('utility')

console.log("Running ps script")
utility.execSync("powershell", "${{github.workspace}}/test.ps1 -cred foo")
console.log("PS Script complete")
