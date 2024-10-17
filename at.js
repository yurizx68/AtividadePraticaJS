document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const genero = document.getElementById('genero').value;
    const ano = document.getElementById('ano').value;
    const nota = document.getElementById('nota').value;
    const newRow = document.createElement('tr');
    newRow.innerHTML =  `
        <td>${nome}</td>
        <td>${genero}</td>
        <td>${ano}</td>
        <td>${nota}</td>
     ` ;
    document.querySelector('#tabela tbody').appendChild(newRow);
    document.getElementById('formulario').reset();
});