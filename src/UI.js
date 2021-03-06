import { complete, undoComplete } from "./complete";
import { createProject, createTodo } from "./creation";
import { addTodoToCurrentProject, projectAdd, projectFolder,  projectRemove, removeTodoFromCurrentProject, save, setCurrentProject } from "./projects";

//dynamically change todo container contents on different project selection
const dynamicTodoContainer = (project) => {
    //clear container
    while(todoContainer.firstElementChild) {
        todoContainer.removeChild(todoContainer.firstElementChild);
    }
    //fill container
    for (let i = 0; i < project.todos.length; i++) {
        todoItem(project.todos[i]);
    }

};

//set active project list item
const setActiveLi = (li) => {
    li.classList.add('selected')
};

const resetActiveLi = () => {
    document.querySelectorAll('.selected').forEach((listItem) => {
        listItem.classList.remove('selected');
    });
};

//Projects
const newProjectButton = document.querySelector('#project-button');
const projectList = document.querySelector('#project-list');
const projectForm = document.querySelector('#project-form');
const projectFormSubmit = document.querySelector('#project-form-submit');

newProjectButton.addEventListener('click', () => {
    projectForm.classList.toggle('visible');
});

projectFormSubmit.addEventListener('click', () => {
    projectForm.classList.toggle('visible');
    const project = createProject(document.querySelector('#project-title').value);
    projectListItem(project);
    projectAdd(project);
    setCurrentProject(project);
    dynamicTodoContainer(project);
    save(projectFolder);
});

const projectListItem = (project) => {
    const newProjectListItem = document.createElement('li');
    resetActiveLi();
    setActiveLi(newProjectListItem);
    newProjectListItem.textContent = project.title;
    newProjectListItem.addEventListener('click', () => {
        setCurrentProject(project);
        dynamicTodoContainer(project);
        resetActiveLi();
        setActiveLi(newProjectListItem);
    });
    const projectDelete = document.createElement('button');
    projectDelete.classList.add('project-delete');
    projectDelete.textContent = 'DEL';
    projectDelete.addEventListener('click', () => {
        //dynamicCurrentProject(project, newProjectListItem);
        projectRemove(project);
        projectList.removeChild(newProjectListItem);
        save(projectFolder);
    });
    newProjectListItem.appendChild(projectDelete);
    projectList.appendChild(newProjectListItem);    
};

//Todos
const newTodoButton = document.querySelector('#todo-button');
const todoContainer = document.querySelector('#todo-container');
const todoForm = document.querySelector('#todo-form');
const todoFormSubmit = document.querySelector('#todo-form-submit');

newTodoButton.addEventListener('click', () => {
    todoForm.classList.toggle('visible');
});

todoFormSubmit.addEventListener('click', () => {
    todoForm.classList.toggle('visible');
    const todo = createTodo(document.querySelector('#priority').checked, document.querySelector('#title').value, document.querySelector('#description').value, document.querySelector('#due-date').value); //aka everything in the todo form
    todoItem(todo);
    addTodoToCurrentProject(todo);
    save(projectFolder);
});

const todoItem = (todo) => {
    //card
    const newTodoCard = document.createElement('div');
    newTodoCard.classList.add('todo');
    //delete button
    const todoDelete = document.createElement('button');
    todoDelete.classList.add('todo-delete');
    todoDelete.textContent = 'X';
    todoDelete.addEventListener('click', () => {
        removeTodoFromCurrentProject(todo);
        todoContainer.removeChild(newTodoCard);
        save(projectFolder);
    });
    newTodoCard.appendChild(todoDelete);
    //title
    const todoTitle = document.createElement('h4');
    todoTitle.textContent = todo.title;
    if (todo.complete == true) {
        todoTitle.style.textDecoration = 'line-through';
    }
    todoTitle.addEventListener('click', () => {
        if (todo.complete == false) {
            todoTitle.style.textDecoration = 'line-through';
            complete(todo);
        }
        else {
            todoTitle.style.textDecoration = 'none';
            undoComplete(todo);
        }
        save(projectFolder);
    });
    newTodoCard.appendChild(todoTitle);
    //priority
    const todoPriority = document.createElement('button');
    todoPriority.classList.add('todo-priority-button');
    if (todo.priority == true) {
        todoPriority.style.backgroundColor = 'red';
        todoPriority.textContent = 'HIGH PRIORITY!';
    }
    else {
        todoPriority.style.backgroundColor = 'green';
        todoPriority.textContent = 'Low Priority';
    }
    todoPriority.addEventListener('click', () => {
        if (todo.priority == true) {
            todoPriority.style.backgroundColor = 'green';
            todoPriority.textContent = 'Low Priority';
            todo.priority = false;
        }
        else {
            todoPriority.style.backgroundColor = 'red';
            todoPriority.textContent = 'HIGH PRIORITY!';
            todo.priority = true;
        }
        save(projectFolder);
    });
    newTodoCard.appendChild(todoPriority);
    //description
    const todoDescription = document.createElement('button');
    todoDescription.classList.add('description');
    todoDescription.textContent = 'Description';
    todoDescription.addEventListener('click', () => {
        alert(todo.description);
    });
    newTodoCard.appendChild(todoDescription);
    //duedate
    const todoDueDate = document.createElement('h5');
    todoDueDate.textContent = todo.dueDate;
    newTodoCard.appendChild(todoDueDate);
    //card
    todoContainer.appendChild(newTodoCard);
};

//Default starting project & todos using the same processes as above
const defaultStart = () => {
    //default project set up
    const defaultProject = createProject('Default Project');
    projectListItem(defaultProject);
    projectAdd(defaultProject);
    setCurrentProject(defaultProject);
    
    //default todos set up
    //1
    const defaultTodoOne = createTodo(true, 'Default Todo #1', 'Take care of task one', '1/1/2021');
    todoItem(defaultTodoOne);
    addTodoToCurrentProject(defaultTodoOne);
    //2
    const defaultTodoTwo = createTodo(false, 'Default Todo #2', 'Take care of task two', '1/1/2022');
    todoItem(defaultTodoTwo);
    addTodoToCurrentProject(defaultTodoTwo);
};

export {
    projectListItem,
    todoItem,
    defaultStart
}