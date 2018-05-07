/** 
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 * 14. 最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 *  输入: ["flower","flow","flight"]
 *  输出: "fl"
 * 示例 2:
 *  输入: ["dog","racecar","car"]
 *  输出: ""
 *  解释: 输入不存在公共前缀。
 */

 /**
 * @param {string[]} strs 所有输入只包含小写字母 a-z 。
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];

    const comchars = strs.pop();
    let i = 0;
    for ( ; ; i++)
        for (const str of strs) 
            if (!str[i] || !comchars[i] || str[i] != comchars[i])
                return comchars.substr(0, i);
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["flower", "f2low", "flight"]));