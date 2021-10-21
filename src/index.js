import { defaultStart } from './components/UI';
import { projectFolder, retrieveSave } from './components/projects';
import './assets/styles/style.css';

(function saveCheck() {
  retrieveSave();
  if (!localStorage.projectFolder || projectFolder.length < 1) {
    defaultStart();
  }
})();
