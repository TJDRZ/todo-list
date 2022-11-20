import { TodoType } from "./objects";

const complete = (todo: TodoType) => (todo.complete = true);
const undoComplete = (todo: TodoType) => (todo.complete = false);

export { complete, undoComplete };
