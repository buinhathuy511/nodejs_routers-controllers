const {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    handleMethodNotAllowed
} = require("../../controllers/users/userController");
const routerMethods = require("../methods")
const routes = require("../routes")

const userRouter = {
    run(request, response) {
        routerMethods.get(request, response, routes.user.value, getUser);
        routerMethods.post(request, response, routes.user.value, createUser);
        routerMethods.put(request, response, routes.user.value, updateUser);
        routerMethods.delete(request, response, routes.user.value, deleteUser);
        routerMethods.patch(request, response, routes.user.value, handleMethodNotAllowed);
    }
}

module.exports = userRouter;