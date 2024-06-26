```js
// Questions 1-4
function discountPrices(prices, discount) {
    var discounted = [];
    var finalPrice = 0;

    for (var i = 0; i < prices.length; i++) {
        var discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    console.log(i); // Question 1
    console.log(discountedPrice); // Question 2
    console.log(finalPrice); // Question 3

    return discounted; // Question 4
}

discountPrices([100, 200, 300], 0.5);
```
1. At line 12, the code will print out the value `3`. This is because of the fact that `i` is declared using the `var` keyword, meaning that it can be accessed outside the scope of its for loop and inside the entire function. At the same time, it is 3 instead of 0 as that is the stopping value that it takes on when the loop finishes executing.

2. At line 13, the code prints out the value `150`. This is because `discountedPrice` hold the value of the last iteration of the loop, which is the third element of the prices array, `300`, multiplied by `1 - discount = 0.5`, which is `150`.

3. Similar to 2, the code prints out the value `150` again since finalPrice is simply a rounded version of the `discountedPrice` variable in its final iteration multiplied by 100 and divided by 100, essentially being the same number.

4. The function returns an array of values `[50, 100, 150]`, which represents the discounted prices of the original prices array with the given discount.

```js
// Questions 5-8
function discountPrices(prices, discount) {
    let discounted = [];
    let finalPrice = 0;

    for(let i = 0; i < prices.length; i++) {
        let discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    console.log(i); // Question 5
    console.log(discountedPrice); // Question 6
    console.log(finalPrice); // Question 7

    return discounted; // Question 8
}

discountPrices([100, 200, 300], 0.5);
```

5. At line 12, the code will return a reference error as `i` is only accessible within the scope of the for loop since it is declared using the `let` keyword, which limits the scope of the variable.

6. For the same reasons as 5, the code will return another reference error as `discountedPrice` is a variable declared using the `let` keyword and in the for loop block, making it local to the scope of the for loop rather than the function as a whole.

7. The code prints out `150` since `finalPrice` is declared as a variable using the `let` keyword in the scope of the function as a whole compared to being declared inside the loop of the function. In this regard, its scope is the entire function, and it is only reassigned within the for loop, meaning that there is no error thrown and it will print out the value `finalPrice` is updated to in the last iteration of the loop (which is the same value mentioned in 3).

8. The function will return the same values that it returned in 4, an array `[50, 100, 150]` which represents the updated prices with the discount applied to the original prices in their corresponding indices.

```js
// Questions 9-11
function discountPrices(prices, discount) {
    let discounted = [];
    let length = prices.length;

    for(let i = 0; i < length; i++) {
        const discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

    console.log(i); // Question 9
    console.log(length); // Question 10

    return discounted; // Question 11
}

discountPrices([100, 200, 300], 0.5);
```

9. At line 11, the code will return a reference error as `i` is only accessible within the scope of the for loop since it is declared using the `let` keyword, which limits the scope of the variable (this is the same issue that is mentioned in 5).

10. At line 12, the code prints out `3`. Although `length` is declared with the `let` keyword similar to `i`, its declaration falls within the scope of the function, the same scope as the print statement, meaning that it is able to be accessed by the function scope in comparison to `i` in 9.

11. The function will return the same values that it returned in 4 and 8, an array `[50, 100, 150]` which represents the updated prices with the discount applied to the original prices in their corresponding indices.

```js
// Question 12
let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function() { console.log('Hello!'); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110',
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};
```

12. A. `student.name`
    B. `student['Grad Year']`
    C. `student.greeting()`
    D. `student['Favorite Teacher'].name`
    E. `student.courseLoad[0]`

13. A. `'32'`; the `+` symbol combined with the fact that the 3 is a string rather than a numerical value means that it concatenates a string representation of 2 onto the string 3.
    B. `1`; the subtraction operator is only used for numerical operations, so the 3 string is converted into a Number.
    C. `3`; null becomes 0 through numeric conversions
    D. `'3null'`; null is concatenated as a string during string concatenation `+` operator.
    E. `4`; true is converted to 1 through numeric conversion and added to 3.
    F. `0`; false and null are both converted to their numeric forms as 0.
    G. `'3undefined'`; undefined is concatenated as a string during string concatenation `+` operator.
    H. `NaN`; undefined turns into NaN in numeric conversion, and after 3 turns into a number implicitly, it makes the answer NaN as any numeric operation including NaN results in NaN.


14. A. `true`; `'2'` is converted into a numeric `2`.
    B. `false`; lexicographical order means that the first character in each string is compared first. Since the Unicode value of 2 (50) is greater than the Unicode value of 1 (49), this is a false comparison.
    C. `true`; string 2 becomes a number 2 to compare with the actual number 2.
    D. `false`; `===` is a strict equality without type conversion, meaning it is comparing a string and numeric type, making the statement automatically false due to type difference.
    E. `false`; `true` converts to a numeric 1.
    F. `true`; `Boolean(2)` converts to `true` since any value above `0`, when typecasted to a Boolean, becomes `true`.

15. The `==` operator compares two sides of an equality given that there is some level of implicit conversion between the two that might make it easier to infer the result. However, this makes differentiating things like the value `0` and `false` to be difficult, as well as an empty string `''` being equal to `false` as well. `===` on the other hand performs the equality checking without type conversions typically done with a double equality operator, making it so values of different types being compared will always lead to `false`.

```js
// Question 17
function modifyArray(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
    }
    return newArr;
}

function doSomething(num) {
    return num * 2;
}

modifyArray([1,2,3], doSomething);
```

17. The result of the function above being called is an array of contents `[2,4,6]`. This is because `modifyArray` takes in the original array `[1,2,3]` and iterates over each element with a for loop. In each iteration, the element, first fed through the `doSomething` function as a result of the callback (which simply doubles the element's value), is then pushed onto `newArr`, the array of which is returned back to the user.

```js
function printNums() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 100);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
}

printNums();
```

19. The output of this function is `1 4 3 2` (with each number being on a newline). This is because there is no timeout associated with the console log statements corresponding to 1 and 4, so those are printed out first sequentially. Then, since the console log corresponding to 3 has the shortest timeout, it is then printed. Finally, the console log corresponding to 2 is printed as it has the longest timeout. The timeout essentially makes it so that a line of code executes after a certain amount of milliseconds; In the case of the 0 millisecond timeout, though, all tasks without a timeout go first as the timeout waits for the non timed out lines of code to run first.