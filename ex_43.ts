function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function makeGreat(magicians: string[]): string[] {
    const modifiedMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        modifiedMagicians.push("the Great " + magicians[i]);
    }
    return modifiedMagicians;
}

const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
const greatMagicianNames: string[] = makeGreat([...magicianNames]);

console.log("Original Magicians:");
showMagicians(magicianNames);

console.log("\nGreat Magicians:");
showMagicians(greatMagicianNames);