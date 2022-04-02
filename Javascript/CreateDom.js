// list.append(li); // append() method adds a node as the last child of a node. Not Recommended.
// li.setAttribute('title','I am fourth item'); // setAttribute() method sets the value of an attribute of the specified element.


// let li = document.createElement('li'); // createElement() method creates an element with the specified name.

// li.className = 'list-group-item'; // className property sets or returns the value of the class attribute of the specified element.

// li.innerHTML = 'Four'; // innerHTML property sets or returns the HTML content (inner HTML) of the specified element.

let li = createElement('li', 'list-group-item', 'Four');
let list = document.getElementById('list');

list.appendChild(li); // appendChild() method adds a child node to the end of the list of children of a specified parent node. Returns the appended node. Recommended.

let paragraph = createElement('p', 'lead', 'সম্পূর্ণ বাংলা ভাষায় জাভাস্ক্রিপ্টের কমপ্লিট কোর্স। একদম বিগিনার থেকে অ্যাডভান্সড লেভেল সবার জন্য। এবার জাভাস্ক্রিপ্ট শিখবো নিজের মাতৃভাষায়। কোর্সটি এমন ভাবে সাজানো হয়েছে যেন প্রোগ্রামিং এর বিগিনার থেকে এক্সপার্ট সবাই এখান থেকে উপকৃত হতে পারে।');

let paragraph2 = createElement('p', 'lead', 'প্রথম কয়েকটা অধ্যায়ে প্রোগ্রামিং এর ফান্ডামেন্টালস নিয়ে আলোচনা করা হয়েছে। এর পরে জাভাস্ক্রিপ্টের গুরুত্বপূর্ণ তিনটি বিষয় অ্যারে, অবজেক্ট এবং ফাংশন নিয়ে আলোচনা করা হয়েছে। তারপরে ধীরে অ্যাডভান্সড কনসেপ্ট গুলো যেমন ফাংশনাল প্রোগ্রামিং, অবজেক্ট অরিয়েন্টেড প্রোগ্রামিং, স্কোপ, ক্লোজার, প্রোটোটাইপ, অ্যাসিংক্রোনাস প্রোগ্রামিং, ডম ম্যানিপুলেশন এর মত বিষয় গুলো নিয়ে আলোচনা করা হয়েছে। এর সাথে সাথে জাভাস্ক্রিপ্টের বহুবিধ ব্যবহার নিয়েও আলোচনা করার সাথে প্রাক্টিক্যাল করে দেখানো হয়েছে।');

let div = createElement('div');
append(div,[paragraph,paragraph2]);
// console.log(div);

let container = document.getElementById('topic');
// console.log(container);
container.appendChild(div);

function createElement(tagName, className, innerHTML) {
    let tag = document.createElement(tagName);
    tag.className = className || '';
    tag.innerHTML = innerHTML || '';
    return tag;
}

function append(parent, children) {
    children.forEach(child => parent.appendChild(child));
}








