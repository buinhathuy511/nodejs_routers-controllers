const taskController = require("../../controllers/tasks/taskController");
const routerMethods = require("../methods");
const routes = require("../routes");

const taskRouter = {
    run(request, response) {
        routerMethods.get(request, response, routes.tasks.value, taskController.getTask);
        routerMethods.post(request, response, routes.tasks.value, taskController.addTask);
        routerMethods.put(request, response, routes.tasks.value, taskController.updateTask);
        routerMethods.delete(request, response, routes.tasks.value, taskController.deleteTask);
    }
}

module.exports = taskRouter;