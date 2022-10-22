setTimeout(() => {
    alert('Bienvenidos a la seccion de pasteles'); 
}, 3000);

setInterval(() => {
    let red =Math.floor(Math.random()* 256);
    let green =Math.floor(Math.random()* 256);
    let blue =Math.floor(Math.random()* 256);
    let item = document.getElementById("titulo1")
    let bck ="rgb("+ red +", " + green + ", " + blue +")";
    item.style.color = bck;
}, 300);