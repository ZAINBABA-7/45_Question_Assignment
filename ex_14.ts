class DinnerInvitation {
    guestList: string[];

    constructor() {
        this.guestList = [];
    }

    addToGuestList(person: string) {
        this.guestList.push(person);
    }

    inviteToDinner(person: string) {
        console.log(`Dear ${person},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nSincerely,\n[Zain Ul Abideen]\n`);
    }

    sendInvitations() {
        this.guestList.forEach(person => {
            this.inviteToDinner(person);
        });
    }
}

// Create a new dinner invitation instance
const dinnerParty = new DinnerInvitation();

// Add people to the guest list
dinnerParty.addToGuestList("Albert Einstein");
dinnerParty.addToGuestList("Daniyal Nagori");
dinnerParty.addToGuestList("Kamran Tessori");

// Send out invitations
dinnerParty.sendInvitations();
