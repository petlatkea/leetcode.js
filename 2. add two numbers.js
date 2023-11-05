/**
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order, and each of their nodes contains a single digit. 
 * Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example 1:
 *  Input: l1 = [2,4,3], l2 = [5,6,4]
 *  Output: [7,0,8]
 *  Explanation: 342 + 465 = 807.
 * 
 * Notes:
 * It really helped a lot, once I decided to use recursive functions for BOTH decoding the lists
 * into numbers, and encoding numbers back into lists.
 * It could be done with loops, but the "reverse" numbers would require a lot of additional counting.
 * 
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let v1 = listToNum(l1);
  let v2 = listToNum(l2);
  
  let v_sum = v1+v2;
  let l_sum = numToList(v_sum);

  return l_sum;
};

/* convert a list to a number 
   the number is added to 10 times the next in the list
*/
function listToNum(list) {
  if(list.next) {
    return list.val + listToNum(list.next) * 10;
  } else {
    return list.val;
  }
}

function numToList(num) {
  if(num < 10) {
    return new ListNode(num);
  } else {
    const digit = num % 10;
    const remain = (num - digit) / 10;
    return new ListNode(digit, numToList(remain));
  }
}

function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

// TESTs

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const v1 = listToNum(l1);
console.log("list:", l1);
console.log("value:", v1);
const vs = 807;
const ls = numToList(vs);
console.log("s-value:", vs);
console.log("s-list:", ls);
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

//const l1 = new ListNode(0);
//const l2 = new ListNode(0);


const result = addTwoNumbers(l1,l2);
console.log(result);