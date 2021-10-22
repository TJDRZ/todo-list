import { defaultStart } from './components/UI';
import { projectFolder, retrieveSave } from './components/projects';
import './css/reset.css';
import './css/style.css';

(function saveCheck() {
  retrieveSave();
  if (!localStorage.projectFolder || projectFolder.length < 1) {
    defaultStart();
  }
})();
