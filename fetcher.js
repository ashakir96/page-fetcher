const request = require('request');
const fs = require('fs');
const input = process.argv.slice(2);


request(`${input[0]}`, (error, response, body) => {
  if (error) {
    throw error;
  }
  if (response.statusCode !== 200) {
    console.log("Ran into error", response.statusCode);
    process.exit();
  }
  fs.writeFile(`${input[1]}`, body, () => {
    const stats = fs.statSync(input[1]);
    const fileSizeInBytes = stats.size;
    console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${input[1]}`);
  });
});