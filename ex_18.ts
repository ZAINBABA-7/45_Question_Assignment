let placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Rio de Janeiro"];

// Print original array
console.log("Original order:", placesToVisit);

// Print array in alphabetical order without modifying the original list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Check original order
console.log("Original order:", placesToVisit);

// Print array in reverse alphabetical order without modifying the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Check original order
console.log("Original order:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again to get back to original order
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);
