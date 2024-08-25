const { httpStatusCodes } = require('../../constants');

function getTask(request, response) {
  response.writeHead(httpStatusCodes.OK, {
    'Content-Type': 'text/plain',
  });
  response.write('Get Task');
  response.end();
}

function addTask(request, response) {
  response.writeHead(httpStatusCodes.OK, {
    'Content-Type': 'text/plain',
  });
  response.write('Create Task');
  response.end();
}

function updateTask(request, response) {
  response.writeHead(httpStatusCodes.OK, {
    'Content-Type': 'text/plain',
  });
  response.write('Update Task');
  response.end();
}

function deleteTask(request, response) {
  response.writeHead(httpStatusCodes.OK, {
    'Content-Type': 'text/plain',
  });
  response.write('Delete Task');
  response.end();
}

module.exports = {
  getTask,
  addTask,
  updateTask,
  deleteTask,
};
