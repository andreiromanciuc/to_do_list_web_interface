window.ToDoList = {

    API_BASE_URL: "http://localhost:8081/tasks",

    getTasks: function () {
        $.ajax({
            url: ToDoList.API_BASE_URL,
            method: "GET"
        }).done(function (response) {
            console.log(response);
            ToDoList.displayTasks(JSON.parse(response));
        });
    },

    getTaskRow: function (task) {
        // spread operator (...)
        let formattedDeadLine = new Date(...task.deadline).toLocaleDateString("ro");

        // ternary operator
        let checkedAttribute = task.done ?  " checked" : "";

        // same result as with the ternary operator above
        // if (task.done) {
        //     checkedAttribute = " checked";
        // } else {
        //     checkedAttribute = "";
        // }

        return `<tr>
            <td>${task.description}</td>
            <td>${formattedDeadLine}</td>
            <td><input type="checkbox" data-id=${task.id} class="mark-done" ${checkedAttribute}/></td>
            <td><a href="#" data-id=${task.id} class="delete-task"><i class="fas fa-trash-alt"></i></a> </td>
        </tr>`;
    },
    displayTasks: function (tasks) {
        // weak-typed (javascript) vs strong-typed (java)
        var tableBody = '';

        tasks.forEach(task => tableBody += ToDoList.getTaskRow(task));

        $("#tasks-table tbody").html(tableBody);

    }
};

ToDoList.getTasks();
