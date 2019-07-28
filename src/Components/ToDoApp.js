import React from "react";
import AddToDo from "./AddToDo";
import Footer from "./Footer";
import VisibleToDoList from "./VisibleToDoList";

export const FILTERS = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVES: "SHOW_ACTIVES",
  SHOW_COMPLETED: "SHOW_COMPLETED"
};




const ToDoApp = () => (
  <div>
    <AddToDo />
    <VisibleToDoList />
    <Footer />
  </div>
);

export default ToDoApp;
