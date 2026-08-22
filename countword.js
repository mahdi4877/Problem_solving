function countWordFrequency(sentence) {
  const words = sentence.toLowerCase().match(/\w+/g) || [];
  const frequencyMap = new Map();

  for (const word of words) {
    frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
  }

  return frequencyMap;
}

const text = "JavaScript is great and learning JavaScript is fun";
console.log(countWordFrequency(text));
