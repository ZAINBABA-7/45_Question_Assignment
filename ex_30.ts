function greetUsers(usernames: string[]): void {
    const adminUsername = 'admin';
    
    for (const username of usernames) {
        if (username.toLowerCase() === adminUsername) {
            console.log(`Hello ${username}, would you like to see a status report?`);
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

// Example usage:
const userArray = ['admin', 'Eric', 'Alice', 'admin123', 'John'];
greetUsers(userArray);
