interface TodoType {
  priority: boolean;
  title: string;
  description: string;
  dueDate: string;
  complete: boolean;
}

interface ProjectType {
  title: string;
  todos: TodoType[];
}

class Todo implements TodoType {
  priority: boolean;
  title: string;
  description: string;
  dueDate: string;
  complete: boolean;
  constructor(
    priority: boolean,
    title: string,
    description: string,
    dueDate: string
  ) {
    this.priority = priority;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.complete = false;
  }
}

class Project implements ProjectType {
  title: string;
  todos: TodoType[];
  constructor(title: string) {
    this.title = title;
    this.todos = [];
  }
}

export { TodoType, ProjectType, Todo, Project };
