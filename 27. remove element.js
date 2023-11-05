
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    // find last element that isn't val
    let last = nums.length-1;
    while(nums[last]===val) last--;
    for(let cur=last-1; cur >= 0; cur--) {
        // if current element is val, swap with last
        if(nums[cur] === val) {
            nums[cur] = nums[last];
            nums[last] = val; // not really necessary
            last--;
        }
    }
    // return the length of the array until vals
    return last+1;
};
