/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  if (!cpdomains || !cpdomains.length) {
    return [];
  }
  let map = {};
  for (let log of cpdomains) {
    let [count, domain] = log.split(/\ /);
    let sp = domain.split('.');
    let hosts = '';
    while (sp.length) {
      let key = sp.join('.');
      if (key in map === false) {
        map[key] = 0;
      }
      map[key] += count*1;
      sp.shift();
    }
  }
  return Object.keys(map).map(key => map[key] + ' ' + key);
};