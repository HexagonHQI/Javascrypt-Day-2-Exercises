const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Get the length of the array (number of series)
const myWatchedSeriesLength = myWatchedSeries.length;

// Create a sentence describing the series using join()
const myWatchedSeriesSentence = myWatchedSeries.join(", "); // Joins elements with comma and space

// Display the sentence with the number of series
console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`);

// Change "the big bang theory" to "friends"
myWatchedSeries[2] = "friends";

// Add "new series" to the end
myWatchedSeries.push("new series");

// Add "favorite series" to the beginning
myWatchedSeries.unshift("favorite series");

// Delete "black mirror" (assuming index 0)
myWatchedSeries.splice(0, 1);

// Access the third letter of "money heist" (index 2)
const thirdLetter = myWatchedSeries[1][2];

// Display the third letter
console.log("The third letter of 'money heist' is:", thirdLetter);

// Display the modified array
console.log("Modified watched series:", myWatchedSeries);
