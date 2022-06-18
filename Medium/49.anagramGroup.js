// anagrams
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

var sortAlphabets = function (text) {
  return text.split("").sort().join("");
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 1 && strs[0] === "") return [[""]];
  const finalArray = [];
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let sorted = sortAlphabets(strs[i]);
    if (map.has(sorted)) {
      let previosElements = map.get(sorted);
      map.set(sorted, [strs[i], ...previosElements]);
    } else map.set(sorted, [strs[i]]);
  }
  map.forEach((values, key) => {
    finalArray.push(values);
  });

  return finalArray;
};
console.log(groupAnagrams(strs))
