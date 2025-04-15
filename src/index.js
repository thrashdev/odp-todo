import { div } from "./shorthand";
import { Todo } from "./todo";
import "./styles.css";
import { Project } from "./project";
import { ProjectList } from "./project-list";
import { Sidebar } from "./sidebar";
import { UserProfile } from "./userProfile";
import { Renderable } from "./renderable";

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

const todos = [
    new Todo("Order a Burger", "Order a burger at Nando's for lunch", new Date(2025, 3, 15), "high", "", ["Go to Nando's", "Order burger", "Have lunch"]), 
    new Todo("title", "description", new Date(2025, 3, 15), "medium", "notes", "checklist"),
    new Todo("title", "description", new Date(2025, 3, 15), "low", "notes", "checklist"),
];

const project = new Project("My Project", todos);

const todos2 = [
    new Todo("MyTodo", "description", new Date(2025, 3, 15), "low", "notes", "checklist"), 
    new Todo("MyTodo", "description", new Date(2025, 3, 15), "high", "notes", "checklist"),
    new Todo("MyTodo", "description", new Date(2025, 3, 15), "medium", "notes", "checklist"),
];


const project2 = new Project("My Project2", todos2);
const pList = new ProjectList(project, project2);
const app = new App();
const sidebar = new Sidebar(
    new UserProfile("Morris"),
    "123",
    "abc",
    "I love Jesus",
).append("xyz");

app.addChildren(sidebar, pList);
app.render();