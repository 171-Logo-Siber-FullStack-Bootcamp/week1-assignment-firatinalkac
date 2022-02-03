function reqListener() {
    console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener)
oReq.open("GET", "https://jsonplaceholder.typicode.com/users/1/posts")
oReq.send();