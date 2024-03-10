let guests: string[] = ["Albert Einstein", "Daniyal Nagori", "Kamran Tessori",];
console.log("You can invite only two people for dinner.");

while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, you're not invited to dinner anymore.`);
}

for (const guest of guests) {
    console.log(`Hey ${guest}, you're still invited to dinner!`);
}

guests.pop();
guests.pop();
console.log("Updated guest list:", guests);
