/**
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * Example 1:
 *  Input: s = "abcabcbb"
 *  Output: 3
 *  Explanation: The answer is "abc", with the length of 3.
 * 
 * Example 3: 
 *  Input: s = "pwwkew"
 *  Output: 3
 *  Explanation: The answer is "wke", with the length of 3.
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let start = 0;
  let length = 0;  
  let longest_start = 0;
  let longest_length = 0;

  let substr = s.substring(start, start+length);

  while(start + length < s.length) {
    // next character
    const c = s.charAt(start+length);
    // if character is in substr, then we have repeating characters
    const repeating = substr.indexOf(c);
    if(repeating!=-1) {
      // if the current substring was longer than the last one, store this
      if(length > longest_length) {
        longest_start = start;
        longest_length = length;
      }

      // reset start to right after repeating character
      start = start + repeating+1;
      length = 0;

    } else {
      // no repeating character, increase length
      length++;
    }

    // find next substring
    substr = s.substring(start, start+length)
  }

  if(length > longest_length) {
    longest_length = length;
  }

  console.log("Longest substring " + substr );
  console.log("Start at " + start + " length: " + longest_length);
  console.log("Longest substring " + s.substring(start,start+length) );

  return longest_length;

};

// *** TEST ***
const l1 = lengthOfLongestSubstring("")
console.log('l1 answer: ', l1);
