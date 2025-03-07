const mostValuable = (sentence) => {
  let s = sentence.split(" ");
  let result = s[0];
  let preVal = 0;
  for (currentIndex = 0; currentIndex < s.length; currentIndex++) {
    let curValue = 0;
    for (strIndex = 0; strIndex < s[currentIndex].length; strIndex++) {
      curValue += s[currentIndex].charCodeAt(strIndex) % 32;
    }
    if (curValue > preVal) {
      result = s[currentIndex];
      preVal = curValue;
    }
  }

  return result;
};

module.exports = mostValuable;