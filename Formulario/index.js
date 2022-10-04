document.getElementById('btn').addEventListener('click', () =>{
    let item = document.getElementById('btn');
    item.style.background = "blue";
    item.style.color = "white";
    item.style.fontFamily = "Times New Roman";
    item.style.fontSize = "35px";
    item.style.borderRadius = "20px";
});

document.getElementById('btn').addEventListener('click', () =>{
    let usr = document.getElementById('inputUsrname').value;
    let pswd = document.getElementById('inputPassword').value;
    
    if(usr === "Chuni" && pswd === "López"){
        alert('Conexión establecida');
        sessionStorage.setItem("login", "true");
    }
    else{
        alert('Usuario/Contraseña Incorrecta');
        sessionStorage.setItem("login", "false");
    }
    let session = sessionStorage.getItem('login');
    console.log(session);
});

setInterval(()=> {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let item = document.getElementById("body")
    let bck = "rgb("+ red + ", " + green + ", " + blue +")";
    item.style.background = bck;
    
}, 300);