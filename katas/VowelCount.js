// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
  str = str.toLowerCase()
  var vowelsCount = 0;
  var vowels = ['a', 'e', 'i', 'o','u'];
  for (vowel in vowels) {
  	while (str.includes(vowels[vowel])){
  		vowelsCount++;
  		str = str.replace(vowels[vowel],"");
  	};
  };
  
  return vowelsCount;
}