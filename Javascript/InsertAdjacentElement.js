// let li = document.createElement('li');
// li.className = 'list-group-item';
// li.innerHTML = 'Four';


// list.append(li); // append() method adds a node as the last child of a node. Not Recommended.


let li = createElement('li', 'list-group-item', 'Four');
li.setAttribute('title','I am fourth item');
let list = document.getElementById('list');
list.appendChild(li); // appendChild() method adds a child node to the end of the list of children of a specified parent node. Returns the appended node. Recommended.




let paragraph = createElement('p', 'lead', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos.');

let paragraph2 = createElement('p', 'lead', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ');


let div = createElement('div');

append(div, [paragraph, paragraph2]);
// console.log(div);
// insertAdjacentElement() method inserts a new element adjacent to an existing element in the DOM tree.

// list.insertAdjacentElement('beforebegin', div); 
// list.insertAdjacentElement('afterbegin', div); 
// list.insertAdjacentElement('beforeend', div); 
list.insertAdjacentElement('afterend', div);

// document.getElementsByClassName('container')[0].appendChild(div);

// let container = document.getElementById('container-body');
// container.appendChild(div);

function createElement(tagName, className, innerHTML) {
    let tag = document.createElement(tagName);
    tag.className = className || '';
    tag.innerHTML = innerHTML || '';
    return tag;
}

function append(parent, children) {
    children.forEach(child => parent.appendChild(child));
}



