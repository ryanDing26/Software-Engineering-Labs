1. The bug was that when two numbers were inputted into the input tags, the JavaScript file processed the numbers both as strings rather than as numeric values. This is because the way that they are retrieved:

```js
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
```

`.value` returns a string value rather than the desired numeric type of the variable used for addition.

2. One fix for this bug would be to wrap `num1` and `num2` on line 11, where `result` is declared, with `Number()` such that both variables become numeric type inputs instead of string type inputs so the addition functionality works properly. This would look as such:

```js
let result = Number(num1) + Number(num2);
```