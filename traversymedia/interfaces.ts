function showTodo(todo: { title: string, text: string }) {
  console.log(`${todo.title} - ${todo.text}`);
}

let myTodo = { title: 'trash', text: 'take out trash'};
showTodo(myTodo);