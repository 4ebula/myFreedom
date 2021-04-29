window.onload = () => {
  document.querySelector('.container').addEventListener('click', (event) => {
    //console.log(event.target.classList);
    switch (true) {
      case event.target.classList.contains('btn_delete'): event.target.closest('li').remove();
        break;
      case event.target.matches('.btn_edit'): editContent(event.target);
        break;
      case event.target.classList.contains('new'): editNewItem(event.target);
        break;
      case event.target.matches('[type="checkbox"]'): hanleCheckbox(event.target);
        break;
      case event.target.className === 'list-name': changeListName(event.target);
        break;
      case event.target.classList.contains('btn_add-list'): addNewList(event.target);
        break;
    }
  });
};

function addNewList(btn) { 
  console.log('GOT');
  const curList = btn.closest('.new-list');
  const listsContainer = curList.closest('.container');
  listsContainer.insertBefore(createNewList(), curList);
  return;
}

function createNewList() {
  console.log('HERE');
  const section = document.createElement('section');
  const listHead = document.createElement('div');
  const listBody = document.createElement('div');
  const listName = document.createElement('label');
  const listNameInput = document.createElement('input');
  const curList = document.createElement('ul');
  const checedList = document.createElement('ul');
  const addItem = document.createElement('li');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const button = document.createElement('button');
  listName.textContent = 'Add list name';
  listName.className = 'list-name';
  listNameInput.setAttribute('type', 'text');
  listHead.appendChild(listName);
  listHead.appendChild(listNameInput);
  listHead.className = 'list__head nameless';
  label.textContent = 'Add new item';
  label.className = 'new';
  input.setAttribute('type', 'text');
  button.innerHTML = '&plus;';
  button.className = 'btn btn_add';
  addItem.appendChild(label);
  addItem.appendChild(input);
  addItem.appendChild(button);
  addItem.className = 'list__item_add';
  curList.appendChild(addItem);
  curList.className = 'list__body_current';
  checedList.className = 'list__body_checked';
  listBody.appendChild(curList);
  listBody.appendChild(checedList);
  listBody.className = 'list__body';
  section.appendChild(listHead);
  section.appendChild(listBody);
  section.className = 'list';
  return section;
}

function changeListName(label) {
  const curValue = label.textContent;
  const container = label.closest('div');
  const input = container.querySelector('input');
  container.classList.add('edit-mode');
  setTimeout(() => { input.focus() }, 50);
  input.setSelectionRange(0, 0);
  input.addEventListener('blur', inputListener);

  function inputListener() {
    if (input.value.length !== 0 && input.value !== curValue) {
      label.textContent = input.value;
      container.classList.remove('nameless');
    }
    input.value = '';
    container.classList.remove('edit-mode');
    input.removeEventListener('blur', inputListener);
  }
  return;
}

function editContent(btn) {
  const container = btn.closest('.list__item');
  const content = container.querySelector('.list__item_content');
  const input = content.querySelector('input');
  const label = content.querySelector('label');
  if (content.classList.contains('edit-mode')) {
    label.textContent = input.value;
  }
  else {
    setTimeout(() => { input.focus() }, 50);
    input.setSelectionRange(input.value.length, input.value.length);
  }
  btn.classList.toggle('btn_active');
  content.classList.toggle('edit-mode');
  return;
}

function editNewItem(label) {
  const container = label.closest('li');
  const input = container.querySelector('input');
  const button = container.querySelector('button');
  container.classList.add('edit-mode');
  setTimeout(() => { input.focus() }, 50);
  input.setSelectionRange(0, 0);
  button.addEventListener('click', inputListener);
  input.addEventListener('blur', inputListener);

  function inputListener() {
    if (input.value.length !== 0 && checkUniqueness(label, input.value)) {
      container.closest('ul').insertBefore(createNewItem(input.value), container);
    }
    input.value = '';
    container.classList.remove('edit-mode');
    button.removeEventListener('click', inputListener);
    input.removeEventListener('blur', inputListener);
  }
  return;
}

function checkUniqueness(label, value) {
  let uniqueness = true;
  label.closest('ul').querySelectorAll('.list__item').forEach((e) => {
    let curValue = e.querySelector('.list__item_content').querySelector('input').value;
    if (curValue.toLowerCase() === value.toLowerCase()) uniqueness = false;
  });
  return uniqueness;
}

function hanleCheckbox(box) {
  const item = box.closest('li');
  const list = item.closest('.list__body');
  if (!box.checked) {
    const unchecedList = list.querySelector('.list__body_current');
    unchecedList.insertBefore(item, unchecedList.querySelector('.list__item_add'));
  }
  else {
    list.querySelector('.list__body_checked').appendChild(item);
  }
}

function createNewItem(value) {
  const container = document.createElement('li');
  const itemCheckBox = document.createElement('div');
  const checkBox = document.createElement('input');
  const itemContent = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const itemButtons = document.createElement('div');
  const deleteButton = document.createElement('button');
  const editButton = document.createElement('button');
  checkBox.setAttribute('type', 'checkbox');
  itemCheckBox.appendChild(checkBox);
  itemCheckBox.className = 'list__item_check';
  label.textContent = value;
  input.setAttribute('type', 'text');
  input.value = value;
  itemContent.appendChild(label);
  itemContent.appendChild(input);
  itemContent.className = 'list__item_content';
  editButton.textContent = 'I';
  editButton.className = 'btn btn_edit';
  deleteButton.innerHTML = '&times;';
  deleteButton.className = 'btn btn_delete';
  itemButtons.appendChild(editButton);
  itemButtons.appendChild(deleteButton);
  itemButtons.className = 'list__item_buttons';
  container.appendChild(itemCheckBox);
  container.appendChild(itemContent);
  container.appendChild(itemButtons);
  container.className = 'list__item';
  return container;
}
