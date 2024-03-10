var guests = ["Albert Einstein", "Daniyal Nagori", "Kamran Tessori",];
console.log("You can invite only two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", you're not invited to dinner anymore."));
}
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Hey ".concat(guest, ", you're still invited to dinner!"));
}
guests.pop();
guests.pop();
console.log("Updated guest list:", guests);
