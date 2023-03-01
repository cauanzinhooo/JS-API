fetch('./pessoas.json')
    .then(res => res.json())
    .then(json => LoadElement(json))
function LoadElement(json){
    const table = document.createElement('table');
    for(let pessoa of json){
        const tr = document.createElement('tr');
        let td = document.createElement('td')
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);
        td = document.createElement('td')
        td.innerHTML = pessoa.estado;
        tr.appendChild(td);






        table.appendChild(tr)
    }

    const result = document.querySelector('.sec1')
    result.appendChild(table)

}