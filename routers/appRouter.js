const taskRouter = require("./taskRouter/taskRouter");
const userRouter = require("./userRouter/userRouter");

const router = {
    run: function(request, response) {
        taskRouter.run(request, response);
        userRouter.run(request, response);
    }
}

module.exports = router;