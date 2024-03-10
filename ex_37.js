function makeShirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript!"; }
    console.log("Your ".concat(size, "-sized shirt will have the following message: '").concat(message, "'."));
}
// Example usage:
makeShirt(); // Large shirt with default message
makeShirt("medium"); // Medium shirt with default message
makeShirt("small", "TypeScript is awesome!"); // Custom-sized shirt with a different message
