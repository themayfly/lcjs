var _ = require('lodash');
var input = `Id,ParentId,Name,Description
1000,null,Foo1000,Foo1000 node
700,500,Foo700,Foo700 node
900,100,Foo900,Foo900 node
500,600,Foo500,Foo500 node
100,null,Foo100,Foo100 node
1100,200,Foo1100,Foo1100 node
800,500,Foo800,Foo800 node
200,100,Foo200,Foo200 node
300,1100,Foo300,Foo300 node
400,200,Foo400,Foo400 node
600,100,Foo600,Foo600 node`;

// constraints
// 1. value contains no separator
// 2. 2 depth ?
let lines = input.split(/\n/);
lines.splice(0, 1);
const people = lines.map(line => {
  let splitted = line.split(',');
  return {
    id: splitted[0],
    parentId: splitted[1],
    name: splitted[2],
    description: splitted[3]
  };
})

const findChildren = node => {
  if (node.children) {
    return;
  }
  let children = people.filter(person => person.parentId === node.id);
  if (children && children.length) {
    // node.children = children;
    let _childrenMap = {};
    children.forEach(child => {
      findChildren(child);
      _childrenMap[child.id] = child;
    });
    node.children = _childrenMap;
  }
}

let result = {};
people.forEach(person => {
  if (person.parentId === 'null') {
    console.log('#### person.parentId = ', person.id)
    findChildren(person);
    result[person.id] = person
  }
})
console.log(JSON.stringify(result, null, 2));
