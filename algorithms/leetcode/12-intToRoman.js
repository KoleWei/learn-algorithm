/**
 * 12. 整数转罗马数字
 * 罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。
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
 * 
 * 示例 1:
 *  输入: 3
 *  输出: "III"
 * 示例 2:
 *  输入: 4
 *  输出: "IV"
 * 示例 3:
 *  输入: 9
 *  输出: "IX"
 * 示例 4:
 *  输入: 58
 *  输出: "LVIII"
 *  解释: C = 100, L = 50, XXX = 30, III = 3.
 * 示例 5:
 *  输入: 1994
 *  输出: "MCMXCIV"
 *  解释: M = 1000, CM = 900, XC = 90, IV = 4.
 */

 /**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    if (1 > num || num > 3999) return "";
    const roman = [ 
        ['I', 'V'], // 1 - 5
        ['X', 'L'], // 10 -50
        ['C', 'D'], // 100 - 500
        ['M', ''] // 1000
    ]

    const result = [];
    let pos = 0; // 位置
    while (num) {
        const rnum = num%10;

        // 0
        if (rnum === 0)
            result[result.length] = "";
        // 4
        else if (rnum === 4) 
            result[result.length] = roman[pos][0]+roman[pos][1];
        // 5
        else if (rnum === 5) 
            result[result.length] = roman[pos][1];
        // 9
        else if (rnum === 9) 
            result[result.length] = roman[pos][0] + roman[pos + 1][0];
        // 1 - 3
        else if (rnum < 4) 
            result[result.length] = [].fill.call(new Array(rnum), roman[pos][0]).join('');
        // 6 - 8
        else if (rnum > 5) 
            result[result.length] = roman[pos][1] + [].fill.call(new Array(rnum-5), roman[pos][0]).join('');

        num = Math.floor(num/10);
        pos++;
    }
    return result.reverse().join('');
};

console.log(intToRoman(5));
console.log(intToRoman(10));
console.log(intToRoman(9));
console.log(intToRoman(29));
console.log(intToRoman(11));