function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function makeGreat(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

let magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
makeGreat(magicianNames);
showMagicians(magicianNames);