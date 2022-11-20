import { Project, Todo } from './objects';

const createProject = (title: string) => {
  const newProject = new Project(title);
  return newProject;
};

const createTodo = (
  priority: boolean,
  title: string,
  description: string,
  dueDate: string
) => {
  const newTodo = new Todo(priority, title, description, dueDate);
  return newTodo;
};

export { createProject, createTodo };
