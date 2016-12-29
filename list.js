var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit") {
	if(input === "list") {
		listTodos();
	} else if(input === "new") {
		addTodo();
	} else if(input === "delete") {
		deleteTodo();
	}
	input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");

function listTodos(){
	console.log("**********");
	if(todos.length === 0){
		console.log("You have nothing to do!");
	} else {
		todos.forEach(function(todo, index){
			console.log(index + ": " + todo);
		});
	}
	console.log("**********");
}

function addTodo(){
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log("Added Todo");
}

function deleteTodo(){
	var index = prompt("Enter index of todo to delete");
	todos.splice(index, 1);
	console.log("Deleted Todo");
}