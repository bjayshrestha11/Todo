"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var itemsList = [];

var Todo =
/*#__PURE__*/
function () {
  function Todo(text, status) {
    _classCallCheck(this, Todo);

    this.text = text;
    this.status = status;
    this.items = itemsList;
  }

  _createClass(Todo, [{
    key: "addtodo",
    value: function addtodo() {
      var item = {
        text: this.text,
        status: this.status
      };
      this.items.push(item);
      itemsList = this.items;
    }
  }], [{
    key: "showItem",
    value: function showItem() {
      return itemsList;
    }
  }]);

  return Todo;
}();

var getTodos = function getTodos() {
  var allItems = Todo.showItem();
  console.log(allItems);
};

var addNewTodo = function addNewTodo() {
  var a = new Todo('Go futsal', false);
  a.addtodo();
  getTodos();
  var b = new Todo('Go College', true);
  b.addtodo();
  getTodos();
};

getTodos();
addNewTodo();