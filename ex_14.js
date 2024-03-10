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
    return DinnerInvitation;
}());
// Create a new dinner invitation instance
var dinnerParty = new DinnerInvitation();
// Add people to the guest list
dinnerParty.addToGuestList("Albert Einstein");
dinnerParty.addToGuestList("Daniyal Nagori");
dinnerParty.addToGuestList("Kamran Tessori");
// Send out invitations
dinnerParty.sendInvitations();
