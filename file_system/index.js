const fs = require("fs");
const path = require("path");
const fsPromise = require('fs').promises;

// fs.readFile(path.join(__dirname,'files','users.txt'),'utf-8',(res,err)=>{
//     if(err){
//         console.log(err);
//     }else{
//     console.log(res.toString());
//     }
// })

// let appendData = "\nthis is new text file we are append data";
// let user = { id: 101, name: "Hussain" };
// fs.writeFile(
//   path.join(__dirname, "files", "create.txt"),
//   JSON.stringify(user),
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("file is created");
//       if (fs.existsSync(path.join(__dirname, "files", "create.txt"))) {
//         fs.appendFile(
//           path.join(__dirname, "files", "create.txt"),
//           appendData,
//           (err) => {
//             if (err) {
//               console.log(err);
//               fs.rename(
//                 path.join(__dirname, "files", "create.txt"),
//                 path.join(__dirname, "files", "created.txt"),
//                 (err) => {
//                   if (err) {
//                     console.error("Error renaming file:", err);
//                   } else {
//                     console.log("File renamed successfully");
//                   }
//                 }
//               );
//             } else {
//               console.log("data is append in create.txt file");
//             }
//           }
//         );
//       } else {
//         console.log("file is not exist");
//       }
//     }
//   }
// );
//}


const getFile = async () =>{
  let data = await fsPromise.readFile(path.join(__dirname,'files','users.txt'),'utf-8');
  await fsPromise.writeFile(path.join(__dirname,'files','newText.txt'),'Hello World');
  await fsPromise.appendFile(path.join(__dirname,'files','users.txt'),'we are the learning point');
  await fsPromise.unlink(path.join(__dirname,'files','newText.txt'));
  console.log(data);
}

getFile();
