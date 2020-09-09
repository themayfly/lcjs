/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  let emailMap = {
    // 'abc@mail.com': [0, 2],
    // 'def@mail.com': [3]
  };
  let nameMap = {};
    
  for (let idx in accounts) {
    let name = accounts[idx][0];
    let emails = accounts[idx].slice(1);
    for (let email of emails) {
      if (email in emailMap === false) {
        emailMap[email] = [];
      }
      emailMap[email].push(idx);
    }
  }
  console.log(emailMap);

  let targetArr = Object.keys(emailMap).map(key => {
    return {
      key: [key],
      idx: emailMap[key]
    }
  });

  let result = [];
  while (targetArr.length) {

  }
  
};

accounts = [
  ["John","johnsmith@mail.com","john_newyork@mail.com"],
  ["John","johnsmith@mail.com","john00@mail.com"],
  ["Mary","mary@mail.com"],
  ["John","johnnybravo@mail.com"]
]
console.log(accountsMerge(accounts));

