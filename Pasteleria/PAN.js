const nav = document.querySelector('.nav');

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', window.scrollY >0)
})
setTimeout(() => {
    alert("Bienvenidos a la seccion de Pan");
}, 3000);