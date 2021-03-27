import { Project, Todo } from './objects';

const createProject = (title) => {
   const newProject = new Project(title);
   return newProject;
};

const createTodo = (priority, title, description, dueDate) => {
    const newTodo = new Todo(priority, title, description, dueDate);
    return newTodo;
};

export {
    createProject,
    createTodo
}