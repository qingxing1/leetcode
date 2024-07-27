// 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。
//
// 字母和数字都属于字母数字字符。
//
// 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let pattern = /[^a-z0-9]/gi; // 定义一个模式，匹配大小写字母和数字的字符
    s =  s.replace(pattern, '').toLocaleLowerCase(); // （此时含有大写字母）将字符串中，非大小写字母和数字的字符替换为“”，然后再其转换为小写形式

    // 定义两个指针
    let m=0;
    let n=s.length-1;

    while(n>=m){
        // 两个位置指针相同则认为是
        if(m===n){
            return true;
            break;
        }
        // 依次比较第n项跟第s.length-n项，不同则不是
        if(s[n]===s[m]){
            n--;
            m++
        }else{
            return false;
            break;
        }
    }
    return true;
};

