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
 * Okay, got really annoying with the BigInt values after 1560 test-cases ... fixed though ... 
 * maybe could be avoided by doing math on the list themselves, but now I don't want to!
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
    return BigInt(list.val) + listToNum(list.next) * 10n;
  } else {
    return BigInt(list.val);
  }
}

function numToList(num) {
  if(num < 10) {
    return new ListNode(num);
  } else {
    const digit = BigInt(num) % 10n;
    const remain = BigInt(num - digit) / 10n;
    return new ListNode(digit, numToList(remain));
  }
}

function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

function arrayToList(arr, index=0) {
  if(index < arr.length-1) {
    return new ListNode(arr[index], arrayToList(arr,index+1));
  } else {
    return new ListNode(arr[index])
  }
}

const l1 = arrayToList([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
const l2 = arrayToList([5,6,4]);

const result = addTwoNumbers(l1,l2);
console.log(result);

//console.log(l1);
//console.log(listToNum(l1));

// TESTs
/*
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
*/