class TasksRepository {
    constructor() {
        this.tasksList = [];
    }

    createTask(name, description, completed) {
        return new Task(id, name, description, completed);
    }

    getTaskList() {
        return this.tasksList;
    }

    addTask(newTask) {
        if (!this.tasksList.includes(newTask)) {
            this.tasksList.push(newTask);
            console.log("Successfully added task!!!");
        }
        else {
            console.log("You DON'T need dublicates, don't you?");
        }
    }

    updateTask(currentTask) {

    }

    deleteTask(deprecatedTask) {
        this.tasksList = this.tasksList.filter((everyItem) => {
            if (everyItem != deprecatedTask) {
                return everyItem;
            }
        })
    }
}

module.exports = TasksRepository;