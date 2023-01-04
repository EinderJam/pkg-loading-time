let startTime = Date.now();
require('aws-sdk');
console.log("aws-sdk required in " + (Date.now() - startTime) + "ms");

startTime = Date.now();
require('ssh2');
console.log("ssh2 required in " + (Date.now() - startTime) + "ms");