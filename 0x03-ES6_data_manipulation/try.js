/* eslint-disable quotes */
const colors = ["red", "yellow", "blue", "green"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});

console.log(colors.reverse());
