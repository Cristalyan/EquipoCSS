document.getElementById('btn').addEventListener('click', () =>{
    // alert('EQUIPOALFABUENAMARAVILLAONDADINAMITAESCUADRÓNLOBO');
    let cont = document.getElementById('tableContent');
    let inp = document.getElementById("inpName").value;

    let nombre = inp;
    let APt = "López";
    let AMt = "Mascareño";
    let Mt = "-----------";
    cont.innerHTML +=`
    <tr>
        <td>${nombre}</td>
        <td>${APt}</td>
        <td>${AMt}</td>
        <td>${Mt}</td>
    </tr>
    `;
});