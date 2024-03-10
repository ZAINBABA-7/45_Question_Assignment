function makeShirt(size: string = "large", message: string = "I love TypeScript!"): void {
    console.log(`Your ${size}-sized shirt will have the following message: '${message}'.`);
}

// Example usage:
makeShirt(); // Large shirt with default message
makeShirt("medium"); // Medium shirt with default message
makeShirt("small", "TypeScript is awesome!"); // Custom-sized shirt with a different message
