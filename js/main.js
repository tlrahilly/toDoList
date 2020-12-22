let addBtn = document.getElementById('addBtn');

function addItem(event) {
    let list = document.getElementById('list');
    let newItem = document.getElementById('itemText').value;
    console.log(newItem);
}

addBtn.addEventListener('click', addItem());