var DinnerInvitation = /** @class */ (function () {
    function DinnerInvitation() {
        this.guestList = [];
    }
    DinnerInvitation.prototype.addToGuestList = function (person) {
        this.guestList.push(person);
    };
    DinnerInvitation.prototype.inviteToDinner = function (person) {
        console.log("Dear ".concat(person, ",\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nSincerely,\n[Zain Ul Abideen]\n"));
    };
    DinnerInvitation.prototype.sendInvitations = function () {
        var _this = this;
        this.guestList.forEach(function (person) {
            _this.inviteToDinner(person);
        });
    };
    DinnerInvitation.prototype.unableToAttend = function (person) {
        console.log("".concat(person, " can't make it to the dinner."));
    };
    DinnerInvitation.prototype.replaceGuest = function (oldGuest, newGuest) {
        var index = this.guestList.indexOf(oldGuest);
        if (index !== -1) {
            this.guestList[index] = newGuest;
        }
        else {
            console.log("".concat(oldGuest, " is not in the guest list."));
        }
    };
    DinnerInvitation.prototype.informBiggerTable = function () {
        console.log("Great news! We found a bigger dinner table!");
    };
    return DinnerInvitation;
}());
// Create a new dinner invitation instance
var dinnerParty = new DinnerInvitation();
// Add people to the guest list
dinnerParty.addToGuestList("Albert Einstein");
dinnerParty.addToGuestList("Daniyal Nagori");
dinnerParty.addToGuestList("Kamran Tessori");
// Send out initial invitations
console.log("Initial invitations:");
dinnerParty.sendInvitations();
// Someone can't make it
var unableGuest = "Maya Angelou";
dinnerParty.unableToAttend(unableGuest);
// Replace the unable guest with a new one
var newGuest = "Nelson Mandela";
dinnerParty.replaceGuest(unableGuest, newGuest);
// Inform about the bigger dinner table
dinnerParty.informBiggerTable();
// Add new guests
dinnerParty.addToGuestList("Zia Ur Rehman"); // Add to the beginning
dinnerParty.guestList.splice(Math.ceil(dinnerParty.guestList.length / 2), 0, "Marie Curie"); // Add to the middle
dinnerParty.addToGuestList("Sir Usman"); // Add to the end
// Send out new set of invitations
console.log("\nNew set of invitations:");
dinnerParty.sendInvitations();
