class Dropdown {
  
  constructor (values, cb) {
    this.element;
    this._list = Dropdown.createList(values);
    this._list.addEventListener('click', (event) => {
      if (event.target.matches('li')) {
        this.element = event.target.textContent;
        cb(this.element);
        this.deleteList(this.element).classList.remove('active');
      }
    });
  }
  static createList(values) {
    const div = document.createElement('div');
    const ul = document.createElement('ul');
    const p = document.createElement('p');
    
    div.className = 'dropdown active'
    p.textContent = 'List';
    div.append(p);
    values.forEach((e) => {
      const li = document.createElement('li');
      li.textContent = e;
      ul.append(li);
    });
    div.append(ul);
    document.querySelector('.container').append(div);
    return div;
  }

  deleteList(value) {
    this._list.innerHTML = `<p>${value}</p>`;
    return this._list;
  }
}

const dropdown = new Dropdown (
  ['element 1', 'element 2', 'element 3'],
  (selectedValue) => { console.log(selectedValue) },
);

const dropdown2 = new Dropdown (
  ['element 12', 'Click', 'element 23'],
  (selectedValue) => { console.log(selectedValue) },
);