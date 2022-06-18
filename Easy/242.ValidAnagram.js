/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(!s || !t){
        return false;
    }

    return sortAlphabets(t) === sortAlphabets(s)
};

function sortAlphabets(text) {
  return text.split("").sort().join("");
};



let s = "anagramm", t = "nagaram"

console.log(sortAlphabets("cbaebabacd"));