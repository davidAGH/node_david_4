// task1///////////////////////////////////////////////////////

// const fs = require('fs')

// const file = './examples.txt'

// fs.stat(file, (err, stats) => {
//     if(err) throw err

//     const fileSizeInKB = stats.size / 1024;

//     console.log(`file size: ${fileSizeInKB.toFixed(2)}`)
// })

//task2//////////////////////////////////////////////////////////////////

// var Course = {
// 	folderName: 'NodeJS',
// 	fileName: 'node.js'
// } 

// const fs = require('fs')
// const json = JSON.stringify(Course);
// const fileName = './folderName/fileName.json'

// fs.writeFile(fileName, json, (err) => {
//     if(err) throw err
// })


//task3////////////////////////////////////////////////////////////////////

// const fs = require('fs-extra');
// const path = require('path');

// const directoryPath = path.join(__dirname, 'NodeJS');

// fs.remove(directoryPath)
//     .then(() => {
//     console.log(`Directory deleted: ${directoryPath}`);
// })
//     .catch((err) => {
//     console.error(err);
// });