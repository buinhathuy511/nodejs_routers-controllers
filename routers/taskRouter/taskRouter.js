const taskController = require("../../controllers/tasks/taskController");
const routerMethods = require("../methods");
const routes = require("../routes");

const taskRouter = {
    run(request, response) {
        routerMethods.get(request, response, routes.task.getTask.value, taskController.getTask);
        routerMethods.post(request, response, routes.task.addTask.value, taskController.addTask);
        routerMethods.put(request, response, routes.task.updateTask.value, taskController.updateTask);
        routerMethods.delete(request, response, routes.task.deleteTask.value, taskController.deleteTask);
    }
}

module.exports = taskRouter;