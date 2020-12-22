// get global variables aka the things that need to be clicked on.
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
    // get variables to use for later
    let newItem = document.getElementById('itemText').value;
    let inputField = document.querySelector('.inputField');

    // check to see if the input field has something in it
    if (newItem === ''){
        // if the input field is empty then remove the grey border and add a red glow to it.
        inputField.classList.remove('greyBorder');
        inputField.classList.add('redGlow');
        return;
    } else {
        // if it does has something in it then remove the red glow if there is one and the grey border back
        inputField.classList.remove('redGlow');
        inputField.classList.add('greyBorder');
        // add the new item to the list
        addItem(newItem);
        // clear the input field
        document.getElementById('itemText').value = '';
    }
});

function addItem(newItem) {
    // get the variables needed
    let notItemsSec = document.getElementById('noItems');
    let itemList = document.getElementById('itemList');
    // hide the opening screen message and remove the hide class from the item list.
    notItemsSec.classList.add('hide');
    itemList.classList.remove('hide');
    // create the new li for the item list
    createLi(newItem);
}

function createLi(newItem){
    //get the list and create the li element to be placed inside of the list
    let list = document.getElementById('list');
    let li = document.createElement('li');
    /* i find this one a great shortcut originally i was going to creat a whole bunch of create elements then append them together then I realize I can just inject the html structure into it with a innerhtml lol*/
    li.innerHTML = `<div class="row">
    <div class="row col-10">
        <input type="checkbox" name="doneBtn" id="doneBtn" class="col-1">
        <p class="col-11">${newItem}</p>
    </div>
    <div class="row col-2">
        <button id="editBtn" class="col-6"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
          </svg></button>
        <button id="deleteBtn" class="col-6"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg></button>
    </div>
</div>`;
    // put the li into the list
    list.appendChild(li);
}

