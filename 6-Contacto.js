setInterval(()=> {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let item = document.getElementById("logo")
    let bck = "rgb("+ red + ", " + green + ", " + blue +")";
    item.style.color = bck;
    
}, 500);