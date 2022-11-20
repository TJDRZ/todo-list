import { TodoType, ProjectType } from "./objects";
import { complete, undoComplete } from "./complete";
import { createProject, createTodo } from "./creation";
import {
  addTodoToCurrentProject,
  projectAdd,
  projectFolder,
  projectRemove,
  removeTodoFromCurrentProject,
  save,
  setCurrentProject,
} from "./projects";

// form display:none / flex "hiding/visibility" helper
const formHider = (form: HTMLFormElement) => {
  window.getComputedStyle(form).display === "none"
    ? (form.style.display = "flex")
    : (form.style.display = "none");
};

// dynamically change todo container contents on different project selection
const dynamicTodoContainer = (project: ProjectType) => {
  // clear container
  while (todoContainer?.firstElementChild) {
    todoContainer.removeChild(todoContainer.firstElementChild);
  }
  // fill container
  for (let i = 0; i < project.todos.length; i++) {
    todoItem(project.todos[i]);
  }
};

// set active project list item
const setActiveLi = (li: HTMLLIElement) => {
  li.classList.add("selected");
};

const resetActiveLi = () => {
  document.querySelectorAll(".selected").forEach((listItem) => {
    listItem.classList.remove("selected");
  });
};

// Projects
const newProjectButton = document.querySelector(
  "#project-button"
) as HTMLButtonElement;
const projectList = document.querySelector("#project-list") as HTMLUListElement;
const projectForm = document.querySelector("#project-form") as HTMLFormElement;
const projectFormSubmit = document.querySelector(
  "#project-form-submit"
) as HTMLButtonElement;

newProjectButton.addEventListener("click", () => {
  formHider(projectForm);
});

projectFormSubmit.addEventListener("click", () => {
  const projectTitle = document.querySelector(
    "#project-title"
  ) as HTMLInputElement;
  formHider(projectForm);
  const project = createProject(projectTitle.value);
  projectListItem(project);
  projectAdd(project);
  setCurrentProject(project);
  dynamicTodoContainer(project);
  save(projectFolder);
});

const projectListItem = (project: ProjectType) => {
  const newProjectListItem = document.createElement("li");
  resetActiveLi();
  setActiveLi(newProjectListItem);
  newProjectListItem.textContent = project.title;
  newProjectListItem.addEventListener("click", () => {
    setCurrentProject(project);
    dynamicTodoContainer(project);
    resetActiveLi();
    setActiveLi(newProjectListItem);
  });
  const projectDelete = document.createElement("button");
  projectDelete.classList.add("project-delete");
  projectDelete.textContent = "X";
  projectDelete.addEventListener("click", () => {
    // dynamicCurrentProject(project, newProjectListItem);
    projectRemove(project);
    projectList.removeChild(newProjectListItem);
    save(projectFolder);
  });
  newProjectListItem.appendChild(projectDelete);
  projectList.appendChild(newProjectListItem);
};

// Todos
const newTodoButton = document.querySelector(
  "#todo-button"
) as HTMLButtonElement;
const todoContainer = document.querySelector(
  "#todo-container"
) as HTMLDivElement;
const todoForm = document.querySelector("#todo-form") as HTMLFormElement;
const todoFormSubmit = document.querySelector(
  "#todo-form-submit"
) as HTMLButtonElement;

newTodoButton.addEventListener("click", () => {
  formHider(todoForm);
});

todoFormSubmit.addEventListener("click", () => {
  const priority = document.querySelector("#priority") as HTMLInputElement;
  const title = document.querySelector("#priority") as HTMLInputElement;
  const description = document.querySelector("#priority") as HTMLInputElement;
  const dueDate = document.querySelector("#priority") as HTMLInputElement;
  formHider(todoForm);
  const todo = createTodo(
    priority.checked,
    title.value,
    description.value,
    dueDate.value
  ); // aka everything in the todo form
  todoItem(todo);
  addTodoToCurrentProject(todo);
  save(projectFolder);
});

const todoItem = (todo: TodoType) => {
  // card
  const newTodoCard = document.createElement("div");
  newTodoCard.classList.add("todo");
  // delete button
  const todoDelete = document.createElement("button");
  todoDelete.classList.add("todo-delete");
  todoDelete.textContent = "X";
  todoDelete.addEventListener("click", () => {
    removeTodoFromCurrentProject(todo);
    todoContainer.removeChild(newTodoCard);
    save(projectFolder);
  });
  newTodoCard.appendChild(todoDelete);
  // title
  const todoTitle = document.createElement("h2");
  todoTitle.textContent = todo.title;
  if (todo.complete === true) {
    todoTitle.style.textDecoration = "line-through";
  }
  todoTitle.addEventListener("click", () => {
    if (todo.complete === false) {
      todoTitle.style.textDecoration = "line-through";
      complete(todo);
    } else {
      todoTitle.style.textDecoration = "none";
      undoComplete(todo);
    }
    save(projectFolder);
  });
  newTodoCard.appendChild(todoTitle);
  // priority
  const todoPriority = document.createElement("button");
  todoPriority.classList.add("todo-priority-button");
  if (todo.priority === true) {
    todoPriority.style.backgroundColor = "red";
    todoPriority.textContent = "HIGH PRIORITY!";
  } else {
    todoPriority.style.backgroundColor = "green";
    todoPriority.textContent = "Low Priority";
  }
  todoPriority.addEventListener("click", () => {
    if (todo.priority === true) {
      todoPriority.style.backgroundColor = "green";
      todoPriority.textContent = "Low Priority";
      todo.priority = false;
    } else {
      todoPriority.style.backgroundColor = "red";
      todoPriority.textContent = "HIGH PRIORITY!";
      todo.priority = true;
    }
    save(projectFolder);
  });
  newTodoCard.appendChild(todoPriority);
  // description
  const todoDescription = document.createElement("button");
  todoDescription.classList.add("description");
  todoDescription.textContent = "Description";
  todoDescription.addEventListener("click", () => {
    alert(todo.description);
  });
  newTodoCard.appendChild(todoDescription);
  // duedate
  const todoDueDate = document.createElement("h5");
  todoDueDate.textContent = todo.dueDate;
  newTodoCard.appendChild(todoDueDate);
  // card
  todoContainer.appendChild(newTodoCard);
};

// Default starting project & todos using the same processes as above
const defaultStart = () => {
  // default project set up
  const defaultProject = createProject("Default Project");
  projectListItem(defaultProject);
  projectAdd(defaultProject);
  setCurrentProject(defaultProject);

  // default todos set up
  // 1
  const defaultTodoOne = createTodo(
    true,
    "Default Todo #1",
    "Take care of task one",
    "1/1/2021"
  );
  todoItem(defaultTodoOne);
  addTodoToCurrentProject(defaultTodoOne);
  // 2
  const defaultTodoTwo = createTodo(
    false,
    "Default Todo #2",
    "Take care of task two",
    "1/1/2022"
  );
  todoItem(defaultTodoTwo);
  addTodoToCurrentProject(defaultTodoTwo);
};

export { projectListItem, todoItem, defaultStart };
