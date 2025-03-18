// //========================== Task 1 =========================
// import fs from "fs";

// export function writeNumbers() {
//   const numbers = Array.from(
//     { length: 100 },
//     () => Math.floor(Math.random() * 100) + 1
//   );
//   fs.writeFileSync("sonlar.txt", numbers.join("\n"), "utf8");
//   console.log("100 ta tasodifiy son sonlar.txt ga yozildi.");
// }

// //========================== Task 2 =========================
// export function readNumbers() {
//   try {
//     const data = fs.readFileSync("sonlar.txt", "utf8");
//     const numbers = data.split("\n").map(Number);
//     console.log("O‘qilgan sonlar:", numbers);
//     return numbers;
//   } catch (error) {
//     console.error("Faylni o‘qishda xato:", error.message);
//   }
// }

// //========================== Task 3 =========================
// import path from "path";
// const dir = "my_nodejs_files";
// fs.mkdirSync(dir, { recursive: true });
// fs.writeFileSync(path.join(dir, "hello_world.txt"), "Hello, world!", "utf8");
// console.log(fs.readFileSync(path.join(dir, "hello_world.txt"), "utf8"));
// fs.appendFileSync(path.join(dir, "hello_world.txt"), `\n${new Date()}`, "utf8");

// //========================== Task 4 =========================
// import os from "os";
// console.log(`Hostname: ${os.hostname()}, Username: ${os.userInfo().username}`);

// //========================== Task 5 =========================
// const docsPath = path.join("docs", "readme.md");
// fs.mkdirSync("docs", { recursive: true });
// fs.writeFileSync(docsPath, "Readme fayli", "utf8");
// console.log("Readme fayli yaratildi:", docsPath);

// //========================== Task 6 =========================
// import { EventEmitter } from "events";
// const eventEmitter = new EventEmitter();
// process.stdin.on("data", (data) =>
//   eventEmitter.emit("dataReceived", data.toString().trim())
// );
// eventEmitter.on("dataReceived", (msg) => console.log("Kiritilgan:", msg));

// //========================== Task 7 =========================
// const file = process.argv[2];
// fs.readFile(file, "utf8", (err, data) => {
//   if (err) console.error("Faylni o‘qib bo‘lmadi.");
//   else console.log("Fayl tarkibi:", data);
// });

// //========================== Task 8 =========================
// fs.writeFileSync("message.txt", "Hello World!", "utf8");
// console.log("message.txt yaratildi.");

// //========================== Task 9 =========================
// fs.appendFileSync("message.txt", " This is appended content.", "utf8");
// console.log("Qo‘shimcha yozildi.");

//========================== Task 10 =========================
fs.readdir(".", (err, files) => {
  if (err) console.error("Katalogni o‘qishda xato:", err);
  else console.log("Katalog tarkibi:", files);
});
