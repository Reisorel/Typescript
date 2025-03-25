"use strict";
// Sélectionne tous les éléments du DOM ayant la classe "items-container"
// TS  : as NodeListOf<HTMLDivElement>
const itemsContainer = document.querySelectorAll(".items-container");
// Délcaration de 6 variables avec leur typage
let actualContainer, actualBtn, actualUl, actualForm, actualTextInput, actualValidation;
// Fonction adddContainerListeners prend en paramètre un élément HTMLDivElement
// Ajoute des écouteurs d'événements supression et ajout d'item
// TS : currentContainer: HTMLDivElement
// TS : currentAddItemBtn: HTMLButtonElement
function addContainerListeners(currentContainer) {
    const currentContainerDeletionBtn = currentContainer.querySelector(".delete-container-btn");
    const currentAddItemBtn = currentContainer.querySelector(".add-item-btn");
    const currentCloseFormBtn = currentContainer.querySelector(".close-form-btn");
    const currentForm = currentContainer.querySelector("form");
    // Appel des fonctions deleteBtnlisteners et AddItemBtnListeners avec en paramètre les éléments de suppression et d'ajout
    deleteBtnlisteners(currentContainerDeletionBtn);
    AddItemBtnListeners(currentAddItemBtn);
    closingFormBtnListeners(currentCloseFormBtn);
    addFormSubmitListener(currentForm);
    addDDlisteners(currentContainer);
}
itemsContainer.forEach((container) => {
    addContainerListeners(container);
});
// Fonction deleteBtnlisteners prend en paramètre un élément HTMLButtonElement
// Appel la fonction handleContainerDeletion avec en paramètre l'élément HTMLButtonElement
// TS : btn: HTMLButtonElement
function deleteBtnlisteners(btn) {
    btn.addEventListener("click", handleContainerDeletion);
}
// Fonction AddItemBtnListeners prend en paramètre un élément HTMLButtonElement
// Appel la fonction handleAddItem avec en paramètre l'élément HTMLButtonElement
function AddItemBtnListeners(btn) {
    btn.addEventListener("click", handleAddItem);
}
function closingFormBtnListeners(btn) {
    btn.addEventListener("click", () => toggleForm(actualBtn, actualForm, false));
}
function addFormSubmitListener(form) {
    form.addEventListener("submit", createNewItem);
}
function addDDlisteners(element) {
    element.addEventListener("dragstart", handleDragStart);
    element.addEventListener("dragover", handleDragOver);
    element.addEventListener("drop", handleDrop);
    element.addEventListener("dragend", handleDragEnd);
}
// Fonction handleContainerDelection prend en paramètre un événement MouseEvent
// Permet de supprimer un container
function handleContainerDeletion(e) {
    const btn = e.target;
    const btnsArray = [
        ...document.querySelectorAll(".delete-container-btn"),
    ];
    const containers = [
        ...document.querySelectorAll(".items-container"),
    ];
    containers[btnsArray.indexOf(btn)].remove();
}
// Fonction handleAddItem prend en paramètre un événement MouseEvent
// Permet de créer un nouveau container
function handleAddItem(e) {
    const btn = e.target;
    if (actualContainer)
        toggleForm(actualBtn, actualForm, false);
    setContainerItems(btn);
    toggleForm(actualBtn, actualForm, true);
}
function toggleForm(btn, form, action) {
    if (!action) {
        form.style.display = "none";
        btn.style.display = "block";
    }
    else if (action) {
        form.style.display = "block";
        btn.style.display = "none";
    }
}
function setContainerItems(btn) {
    actualBtn = btn;
    actualContainer = btn.parentElement;
    actualUl = actualContainer.querySelector("ul");
    actualForm = actualContainer.querySelector("form");
    actualTextInput = actualContainer.querySelector("input");
    actualValidation = actualContainer.querySelector(".validation-msg");
}
function createNewItem(e) {
    e.preventDefault();
    if (actualTextInput.value.length === 0) {
        actualValidation.textContent = "Must be at least 1 character long";
        return;
    }
    else {
        actualValidation.textContent = "";
    }
    const itemContent = actualTextInput.value;
    const li = `
  <li class="item" draggable="true">
  <p>${itemContent}</p>
  <button>X</button>
  </li>`;
    actualUl.insertAdjacentHTML("beforeend", li);
    const item = actualUl.lastElementChild;
    const liBtn = item.querySelector("button");
    handleItemDeletion(liBtn);
    addDDlisteners(item);
    actualTextInput.value = "";
}
function handleItemDeletion(btn) {
    btn.addEventListener("click", () => {
        const elToRemove = btn.parentElement;
        elToRemove.remove();
    });
}
// Drag & drop
let dragSrcEl;
function handleDragStart(e) {
    var _a;
    e.stopPropagation();
    if (actualContainer)
        toggleForm(actualBtn, actualForm, false);
    dragSrcEl = this;
    (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("text/html", this.innerHTML);
}
function handleDragOver(e) {
    e.preventDefault();
}
function handleDrop(e) {
    var _a;
    e.stopPropagation();
    const receptionEl = this;
    if (dragSrcEl.nodeName === "LI" &&
        receptionEl.classList.contains("items-container")) {
        receptionEl.querySelector("ul").appendChild(dragSrcEl);
        addDDlisteners(dragSrcEl);
        handleItemDeletion(dragSrcEl.querySelector("button"));
    }
    if (dragSrcEl !== this && this.classList[0] === dragSrcEl.classList[0]) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData("text/html");
        if (this.classList.contains("items-container")) {
            addContainerListeners(this);
            this.querySelectorAll("li").forEach((li) => {
                handleItemDeletion(li.querySelector("button"));
                addDDlisteners(li);
            });
        }
        else {
            addDDlisteners(this);
            handleItemDeletion(this.querySelector("button"));
        }
    }
}
function handleDragEnd(e) {
    e.stopPropagation();
    if (this.classList.contains("items-container")) {
        addContainerListeners(this);
        this.querySelectorAll("li").forEach((li) => {
            handleItemDeletion(li.querySelector("button"));
            addDDlisteners(li);
        });
    }
    else {
        addDDlisteners(this);
    }
}
// add new Container
const addContainerBtn = document.querySelector(".add-container-btn");
const addContainerForm = document.querySelector(".add-new-container form");
const addContainerFormInput = document.querySelector(".add-new-container input");
const validationNewContainer = document.querySelector(".add-new-container .validation-msg");
const addContainerCloseBtn = document.querySelector(".close-add-list");
const addNewContainerBtn = document.querySelector(".add-new-container");
const containersList = document.querySelector(".main-content");
addContainerBtn.addEventListener("click", () => {
    toggleForm(addContainerBtn, addContainerForm, true);
});
addContainerCloseBtn.addEventListener("click", () => {
    toggleForm(addContainerBtn, addContainerForm, false);
});
addContainerForm.addEventListener("submit", createNewcontainer);
function createNewcontainer(e) {
    e.preventDefault();
    if (addContainerFormInput.value.length === 0) {
        validationNewContainer.textContent = "Must be at least 1 character long";
        return;
    }
    else {
        validationNewContainer.textContent = "";
    }
    const itemsContainer = document.querySelector(".items-container");
    const newContainer = itemsContainer.cloneNode();
    const newContainerContent = `
        <div class="top-container">
          <h2>${addContainerFormInput.value}</h2>
          <button class="delete-container-btn">X</button>
        </div>
        <ul></ul>
        <button class="add-item-btn">Add an item</button>
        <form autocomplete="off">
          <div class="top-form-container">
            <label for="item">Add a new item</label>
            <button type="button" class="close-form-btn">X</button>
          </div>
          <input type="text" id="item" />
          <span class="validation-msg"></span>
          <button type="submit">Submit</button>
        </form>`;
    newContainer.innerHTML = newContainerContent;
    containersList.insertBefore(newContainer, addNewContainerBtn);
    addContainerFormInput.value = "";
    addContainerListeners(newContainer);
}
