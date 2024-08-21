const userRouter = require("./userRouter/userRouter");

const router = {
    run: function(request, response) {
        userRouter.run(request, response);
    }
}

module.exports = router;