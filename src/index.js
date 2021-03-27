import './creation';
import { defaultStart } from './UI';
import { projectFolder, retrieveSave } from './projects';

(function saveCheck () {
    retrieveSave();
    if (!localStorage.projectFolder || projectFolder.length < 1) {
        defaultStart();
    }
})();