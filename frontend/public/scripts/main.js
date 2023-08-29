import { populateMembers } from "./member.js";
import { fetchAndDrawTable, handleCreateItem } from "./table.js";

document.addEventListener("DOMContentLoaded", () => {
  fetchAndDrawTable();

  populateMembers();

  /** @type {HTMLButtonElement} */
  const addButton = document.getElementById("add-newrow");
  addButton.addEventListener("click", () => {
    handleCreateItem();
  });
});
