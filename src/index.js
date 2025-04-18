import { div } from "./shorthand";
import { Todo, TodoFactory } from "./todo";
import "./styles.css";
import { Project } from "./project";
import { ProjectList } from "./project-list";
import { Sidebar } from "./sidebar";
import { UserProfile } from "./userProfile";
import { Renderable } from "./renderable";
import { formatDistance } from "date-fns";

class App extends Renderable {
    constructor() {
        super();
    }
    renderChildren = this.render;
    render = function() {
        let tree = this.renderChildren();
        document.body.append(tree);
        
    }

    toHtml = () => div("app");
}

const tf = new TodoFactory(formatDistance);
const x = tf.new("Titlus",  new Date(2025, 3, 15), "medium", "notes");
    // new Todo("title",  new Date(2025, 3, 15), "medium", "notes"),

const todos = [
    new Todo("Order a Burger at Nando's for lunch", new Date(2025, 3, 15) , "high", ""), 
    // new Todo("title",  new Date(2025, 3, 15), "medium", "notes"),
    x,
    new Todo("title",  new Date(2025, 3, 15), "low", "notes"),
];

// todos.push(new AddTodo());

const project = new Project("My Project", todos);

const todos2 = [
    new Todo("MyTodo", new Date(2025, 3, 15), "low", "notes"), 
    new Todo("MyTodo", new Date(2025, 3, 15), "high", "notes"),
    new Todo("MyTodo", new Date(2025, 3, 15), "medium", "notes"),
];


const project2 = new Project("My Project2", todos2);
const pList = new ProjectList("Today", project, project2);
const app = new App();
const sidebar = new Sidebar(
        new UserProfile("Morris"),
        "My Projects",
        "Today",
        "Upcoming",
);

// const modal = document.createElement("dialog");

app.addChildren(sidebar, pList);
app.render();