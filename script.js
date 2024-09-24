// function login(){
//    let a =  window.confirm("Are you want to log out")
//    if(a){
//     window.location.href = "login.html"
//    }
//    else{
//     window.alert("Syntax error")
//    }
// }
login()
function zoom(){
    let b = document.querySelector("#img1")
    b.style.width = "300px"
}
function dark(){
    let c = document.querySelector("#body")
    if(c.style.backgroundColor==="black" ){
        c.style.color = "black"
        c.style.backgroundColor = "white"
    }
    else{
        c.style.backgroundColor = "black"
        c.style.color = "white"
    }
}
