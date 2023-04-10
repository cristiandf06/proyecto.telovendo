let dataTable;
let dataTableInitialized = false;
//Cuando cargamos una tabla con lectura de datos, se hace de manera dinámica, necesitamos destruirla, ya que no se puede sobreescribir.

const dataTableOptions = {
    lengthMenu: [2, 5, 7, 10],
    pageLength: 5,
    destroy: true,
    language:{
        lengthMenu: "Mostrar _MENU_ registros por página",
        zeroRecords: "Ningún usuario encontrado",
        info: "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
        infoEmpty: "Ningún usuario encontrado",
        infoFiltered: "(filtrados desde _MAX_ registros totales)",
        search: "Buscar:",
        loadingRecords: "Cargando...",
        paginate: {
            first: "Primero",
            last: "Último",
            next: "Siguiente",
            previous: "Anterior"
        }
    }
}

const initDataTable = async()=>{
    if(dataTableInitialized){
        dataTable.destroy();
    }

    await listUsers();

    dataTable = $("#dataTable_users").DataTable(dataTableOptions);

    dataTableInitialized = true;
}

const listUsers = async()=>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json()
        
        let content = ``;
        users.forEach((user) => {
            content +=`
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.address.city}</td>
                <td>${user.company.name}</td>
                <td><i class="fa-solid fa-check" style="color:green;"></i></td>
                <td>
                <button class="btn btn-sm btn-primary"><i class="fa-solid fa-pencil"></i></button>
                <button class="btn btn-sm btn-danger"><i class="fa-solid fa-trash-can"></i></button>
                </td>
            </tr>
            `    
        });
        tableBody_users.innerHTML = content;
    } catch (e) {
        alert("Error al cargar datos");
    }
};

window.addEventListener("load", async () =>{
    await initDataTable();
});