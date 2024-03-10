var alien_color = 'green';
if (alien_color === 'green') {
    console.log('Congratulations! You just earned 5 points for shooting the alien.');
}
else {
    // This block won't be executed in this version
}
var alien_color = 'red'; // Change to 'green' to run the other block
if (alien_color === 'green') {
    // This block won't be executed in this version
}
else {
    console.log('Congratulations! You just earned 10 points for shooting the alien.');
}
// In the first version, the alien_color is set to 'green', so the if block executes and the player earns 5 points. In the second version, the alien_color is set to 'red', triggering the else block, and the player earns 10 points.
