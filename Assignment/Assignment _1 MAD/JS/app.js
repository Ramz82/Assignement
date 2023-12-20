// Sample string for demonstration
const str = "Hello, World!";
const exampleSubstring = "Hello, JavaScript!";
        
// Function to display results
function displayResult(methodName, description, result) {
    const outputDiv = document.getElementById("output");
    const methodDiv = document.createElement("div");
    methodDiv.classList.add("method");
    methodDiv.innerHTML = `
        <h2>${methodName}</h2>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Result:</strong> ${result}</p>
    `;
    outputDiv.appendChild(methodDiv);
}

// 1. String length
displayResult("String length", "Returns the length of the string.", str.length);

// 2. String slice()
const slicedStr = str.slice(0, 5);
displayResult("String slice()", "Extracts a portion of the string.", slicedStr);

// 3. String substring()
const substringStr = str.substring(0, 5);
displayResult("String substring()", "Similar to slice but doesn't accept negative indices.", substringStr);

// 4. String substr()
const substrStr = str.substr(7, 5);
displayResult("String substr()", "Extracts a specified number of characters starting from a specified index.", substrStr);

// 5. String replace()
const replacedStr = str.replace("World", "Universe");
displayResult("String replace()", "Replaces a specified substring with another string.", replacedStr);

// 6. String replaceAll()
const replacedAllStr = exampleSubstring.replaceAll("Hello", "Hi");
displayResult("String replaceAll()", "Replaces all occurrences of a substring with another string.", replacedAllStr);

// 7. String toUpperCase()
const upperCaseStr = str.toUpperCase();
displayResult("String toUpperCase()", "Converts the string to uppercase.", upperCaseStr);

// 8. String toLowerCase()
const lowerCaseStr = str.toLowerCase();
displayResult("String toLowerCase()", "Converts the string to lowercase.", lowerCaseStr);

// 9. String concat()
const concatStr = str.concat(" This is JavaScript");
displayResult("String concat()", "Concatenates one or more strings to the end of the original string.", concatStr);

// 10. String trim()
const trimmedStr = "   Trim me   ".trim();
displayResult("String trim()", "Removes whitespace from both ends of the string.", trimmedStr);

// 11. String trimStart()
const trimStartStr = "   Trim me   ".trimStart();
displayResult("String trimStart()", "Removes whitespace from the start of the string.", trimStartStr);

// 12. String trimEnd()
const trimEndStr = "   Trim me   ".trimEnd();
displayResult("String trimEnd()", "Removes whitespace from the end of the string.", trimEndStr);

// 13. String padStart()
const padStartStr = str.padStart(15, "*");
displayResult("String padStart()", "Pads the string with a specified character until a desired length is reached.", padStartStr);

// 14. String padEnd()
const padEndStr = str.padEnd(15, "*");
displayResult("String padEnd()", "Pads the string with a specified character until a desired length is reached.", padEndStr);

// 15. String charAt()
const charAtStr = str.charAt(7);
displayResult("String charAt()", "Returns the character at a specified index.", charAtStr);

// 16. String charCodeAt()
const charCodeAt = str.charCodeAt(7);
displayResult("String charCodeAt()", "Returns the Unicode value of the character at a specified index.", charCodeAt);

// 17. String split()
const splitStr = str.split(",");
displayResult("String split()", "Splits the string into an array of substrings based on a delimiter.", `[${splitStr}]`);
