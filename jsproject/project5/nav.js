

let Btn1 = document.getElementById('button1');

    let Btn2 = document.getElementById('button2');

let main = document.getElementById('bigBox');

let main2 = document.getElementById('bigBox2');

let span1=  document.getElementsByClassName('close1')[0]; 

let span2=  document.getElementsByClassName('close2')[0];

Btn1.onclick= function() {
    main.style.display = "block";
  }

  span1.onclick = function() {
    main.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == main) {
      main.style.display = "none";
    }
  }



  Btn2.onclick= function() {
    main2.style.display = "block";
  }
  span2.onclick = function() {
    main2.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == main2) {
      main2.style.display = "none";
    }
  }



//   signUp Js Code

const myform = document.querySelector('form') 
console.log(myform)
myform.addEventListener('submit',function(){
let name=document.getElementById('name').value
let pass=document.getElementById('pass').value
let password=document.getElementById('c-pass').value

const object={
    Name : name,
    Pass : pass,
    Password : password
}
//console.log(object)
 localStorage.setItem("savedata",JSON.stringify(object))
 const parse =localStorage.getItem("savedata")
 //const parseobject = JSON.parse(parse)
 //console.log(parseobject)
 //localStorage.clear()


 if(pass!==password){
  alert("password is not matching")
}
else{
alert("Sign Up SuccessFull")
document.querySelector('#Sform').reset()
}

})


function logindata(){
    const parse = JSON.parse(localStorage.getItem("savedata"))

    let uname = document.getElementById('uname').value

    let logpass = document.getElementById('logpass').value

    if(parse.Name!=uname || parse.Pass!=logpass)
    {
        alert("Incorrect Username and Password")

    }
    else
    {
        alert("Login Successfully")
        document.querySelector('#Lform').reset()
    }
    
}



