function DataTable(config, data) {
    document.getElementById("usersTable").innerHTML = `<table class="customers"></table>`;
    //creates table head
    let table_head = document.createElement("thead");
    document.querySelector(".customers").appendChild(table_head);
    let head = document.createElement("tr");
    table_head.appendChild(head);
    let head_cell = document.createElement("th");
    head_cell.innerHTML = "№";
    head.appendChild(head_cell);
    for (let i = 0; i < config.columns.length; i++) {
        let head_cell = document.createElement("th");
        head_cell.innerHTML = `${config.columns[i].title}`
        head.appendChild(head_cell);

    }

    //creates table body
    let table_body = document.createElement("tbody");
    document.querySelector(".customers").appendChild(table_body);
    for (let i = 0; i < data.length; i++) {
        let row = document.createElement("tr");
        row.id = data[i].id;
        // row.className = "table_row";
        table_body.appendChild(row);
        let col = document.createElement("td");
        col.innerHTML = i + 1;
        row.appendChild(col);
        for (let j = 0; j < config.columns.length; j++) {
            let col = document.createElement("td");
            col.innerHTML = `${data[i][config.columns[j].value]}`;
            row.appendChild(col);
        }
    }
}

const config1 = {
    parent: '#usersTable',
    columns: [
        {title: 'Имя', value: 'name'},
        {title: 'Фамилия', value: 'surname'},
        {title: 'Возраст', value: 'age'},
    ]
};

const users = [
    {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
    {id: 30051, name: 'Петя', surname: 'Васечкин', age: 15},
    {id: 30052, name: 'Катя', surname: 'Іванова', age: 55},
    {id: 30053, name: 'Галя', surname: 'Семків', age: 37},
    {id: 30054, name: 'Максим', surname: 'Галянта', age: 9},
    {id: 30055, name: 'Вася', surname: 'Худяков', age: 47},
    {id: 30056, name: 'Ольга', surname: 'Романова', age: 36},
];

DataTable(config1, users);

