let itemList = []
class Todo{
    constructor(item, status){
        this.item = item;
        this.status = status;
        this.items = itemList;
    }
    addTodo(){
        let todo = {
            text : this.item,
            status: this.status
        }
        let index = itemList.findIndex(x => x.text === todo.text)
        if(index === -1){
            itemList.push(todo);
        }else{
            alert('already added');
        }
    }

    static statusChange(todo){
        let index = itemList.findIndex(x => x.text === todo)
        itemList[index].status = !itemList[index].status;
    }

    static getAllData(){
        return itemList;
    }

    static deleteData(todo) {
        let index = itemList.findIndex(x => x.text === todo)
        itemList.splice(index, 1);
    }

}

let showAllData = () => {
    let allData = Todo.getAllData();
    let allList = ''

    allData.map(todo => {

        allList += `<li class="${todo.status === true ? 'active' : 'notactive'}"  onclick = "changeStatus('${todo.text}')">${todo.text} <button onclick="deleteData('${todo.text}')">x</button></li>`
    })
    document.getElementById('todoList').innerHTML = allList;
}

let handleSubmit = (e) => {
    e.preventDefault();
    let text = e.target.todo.value;
    let todo = new Todo(text, false);
    todo.addTodo();
    e.target.reset();
    showAllData();
}
let resetAllData = () => {
    itemList = [];
    showAllData();
}
let changeStatus = (text) => {
    Todo.statusChange(text);
    showAllData();
}
let deleteData = (text) => {
    Todo.deleteData(text);
    showAllData();
}

showAllData();