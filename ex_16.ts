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

    unableToAttend(person: string) {
        console.log(`${person} can't make it to the dinner.`);
    }

    replaceGuest(oldGuest: string, newGuest: string) {
        const index = this.guestList.indexOf(oldGuest);
        if (index !== -1) {
            this.guestList[index] = newGuest;
        } else {
            console.log(`${oldGuest} is not in the guest list.`);
        }
    }

    informBiggerTable() {
        console.log("Great news! We found a bigger dinner table!");
    }
}

// Create a new dinner invitation instance
const dinnerParty = new DinnerInvitation();

// Add people to the guest list
dinnerParty.addToGuestList("Albert Einstein");
dinnerParty.addToGuestList("Daniyal Nagori");
dinnerParty.addToGuestList("Kamran Tessori");

// Send out initial invitations
console.log("Initial invitations:");
dinnerParty.sendInvitations();

// Someone can't make it
const unableGuest = "Maya Angelou";
dinnerParty.unableToAttend(unableGuest);

// Replace the unable guest with a new one
const newGuest = "Nelson Mandela";
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
