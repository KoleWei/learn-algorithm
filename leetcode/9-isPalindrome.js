/**
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 示例 1:
 *  输入: 121
 *  输出: true
 * 示例 2:
 *  输入: -121
 *  输出: false
 *  解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 示例 3:
 *  输入: 10
 *  输出: false
 *  解释: 从右向左读, 为 01 。因此它不是一个回文数。
 */

 /**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 去除负数和后面是0的
    if (x < 0 || (x % 10 == 0 && x != 0)) return false;
    const str = String(x);
    const len = Math.floor(str.length/2);
    for (let i = 0; i < len; i++) {
        if (str[i] !== str[str.length-i-1])
            return false;
    }
    return true;
};

console.log(isPalindrome(12321));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

var isPalindrome2 = function(x) {
    if(x < 0 || (x % 10 == 0 && x != 0)) return false;
     let reverseNumber = 0;
     while(x > reverseNumber){
         reverseNumber = reverseNumber * 10 + x % 10;
         x /= 10;
         x = Math.floor(x);
     }
     return x == reverseNumber || x == Math.floor(reverseNumber / 10);
 };