function showMagicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
var magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
makeGreat(magicianNames);
showMagicians(magicianNames);
