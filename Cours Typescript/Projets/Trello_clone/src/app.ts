// Sélectionne tous les éléments du DOM ayant la classe "items-container"
// TS  : as NodeListOf<HTMLDivElement>
const itemsContainer = document.querySelectorAll(
  ".items-container"
) as NodeListOf<HTMLDivElement>;

// Délcaration de 6 variables avec leur typage
let actualContainer: HTMLDivElement,
  actualBtn: HTMLButtonElement,
  actualUl: HTMLUListElement,
  actualForm: HTMLFormElement,
  actualTextInput: HTMLInputElement,
  actualValidation: HTMLSpanElement;

// Fonction adddContainerListeners prend en paramètre un élément HTMLDivElement
// Ajoute des écouteurs d'événements supression et ajout d'item
// TS : currentContainer: HTMLDivElement
// TS : currentAddItemBtn: HTMLButtonElement
function addContainerListeners(currentContainer: HTMLDivElement) {
  const currentContainerDeletionBtn = currentContainer.querySelector(
    ".delete-container-btn"
  ) as HTMLButtonElement;
  const currentAddItemBtn = currentContainer.querySelector(
    ".add-item-btn"
  ) as HTMLButtonElement;
  const currentCloseFormBtn = currentContainer.querySelector(
    ".close-form-btn"
  ) as HTMLButtonElement;
  const currentForm = currentContainer.querySelector("form") as HTMLFormElement;

  // Appel des fonctions deleteBtnlisteners et AddItemBtnListeners avec en paramètre les éléments de suppression et d'ajout
  deleteBtnlisteners(currentContainerDeletionBtn);
  AddItemBtnListeners(currentAddItemBtn);
  closingFormBtnListeners(currentCloseFormBtn);
  addFormSubmitListener(currentForm);
}

itemsContainer.forEach((container: HTMLDivElement) => {
  addContainerListeners(container);
});

// Fonction deleteBtnlisteners prend en paramètre un élément HTMLButtonElement
// Appel la fonction handleContainerDeletion avec en paramètre l'élément HTMLButtonElement
// TS : btn: HTMLButtonElement
function deleteBtnlisteners(btn: HTMLButtonElement) {
  btn.addEventListener("click", handleContainerDeletion);
}

// Fonction AddItemBtnListeners prend en paramètre un élément HTMLButtonElement
// Appel la fonction handleAddItem avec en paramètre l'élément HTMLButtonElement
function AddItemBtnListeners(btn: HTMLButtonElement) {
  btn.addEventListener("click", handleAddItem);
}

function closingFormBtnListeners(btn: HTMLButtonElement) {
  btn.addEventListener("click", () => toggleForm(actualBtn, actualForm, false));
}

function addFormSubmitListener(form: HTMLFormElement) {
  form.addEventListener("submit", createNewItem);
}

// Fonction handleContainerDelection prend en paramètre un événement MouseEvent
// Permet de supprimer un container
function handleContainerDeletion(e: MouseEvent) {
  const btn = e.target as HTMLButtonElement;
  const btnsArray = [
    ...document.querySelectorAll(".delete-container-btn"),
  ] as HTMLButtonElement[];
  const containers = [
    ...document.querySelectorAll(".items-container"),
  ] as HTMLDivElement[];
  containers[btnsArray.indexOf(btn)].remove();
}
// Fonction handleAddItem prend en paramètre un événement MouseEvent
// Permet de créer un nouveau container
function handleAddItem(e: MouseEvent) {
  const btn = e.target as HTMLButtonElement;
  if (actualContainer) toggleForm(actualBtn, actualForm, false);
  setContainerItems(btn);
  toggleForm(actualBtn, actualForm, true);
}

function toggleForm(
  btn: HTMLButtonElement,
  form: HTMLFormElement,
  action: boolean
) {
  if (!action) {
    form.style.display = "none";
    btn.style.display = "block";
  } else if (action) {
    form.style.display = "block";
    btn.style.display = "none";
  }
}

function setContainerItems(btn: HTMLButtonElement) {
  actualBtn = btn;
  actualContainer = btn.parentElement as HTMLDivElement;
  actualUl = actualContainer.querySelector("ul") as HTMLUListElement;
  actualForm = actualContainer.querySelector("form") as HTMLFormElement;
  actualTextInput = actualContainer.querySelector("input") as HTMLInputElement;
  actualValidation = actualContainer.querySelector(
    ".validation-msg"
  ) as HTMLSpanElement;
}

function createNewItem(e: Event) {
  e.preventDefault();
  if (actualTextInput.value.length === 0) {
    actualValidation.textContent = "Must be at least 1 character long";
    return;
  } else {
    actualValidation.textContent = "";
  }
  const itemContent = actualTextInput.value;
  const li = `
  <li class="item" draggable="true">
  <p>${itemContent}</p>
  <button>X</button>
  </li>`
  actualUl.insertAdjacentHTML("beforeend", li);

  const item = actualUl.lastElementChild as HTMLLIElement;
  const liBtn = item.querySelector("button") as HTMLButtonElement;
  handleItemDeletion(liBtn);
  actualTextInput.value = "";
}

function handleItemDeletion(btn: HTMLButtonElement) {
  btn.addEventListener("click", () => {
    const elToRemove = btn.parentElement as HTMLLIElement;
    elToRemove.remove();
  });
}

// add new Container
const addContainerBtn = document.querySelector('.add-container-btn') as HTMLButtonElement;
const addContainerForm = document.querySelector('.add-new-container form') as HTMLFormElement;
const addContainerFormInput = document.querySelector('.add-new-container input') as HTMLInputElement;
const validationNewContainer = document.querySelector('.add-new-container .validation-msg') as HTMLSpanElement;
const addContainerCloseBtn = document.querySelector('.close-add-list') as HTMLButtonElement;
const addNewContainerBtn = document.querySelector('.add-new-container') as HTMLButtonElement;
const containersList = document.querySelector('.main-content') as HTMLUListElement;

addContainerBtn.addEventListener('click', () => {
  toggleForm(addContainerBtn, addContainerForm, true);

});

addContainerCloseBtn.addEventListener('click', () => {
  toggleForm(addContainerBtn, addContainerForm, false);
});
