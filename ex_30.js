function greetUsers(usernames) {
    var adminUsername = 'admin';
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username.toLowerCase() === adminUsername) {
            console.log("Hello ".concat(username, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
// Example usage:
var userArray = ['admin', 'Eric', 'Alice', 'admin123', 'John'];
greetUsers(userArray);
