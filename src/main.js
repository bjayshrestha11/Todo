let itemsList = []
class Todo {
    constructor(text,status){
        this.text=text;
        this.status=status;
        this.items = itemsList
    }
    addtodo(){
        let item ={
            text: this.text,
            status: this.status
        }
        this.items.push(item);
        itemsList = this.items
    }
    static showItem(){
        return itemsList
    }
}

let getTodos = () => {
    let allItems = Todo.showItem();
    console.log(allItems);    
}

let addNewTodo = () => {
    let a = new Todo('Go futsal',false);
    a.addtodo();
    getTodos();
    let b = new Todo('Go College',true);
    b.addtodo();
    getTodos();
}

getTodos();
addNewTodo();
