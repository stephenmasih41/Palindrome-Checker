Palindrome Checker:-
This is a simple web application to check whether the input string is a palindrome. It is built using HTML, CSS, and JavaScript. The application supports checking strings for palindrome properties, while also handling edge cases such as strings with only one character.

Features:-
1. Checks if the entered string is a palindrome.
2. Supports case-insensitive checks by converting the input to lowercase.
3. Removes all non-alphanumeric characters from the string to ensure accurate palindrome validation.
4. Provides a user-friendly alert when no value is input.
5. Displays clear and dynamic results based on the input.

Technologies Used:- 
1. HTML: For structuring the web page and user interface.
2. CSS: For basic styling of the page to ensure readability and proper layout.
3. JavaScript: For logic, DOM manipulation, and dynamic display of results.

Code Explanation:-
1. The user enters a string into the input field and clicks the "Check" button.
2. The JavaScript function palindromeChecker() is triggered when the button is clicked.
3. If the input is empty, the user will be prompted to enter a value through an alert().
4. The palindrome logic:-
   1. The input string is converted to lowercase.
   2. All non-alphanumeric characters are removed.
   3. The cleaned string is checked against its reversed version.
5.Based on the comparison result, a message is appended to the result element.
