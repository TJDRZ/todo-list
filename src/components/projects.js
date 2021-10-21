import { createProject } from './creation';
import { projectListItem, todoItem } from './UI';

// grand project array
let projectFolder = [];

const projectAdd = (project) => projectFolder.push(project);

const projectRemove = (project) => {
  const index = projectFolder.indexOf(project);
  projectFolder.splice(index, 1);
};

// current project
let currentProject = createProject('currentProject');

const setCurrentProject = (project) => (currentProject = project);

const addTodoToCurrentProject = (todo) => currentProject.todos.push(todo);

const removeTodoFromCurrentProject = (todo) => {
  const index = currentProject.todos.indexOf(todo);
  currentProject.todos.splice(index, 1);
};

// Save
const save = (projectFolder) => {
  localStorage.setItem('projectFolder', JSON.stringify(projectFolder));
};

// Retrieve
const retrieveSave = () => {
  const savedProjectFolder = localStorage.getItem('projectFolder');
  if (savedProjectFolder && savedProjectFolder.length) {
    projectFolder = JSON.parse(savedProjectFolder);
    if (projectFolder.length >= 1) {
      // load all projects
      for (let i = 0; i < projectFolder.length; i++) {
        projectListItem(projectFolder[i]);
      }
      // just make todo container show the last project loaded's todos and select it as current project
      for (
        let i = 0;
        i < projectFolder[projectFolder.length - 1].todos.length;
        i++
      ) {
        todoItem(projectFolder[projectFolder.length - 1].todos[i]);
      }
      currentProject = projectFolder[projectFolder.length - 1];
    }
  }
};

export {
  projectFolder,
  projectAdd,
  projectRemove,
  currentProject,
  setCurrentProject,
  addTodoToCurrentProject,
  removeTodoFromCurrentProject,
  save,
  retrieveSave,
};
