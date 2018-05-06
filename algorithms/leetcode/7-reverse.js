/** 
 * 反转整数
 * 
 * 示例 1:
 *  输入: 123
 *  输出: 321
 * 示例 2:
 *  输入: -123
 *  输出: -321
 * 示例 3:
 *  输入: -120
 *  输出: -21
 */

var reverse = function(x) {
    const numStr = String(x > 0 ? x : -x).split("").reverse().join('');
    const num = x < 0 ? - Number(numStr) : Number(numStr);
    if (-2147483648  > num || num > 2147483647) return 0;
    return num;
};
console.log(reverse(123));
console.log(reverse(321));
console.log(reverse(-120));
console.log(reverse(1534236469));
