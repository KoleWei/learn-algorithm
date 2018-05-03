/** 
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为1000。
 * 示例 1：
 *  输入: "babad"
 *  输出: "bab"
 *  注意: "aba"也是一个有效答案。
 * 
 * 示例 2：
 *  输入: "cbbd"
 *  输出: "bb"
 */

/**
 * @param {string} s
 * @return {string}
 * think: 与第三题一样, 定义数组, 保存符合的数组
 */
var longestPalindrome = function(s) {
    let maxPalindromList = [];
    let c = {};
    for (let i = 0; i < s.length; i++){
        // 存在重复的
        if (c[s[i]] !== undefined){
            // 截取最近重复的
            const sub = Object.assign([], s).splice(c[s[i]], i - c[s[i]] + 1);
            if (maxPalindromList.length < sub.length)
                maxPalindromList = sub
        }
        // 解决三个以上重复的; 判断前后是否一致
        if (s[i - 1] != s[i] || s[i] != s[i + 1])
            c[s[i]] = i;
    }
    if (maxPalindromList.length == 0)
        return s[0];
    return maxPalindromList.join('');
};  


console.log(longestPalindrome('acccccd'));
console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('abcba'));
console.log(longestPalindrome('a'));


// 理解错题意, "abcba" ===> "bcb"
var longestPalindrome2 = function(s) {
    let maxPalindromList = [];
    let c = [];
    for (const i in s){

        c[c.length] = s[i];
        // 如果存在重复
        if (c.indexOf(s[i]) !== -1 && c.indexOf(s[i]) !== c.lastIndexOf(s[i])){
            // 截取重复的子串
            const sub = c.splice(c.indexOf(s[i]));
            // 继续执行字串
            c = sub.concat();
            // 三位以上重复, 不移除
            if (s[i] === s[i+1])
                c.shift();
            
            // 获得最大的距离存入数组
            if (maxPalindromList.length < sub.length){
                maxPalindromList = sub;
            }
        }
    }
    // 解决都没重复回文, 返回首字母
    if (maxPalindromList.length === 0)
        return s[0];

    return maxPalindromList.join('');
};