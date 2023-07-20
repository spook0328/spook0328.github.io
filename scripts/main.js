var myImage = document.querySelector("img");

myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/profile.jpg") {
        myImage.setAttribute("src", "images/ele1.png");
    }else{
        myImage.setAttribute("src", "images/profile.jpg")
    }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h2");

myButton.onclick = function(){
    setUserName();
};

function setUserName(){
    let myname = prompt("Plz enter your name.");/*prompt產生對話框 */
    localStorage.setItem("name",myname);
    myHeading.innerHTML= "Helloooo ~~,"+myname;
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = "Hellooo ~~,"+storedName;
}
/*let myVariable="Eric";/*字串 */
/*if (myVariable==="Eric"){
    alert("Yay,I am Eric!");
}else{
    alert("Awwww, Sorry you find wrong guy...");
}練習有字串回饋*/
