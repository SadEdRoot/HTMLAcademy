function longestConsec(strarr, k) {
    // your code
   
    var n = strarr.length;
    var str = "";
    var str_check = "";
    if (n == 0 || k > n || k <= 0) {
      return "";
    }
    else {
       for (var i = 0; i <= (strarr.length - k); i++) {
         str_check = "";
         for (var j = 0; j < k; j++) {
           str_check = str_check + strarr[i + j];
         }
         if (str_check.length > str.length) {
           str = str_check;
         }
         
       }
       
       return str;
    }    
}


console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1));
