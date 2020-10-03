var fs = require('fs');

var dataset1 = fs.readFileSync('./dataset1.csv', 'utf-8').split('\n');
var dataset2 = fs.readFileSync('./dataset2.csv', 'utf-8').split('\n');

var map = {};
var g = 9.8;

dataset1.forEach((line, i) => {
  if (i > 0) {
    let fields = line.split(',');
    if (fields[0] in map === false) {
      map[fields[0]] = {name: fields[0]};
    }
    map[fields[0]] = {
      leg_length: fields[1],
      diet: fields[2]
    };
  }
});
dataset2.forEach((line, i) => {
  if (i > 0) {
    let fields = line.split(',');
    if (fields[0] in map === false) {
      map[fields[0]] = {};
    }
    map[fields[0]].stride_length = fields[1];
    map[fields[0]].stance = fields[2];
    map[fields[0]].allSet = true;
    map[fields[0]].name = fields[0];
  }
});
var list = Object.values(map);
list.forEach(v => {
  if (v.allSet) {
    v.speed = ((v.stride_length*1 / v.leg_length*1) - 1) * Math.sqrt(v.leg_length*1 * g);
  }
});
list = list.filter(v => v.allSet && v.stance === 'bipedal');
list.sort((a, b) => {
  return a.speed = b.speed;
})
console.log(list.map(v => v.name))