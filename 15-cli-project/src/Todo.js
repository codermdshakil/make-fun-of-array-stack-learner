/**
 * @param{array} as arr
 */

function generatedId(arr) {
  if (arr.length == 0) return 0;
  else {
    arr[arr.length - 1].id + 1;
  }
}

/**
 * @property todoList
 * @method addItem
 * @method update
 * @method done
 * @method next
 * @method find
 * @method addItem
 * @method list
 *
 */

class Todo {
  constructor(todoList = []) {
    this.todoList = todoList;
  }

  // add item
  addItem(text) {
    const item = {
      text,
      id: generatedId(this.todoList),
      created: new Date(),
    };
    this.todoList.push(item);
  }

  // update item
  update(id, text) {
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].id === id) {
        this.todoList[i].text = text;
        break;
      }
    }
  }

  // remove first element from array
  done() {
    return this.todoList.shift();
  }

  // get first element from array
  next() {
    return this.todoList[0];
  }

  // show all items of array
  list() {
    return this.todoList;
  }

  // find a specific item from array
  find(term) {
    const result = [];
    for (let i = 0; i < this.todoList.length; i++) {
      const item = this.todoList[i];

      if (item.text.toLowerCase().includes(term.toLowerCase())) {
        result.push(item);
      }

    }
    return result;
  }
}

module.exports = Todo;

