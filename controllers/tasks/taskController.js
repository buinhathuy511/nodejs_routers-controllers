const { httpStatusCodes } = require('../../constants');

function getTask(request, response) {
  response.writeHead(httpStatusCodes.OK, {
    'Content-Type': 'application/json',
  });
  response.write(JSON.stringify([]));
  response.end();
}

let currentTaskId = 0;
function addTask(request, response) {
  const newTaskId = ++currentTaskId;
  response.writeHead(httpStatusCodes.OK, {
    'Content-Type': 'application/json',
  });
  response.write(JSON.stringify({ id: newTaskId }));
  response.end();
}

function updateTask(request, response) {
  response.writeHead(httpStatusCodes.NO_CONTENT);
  response.end();
}

function deleteTask(request, response) {
  response.writeHead(httpStatusCodes.NO_CONTENT);
  response.end();
}

module.exports = {
  getTask,
  addTask,
  updateTask,
  deleteTask,
};
