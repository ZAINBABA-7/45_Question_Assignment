function checkUsernameAvailability(currentUsers, newUsers) {
    for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
        var newUser = newUsers_1[_i];
        var lowercaseNewUser = newUser.toLowerCase(); // Convert to lowercase for case-insensitive comparison
        if (currentUsers.includes(lowercaseNewUser)) {
            console.log("The username \"".concat(newUser, "\" is already taken. Please choose a different one."));
        }
        else {
            console.log("The username \"".concat(newUser, "\" is available."));
        }
    }
}
// Example usage:
var currentUsers = ['Alice', 'Bob', 'johnDoe', 'Eva', 'admin'];
var newUsers = ['John', 'Mary', 'alice', 'David', 'Admin123'];
checkUsernameAvailability(currentUsers, newUsers);
