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

document.getElementById('Boton1').addEventListener('click', () => {
    let red =Math.floor(Math.random()* 256);
    let green =Math.floor(Math.random()* 256);
    let blue =Math.floor(Math.random()* 256);
    let item = document.getElementById("body")
    let bck ="rgb("+ red +", " + green + ", " + blue +")";
    item.style.background = bck;
});
document.getElementById('Boton2').addEventListener('click', () => {
    let red =Math.floor(Math.random()* 256);
    let green =Math.floor(Math.random()* 256);
    let blue =Math.floor(Math.random()* 256);
    let item = document.getElementById("body")
    let bck ="rgb("+ red +", " + green + ", " + blue +")";
    item.style.background = bck;
});
document.getElementById('Boton3').addEventListener('click', () => {
    let red =Math.floor(Math.random()* 256);
    let green =Math.floor(Math.random()* 256);
    let blue =Math.floor(Math.random()* 256);
    let item = document.getElementById("body")
    let bck ="rgb("+ red +", " + green + ", " + blue +")";
    item.style.background = bck;
});