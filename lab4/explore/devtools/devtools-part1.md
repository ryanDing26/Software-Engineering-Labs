1. The name of the new json file is `citylots.json`.

2. The file that initiated the download of `citylots.json` was the `expose.js` file, containing the following code:

```js
// part2.js

function fetchData() { // this method fetched the file
  fetch('./citylots.json')
}

function init() {
  document.getElementById('fetchData').addEventListener('click', fetchData); // this made the button fetch the file
}

window.addEventListener('DOMContentLoaded', init); // this initialized the function that made the button fetch the file
```

3. The file size of the downloaded file is `11.7 MB`.

4. It took roughly `90 ms` to download the file.

5. The User-Agent for the browser that made the request was `Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36`.

6. The type of server the file came from was `GitHub.com`.

7. The file was last modified on `Thu, 15 Sep 2022 22:44:30 GMT`.

8. The Content-Type of the file is `application/json; charset=utf-8` (a utf-8 encoded json file).

9. The `fetchData` function inside `expose.js`, specifically on line 4, made the request.