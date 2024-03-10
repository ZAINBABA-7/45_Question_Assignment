function checkUsernameAvailability(currentUsers: string[], newUsers: string[]): void {
    for (const newUser of newUsers) {
        const lowercaseNewUser = newUser.toLowerCase(); // Convert to lowercase for case-insensitive comparison

        if (currentUsers.includes(lowercaseNewUser)) {
            console.log(`The username "${newUser}" is already taken. Please choose a different one.`);
        } else {
            console.log(`The username "${newUser}" is available.`);
        }
    }
}

// Example usage:
const currentUsers: string[] = ['Alice', 'Bob', 'johnDoe', 'Eva', 'admin'];
const newUsers: string[] = ['John', 'Mary', 'alice', 'David', 'Admin123'];
checkUsernameAvailability(currentUsers, newUsers);
