// get the add Btn, input field , no items message, item list, the number of items that are in the list, and svg images for the buttons
const addBtn = document.getElementById('addBtn');
const input = document.getElementById('itemText');
let notItemsSec = document.getElementById('noItems');
let itemList = document.getElementById('itemList');
let numberOfItems = 0;
let completedSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
</svg>`;
let editSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>`;
let deleteSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>`;

// when the addbtn is clicked add a item
addBtn.addEventListener('click', () => {
    // get the input text
    let inputField = document.querySelector('.inputField');
    let newItem = document.getElementById('itemText').value;
    // check if the input is a empty string
    if (newItem){
        // if it is not a empty string add item to list, remove the red glow if there is one, add the grey border is there is none, and set the input field to nothing.
        addToList(newItem);
        inputField.classList.remove('redGlow');
        inputField.classList.add('greyBorder');
        document.getElementById('itemText').value = '';
    } else{
        // give the input field a red glow and remove the grey border.
        inputField.classList.remove('greyBorder');
        inputField.classList.add('redGlow');
    }
});

// if the input field is entered with the key enter add item to list.
input.addEventListener('keyup', (event) => {
    // get the input text
    let inputField = document.querySelector('.inputField');
    let newItem = document.getElementById('itemText').value;
    // check to see if the key event was a enter (13 is the code for the enter key).
    if (event.keyCode === 13) {
        // check if the input is a empty string
        if (newItem){
            // if it is not a empty string add item to list, remove the red glow if there is one, add the grey border is there is none, and set the input field to nothing.
            addToList(newItem);
            inputField.classList.remove('redGlow');
            inputField.classList.add('greyBorder');
            document.getElementById('itemText').value = '';
        } else{
            // give the input field a red glow and remove the grey border.
            inputField.classList.remove('greyBorder');
            inputField.classList.add('redGlow');
        }
    }
});


// the function that adds the item to the list.
function addToList(newItem) {
    // a new item is add to your list, number of items up one
    numberOfItems++;
    // get the variable for the list
    let list = document.getElementById('list');
    // create you new li 
    let li = document.createElement('li');
    // set the class for you new li
    li.setAttribute('class','row greyBorder')
    // reveal hide the no items message and reveal the item list
    notItemsSec.classList.add('hide');
    itemList.classList.remove('hide');
    // create the p tag for the input text to go into
    let itemText = document.createElement('p');
    // set the inner text of the p to the input text
    itemText.innerText = newItem;
    // give the p tag its class
    itemText.setAttribute('class','col-9');
    // create the buttons and put their images in them
    let completedBtn = document.createElement('button');
    let editBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');
    //put the images inside the buttons
    completedBtn.innerHTML = completedSvg;
    editBtn.innerHTML = editSvg;
    deleteBtn.innerHTML = deleteSvg;
    // give them their classes
    completedBtn.setAttribute('class', 'col-1 btn');
    editBtn.setAttribute('class', 'col-1 btn');
    deleteBtn.setAttribute('class', 'col-1 btn deleteBtn');
    // add the event listeners to the buttons
    completedBtn.addEventListener('click', completedItem);
    editBtn.addEventListener('click', editItem);
    deleteBtn.addEventListener('click', deleteItem);
    // now append the itemText, completedBtn, editBtn, deleteBtn in that order
    li.appendChild(itemText);
    li.appendChild(completedBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    // now insert the li before the first li (this will make the latest item is on top)
    list.insertBefore(li, list.childNodes[0]);
}

// now to make what happens when something is deleted
function deleteItem() {
    // you have lost a item, number of items in your list down one
    numberOfItems--;
    // get your variables for deleting things. also the no items message so that if you lose all you items it will tell you so.
    let notItemsSec = document.getElementById('noItems');
    let itemList = document.getElementById('itemList');
    let item = this.parentNode;
    let itemParent = item.parentNode;
    // remove the item for the list.
    itemParent.removeChild(item);
    // if you have lost all of you items show to the dragon show that you have nothing left to lose.
    if (numberOfItems == 0){
        notItemsSec.classList.remove('hide');
        itemList.classList.add('hide');
    }
}

// time to edit you item. 
function editItem() {
    // you have removed a item for you list to look at it, number of items in your list down one.
    numberOfItems--;
    // get the your variables.
    // this stands for the exact button you clicked on
    let item = this.parentNode;
    let itemParent = item.parentNode;
    let itemText = item.children[0].innerText;
    let newItem = document.getElementById('itemText');
    // put you item into the input field to look at it
    newItem.value = itemText;
    // remove the item from the list.
    itemParent.removeChild(item);
}

// you have complete you item and still want to look at it from your list
function completedItem() {
    // get you variables
    let item = this.parentNode;
    let completedBtn = this;
    let editBtn = this.nextSibling;
    let deleteBtn = editBtn.nextSibling;
    // if you have not completed you item this will happen when you click complete
    if (item.className == 'row greyBorder'){
        // it will turn green 
        item.classList.remove('greyBorder');
        item.classList.add('completed');
        completedBtn.classList.remove('btn');
        completedBtn.classList.add('completedBtns');
        editBtn.classList.remove('btn');
        editBtn.classList.add('completedBtns');
        deleteBtn.classList.remove('btn');
        deleteBtn.classList.add('completedBtns');
    } else if (item.className == 'row completed'){
        // if you have mistakenly pressed to button to early you can return it back to looking like a uncompleted item
        // it will turn it back to white
        item.classList.add('greyBorder');
        item.classList.remove('completed');
        completedBtn.classList.add('btn');
        completedBtn.classList.remove('completedBtns');
        editBtn.classList.add('btn');
        editBtn.classList.remove('completedBtns');
        deleteBtn.classList.add('btn');
        deleteBtn.classList.remove('completedBtns');
    }
}
