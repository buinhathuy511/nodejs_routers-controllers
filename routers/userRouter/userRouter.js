const handleLogin = require("../../controllers/users/userController");
const routerMethods = require("../methods");
const routes = require("../routes");

const userRouter = {
    run(request, response) {
        routerMethods.post(request, response, routes.user.login.value, handleLogin);
    }
}

module.exports = userRouter;