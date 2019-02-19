"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var itemList = [];

var Todo =
/*#__PURE__*/
function () {
  function Todo(item, status) {
    _classCallCheck(this, Todo);

    this.item = item;
    this.status = status;
    this.items = itemList;
  }

  _createClass(Todo, [{
    key: "addTodo",
    value: function addTodo() {
      var todo = {
        text: this.item,
        status: this.status
      };
      var index = itemList.findIndex(function (x) {
        return x.text === todo.text;
      });

      if (index === -1) {
        itemList.push(todo);
      } else {
        alert('already added');
      }
    }
  }], [{
    key: "statusChange",
    value: function statusChange(todo) {
      var index = itemList.findIndex(function (x) {
        return x.text === todo;
      });
      itemList[index].status = !itemList[index].status;
    }
  }, {
    key: "getAllData",
    value: function getAllData() {
      return itemList;
    }
  }, {
    key: "deleteData",
    value: function deleteData(todo) {
      var index = itemList.findIndex(function (x) {
        return x.text === todo;
      });
      itemList.splice(index, 1);
    }
  }]);

  return Todo;
}();

var showAllData = function showAllData() {
  var allData = Todo.getAllData();
  var allList = '';
  allData.map(function (todo) {
    allList += "<li class=\"".concat(todo.status === true ? 'active' : 'notactive', "\"  onclick = \"changeStatus('").concat(todo.text, "')\">").concat(todo.text, " <button onclick=\"deleteData('").concat(todo.text, "')\">x</button></li>");
  });
  document.getElementById('todoList').innerHTML = allList;
};

var handleSubmit = function handleSubmit(e) {
  e.preventDefault();
  var text = e.target.todo.value;
  var todo = new Todo(text, false);
  todo.addTodo();
  e.target.reset();
  showAllData();
};

var resetAllData = function resetAllData() {
  itemList = [];
  showAllData();
};

var changeStatus = function changeStatus(text) {
  Todo.statusChange(text);
  showAllData();
};

var deleteData = function deleteData(text) {
  Todo.deleteData(text);
  showAllData();
};

showAllData();