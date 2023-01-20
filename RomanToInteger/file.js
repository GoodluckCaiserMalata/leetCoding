
// function roman(num) {
// const object = {
//     M: 1000,
//     D: 500,
//     C: 100,
//     L: 50,
//     X: 10,
//     V: 5,
//     I: 1,
// }
//     var string = "";
//     for (var key in object) {
//         while (num >= object[key]) {
//             string += key;
//             num -= object[key];
//             console.log(string);
//         }
//     }
//     // return roman
//     console.log(string);
// }

function roman(str) {
    const object = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    }
    var res = 0;
    str.split('').forEach((num, i) => {
        if (object[num] < object[str[i + 1]]) res -= object[num];
        else res += object[num];
    });

    return res;
}
const string = "III";
roman(string);
