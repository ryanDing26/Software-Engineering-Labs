```js
function sumValue(num1, num2, add) {

    if (add) {
        var result = 0;

        result = num1 + num2;

        console.log('values added: ', result);
    } else return;

    console.log('final result: ', result);
}

sumValue(10, 10, true);
```

1. Line 9 prints out `values added:  20` because it takes in the first and second values passed into `sumValues`, 10 and 10, alongside the fact that it enters the `if (add)` block since the third argument is `true`.

2. Line 13 prints out `final result:  20` because the `result` variable is of `var` declaration, meaning it is able to accessed anywhere inside the function it is defined in, which in this case is `sumValues`.

3. Line 9, similar to number 1, prints out `values added:  20` with a similar logic as before.

4. Line 13 returns an error because of the fact that the variable `result` uses a `let` declaration, meaning it is only accessible within the conditional block it is defined in, and line 13 is not within that scope but rather inside the scope of just the entire function. This error specifically is a ReferenceError as it is unable to reference `result` within the print statement as it is not within the correct scope.

5. Nothing is printed by line 9 since the code returns an error; this is because `result` is now of declaration `const`, meaning that it cannot be reassigned to another value after it is first assigned to 0. This means that line 7, `result = num1 + num2;` will cause it to return an error.

6. Similar to 5, this code still returns an error for two reasons this time; The first reason is the same one as 5 in that `result` cannot be reassigned to the addition of two parameters in line 7 and throws an error. However, if we were to not take this into consideration, it would still return an error since `const` has the same type of variable scope as `let`, meaning that `result` should not be reachable outside the conditional statement it is declared in regardless.
