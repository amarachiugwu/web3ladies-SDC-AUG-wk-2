document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addTodoButton = document.getElementById("add-todo");
    const todoList = document.getElementById("todo-list");

    addTodoButton.addEventListener("click", () =>{
        const task = todoInput.value.trim();

        if(task){
            const li = document.createElement("li");
            li.className = "flex justify-between item-center p-2 bg-gray-100 rounded shadow";
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "mr-2";

            const span = document.createElement("span");
            span.textContent = task;

            checkbox.addEventListener("change", () => {
                if (checkbox.checked) {
                    span.classList.add("line-through", "text-gray-500");
                } else {
                    span.classList.remove("line-through", "text-gray-500");
                }
            })

            li.appendChild(checkbox)
            li.appendChild(span)

            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = "bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600";
            li.appendChild(removeButton)

            removeButton.addEventListener('click', () => {todoList.removeChild(li)})

            todoList.appendChild(li)
            todoInput.value= '';
        }

        
    });

    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodoButton.click();
        }
    });

})