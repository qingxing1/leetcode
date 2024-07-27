/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // 长的
    let m=0
    //  短的
    let n=0
    while(n < s.length  ){
        if(s[n]===t[m]){
            n++
            console.log(n)
            if(n === s.length){
                return true;
            }
        }
        m++
    }
    return false
};

console.log(isSubsequence('abc','ahbgdc'))
