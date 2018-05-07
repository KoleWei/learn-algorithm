/** 
 * 13. 罗马数字转整数
 * 罗马数字包含以下七种字符：I， V， X， L，C，D 和 M。
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 
 * I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 * X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
 * C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 * 示例 1:
 *  输入: "III"
 *  输出: 3
 * 示例 2:
 *  输入: "IV"
 * 输出: 4
 *  示例 3:
 * 输入: "IX"
 *  输出: 9
 * 示例 4:
 *  输入: "L VIII"
 *  输出: 58
 *  解释: C = 100, L = 50, XXX = 30, III = 3.
 * 示例 5:
 *  输入: "M CM XC IV"
 *  输出: 1994
 *  解释: M = 1000, CM = 900, XC = 90, IV = 4.
 */

 /**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
        "I": 1,
        "V": 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    let num = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        num += roman[s[i]]
        if (i !== 0 && roman[s[i]] > roman[s[i-1]]) { // 减
            num -= roman[s[i-1]];
            i--;
        }
    }

    return num;
};

console.log(5, romanToInt('V'));
console.log(4, romanToInt('IV'));
console.log(6, romanToInt('VI'));
console.log(7, romanToInt('VII'));
console.log(60, romanToInt('LX'));
console.log(40, romanToInt('XL'));
console.log(9, romanToInt('IX'));
console.log(19, romanToInt('IXX'));