
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    // go backwards through nums1 resulting array
    let p = m+n -1;
    while(p >= 0) {
        // if nums1 has the greatest value, use that
        if(n == 0 && m > 0 || nums1[m-1] >= nums2[n-1]) {
            nums1[p] = nums1[m-1];
            m--;
        } else {
            // use nums2
            nums1[p] = nums2[n-1];
            n--;
        }
        p--;
    }

};

let nums1 = [1,2,3,0,0,0];

merge(nums1, 3, [2,5,6], 3);

console.log(nums1)
