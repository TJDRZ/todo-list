const complete = (todo) => todo.complete = true;
const undoComplete = (todo) => todo.complete = false;

export { 
    complete,
    undoComplete
}