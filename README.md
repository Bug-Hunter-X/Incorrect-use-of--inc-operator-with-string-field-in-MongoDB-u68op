# MongoDB $inc Operator Error

This repository demonstrates a common error when using the `$inc` operator in MongoDB: attempting to increment a field that is not of numeric type.

The `bug.js` file contains code that incorrectly attempts to increment a string field.  The `bugSolution.js` file provides the correct solution.

## How to reproduce

1. Clone this repository.
2. Run `bug.js`.
3. Observe the error thrown.
4. Run `bugSolution.js` to see the correct implementation.

## Solution

To avoid this error, ensure that the field you are incrementing is a number.  If the field is a string, either convert it to a number before the update or use a different approach to update its value.