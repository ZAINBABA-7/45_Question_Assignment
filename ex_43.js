var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function showMagicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function makeGreat(magicians) {
    var modifiedMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        modifiedMagicians.push("the Great " + magicians[i]);
    }
    return modifiedMagicians;
}
var magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
var greatMagicianNames = makeGreat(__spreadArray([], magicianNames, true));
console.log("Original Magicians:");
showMagicians(magicianNames);
console.log("\nGreat Magicians:");
showMagicians(greatMagicianNames);
