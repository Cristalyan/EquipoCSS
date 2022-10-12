setTimeout(() => {
    alert("Bienvenidos a la pasteleria Cuky's");
}, 1000);

setInterval(()=> {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let item = document.getElementById("mrgtext")
    let bck = "rgb("+ red + ", " + green + ", " + blue +")";
    item.style.background = bck;
    
}, 500);
