/** 
 * 将字符串 "PAYPALISHIRING" 以Z字形排列成给定的行数：
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * -----------------
 * P A Y P--A L--I S H I--R I--N G
 * 
 * P     I     N
 * A  L  S  I  G
 * Y  A  H  R
 * P     I
 * 示例 1:
 *  输入: s = "PAYPALISHIRING", numRows = 3
 *  输出: "PAHNAPLSIIGYIR"
 * 示例 2:
 *  输入: s = "PAYPALISHIRING", numRows = 4
 *  输出: "PINALSIGYAHRPI"
 */

 /**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * think: 
 */
var convert = function(s, numRows) {
    const list = [];
    let cn = 0;
    let rn = numRows - 2;
    let colI = 0; 

    if (numRows === 0 || s.length <= numRows || numRows === 1) 
        return s;

    for (const c of s){
        if (!list[colI]) list[colI] = [];

        if (cn < numRows) { // 第一行
            list[colI][list[colI].length] = c;
            cn++;
        } else if (rn > 0) { // 第二行
            if (!list[colI + 1]) list[colI + 1] = [ ];
            list[colI + 1][rn] = c;
            rn--;
        } 
        if (rn == 0 && cn == numRows) { // 完成
            // 重置参数
            rn = numRows - 2; colI += 2; cn = 0;
        }
    }
    
    const result = [];
    for (let i = 0; i < numRows; i++) { // 行
        result[result.length] = list.map((c, j) => {
           return c[i];
        }).join('');
    }

    return result.join('');
};

console.log(convert('ABCDE', 4));
console.log('PAYP--AL--ISHI--RI--NG', convert('PAYPALISHIRING', 4));


/** 
 * 借鉴: 最快
 * think: 根据位置
 */
var convert2 = function(s, nRows) {
    if (nRows <= 1) {
        return s;
    }
    var res = ""
    var size = 2 * nRows -2;
    for (let i = 0; i < nRows; i++) {
        for (let j = i; j < s.length; j+= size) {
           res += s[j]
           var tmp = j + size - 2 *i
            if (i != 0 && i != nRows - 1 && tmp < s.length) {
                res += s[tmp]
            }
        }

    }
    return res
};