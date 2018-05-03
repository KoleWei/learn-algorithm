/**  
 *  给定一个字符串，找出不含有重复字符的最长子串的长度。
 *
 *  示例：
 *
 *  给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。
 *
 *  给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。
 *
 *  给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列  而不是子串。
 */

/**
 * @param {string} s
 * @return {number}
 * think： 不重复字串传入数组中, 获取最大子串长度
 */
var lengthOfLongestSubstring = function(s) {
    let num = 0;
    let max = 0;
    let c = [];
    for (const i in s){
        
        // 如果存在进行切割
        if (c.includes(s[i])){
            c = c.splice(c.indexOf(s[i]) + 1);
        }
        c = c.concat(s[i]);
        num = c.length;
        
        if (num > max){
            max = num;
        }
    }
    return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('abbacdes'));