function greetUsers(usernames: string[]): void {
    const adminUsername = 'admin';

    if (usernames.length === 0) {
        console.log("We need to find some users!");
        return; // Exit the function if the list is empty
    }

    for (const username of usernames) {
        if (username.toLowerCase() === adminUsername) {
            console.log(`Hello ${username}, would you like to see a status report?`);
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

// Example usage:
const emptyUserArray: string[] = []; // Empty array
greetUsers(emptyUserArray);
