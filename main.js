const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const addBtn = $(".add-btn");
const modalClose = $(".modal-close");
const todoAppForm = $(".todo-app-form");
const btnPrimary = $(".btn-primary");
const taskGrid = $(".task-grid");

const taskTitle = $("#taskTitle");
const taskDescription = $("#taskDescription");
const taskCategory = $("#taskCategory");
const taskPriority = $("#taskPriority");
const startTime = $("#startTime");
const endTime = $("#endTime");
const taskDate = $("#taskDate");
const taskColor = $("#taskColor");

const todoTasks = [];

todoAppForm.id = "addTaskForm";

btnPrimary.setAttribute("form", "addTaskForm");

addBtn.onclick = function () {
    const addTaskModal = $("#addTaskModal");

    addTaskModal.className = "modal-overlay show";

    const taskTitle = $("#taskTitle");

    setTimeout(function () {
        taskTitle.focus();
    }, 50);
};

modalClose.onclick = function () {
    const addTaskModal = $("#addTaskModal");

    addTaskModal.className = "modal-overlay";
};

todoAppForm.onsubmit = function (event) {
    event.preventDefault();

    const newTask = {};

    newTask.title = taskTitle.value;
    newTask.description = taskDescription.value;
    newTask.category = taskCategory.value;
    newTask.priority = taskPriority.value;
    newTask.startTime = startTime.value;
    newTask.endTime = endTime.value;
    newTask.DueDate = taskDate.value;
    newTask.cardColor = taskColor.value;
    newTask.isCompleted = false;

    todoTasks.unshift(newTask);

    todoAppForm.reset();

    const addTaskModal = $("#addTaskModal");

    addTaskModal.className = "modal-overlay";

    renderTasks();
};

function renderTasks() {
    const html = todoTasks
        .map(
            (task) => `
            <div class="task-card ${task.cardColor} ${task.isCompleted ? "completed" : ""}">
            <div class="task-header">
                <h3 class="task-title">${task.title}</h3>
                <button class="task-menu">
                    <i class="fa-solid fa-ellipsis fa-icon"></i>
                    <div class="dropdown-menu">
                        <div class="dropdown-item">
                            <i class="fa-solid fa-pen-to-square fa-icon"></i>
                            Edit
                        </div>
                        <div class="dropdown-item complete">
                            <i class="fa-solid fa-check fa-icon"></i>
                            Mark as Complete
                        </div>
                        <div class="dropdown-item delete">
                            <i class="fa-solid fa-trash fa-icon"></i>
                            Delete
                        </div>
                    </div>
                </button>
            </div>
            <p class="task-description">
                ${task.description}
            </p>
            <div class="task-time">${task.startTime} - ${task.endTime}</div>
        </div>
        `,
        )
        .join("");

    taskGrid.innerHTML = html;
}
