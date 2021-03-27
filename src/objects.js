class Todo {
    constructor(priority, title, description, dueDate) {
        this.priority = priority;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.complete = false;
    }
    
}

class Project {
    constructor(title) {
        this.title = title;
        this.todos = [];
    }
}

export { 
    Todo,
    Project,
}