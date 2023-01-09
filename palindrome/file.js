const num = 121
function isPalindrome(num) {
    const reversed = Number(String(num).split("").reverse().join(""));
    let checker = " ";
    (reversed === num) ? checker = true : checker = false;
    console.log(reversed);
};



isPalindrome(121);