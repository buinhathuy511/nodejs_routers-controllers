function getTask(request, response) {
    response.write('Get Task');
    response.end();
};

function addTask(request, response) {
    response.write('Create Task');
    response.end();
};

function updateTask(request, response) {
    response.write('Update Task');
    response.end();
};

function deleteTask(request, response) {
    response.write('Delete Task');
    response.end();
};

module.exports = {
    getTask,
    addTask,
    updateTask,
    deleteTask
};