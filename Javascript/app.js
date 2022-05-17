// let title = document.getElementById('title')  //select by id
// console.log(title)

// let paragraph =document.getElementsByClassName('lead') //select by class
// console.log(paragraph)

// let list = document.getElementsByTagName('li')  //select by tag
// console.log(list)

// let listItemOne = document.getElementsByName('list-item-one') //select by name
// console.log(listItemOne)

// let title = document.querySelector('#title') //select by id
// console.log(title)

// let paragraph = document.querySelector('.lead') //select by class
// console.log(paragraph)

// let paragraphs = document.querySelectorAll('.lead') //select by class
// console.log(paragraphs)

// let list =document.querySelectorAll('li') //select by tag
// console.log(list)

// let listItemOne =document.querySelectorAll('[name^="list-item-one"]') //select by name
// console.log(listItemOne)


// ! Get Elements Method vs Query Selector in Javascript


// let li1 = document.getElementsByTagName('li')  // ? use element node list
// console.log(li1)
// console.log(li1.constructor.name)

// let li2 = document.querySelectorAll('li')  // ? use node list [Element,Comment,Text]
// console.log(li2)
// console.log(li2.constructor.name)

// let ul =document.querySelector('ul')
// console.log(ul.children)
// console.log(ul.childNodes) // ? returns all child nodes

// ! Traversing the DOM Elements

// let list = document.getElementById('list')
// console.log(list)

// let parent = list.parentElement  // ? show parent element
// console.log(parent)

// let children = list.children
// console.log(children)

// let previousSibling = list.previousSibling // ? return node element.Not use
// console.log(previousSibling)
// let previousElementSiblings = list.previousElementSibling // ? return node element.Use
// console.log(previousElementSiblings)
// let nextElementSiblings = list.nextElementSibling // ? return node element.Use
// console.log(nextElementSiblings)

// let li = document.querySelector('li')

// console.log(li.nextElementSibling)

// console.log(list.firstChild) // ? return first child node that means text node

// console.log(list.firstElementChild) //  ? return first element child node that means first html element
// console.log(list.lastElementChild) // ?  return first element child node that means first html element


// ! How to Loop Throw HTML Collection in Javascript

// let listItem = document.getElementsByTagName('li'); // ? returns node list
// console.log(listItem)


// ? listItem.forEach is not a function. Because listItem is array like data structure not array. So we can't use forEach method.
// listItem.forEach((li,index) => {
//     let text = li.innerHTML;
//     li.innerHtml = `(${index+1}) ${text}`;
    
// })

// ? 1st option

// let listItems = Array.from(listItem) //convert node list to array
// console.log(listItems)

// listItems.forEach((li,index) => {
//     let text = li.innerHTML;
//     li.innerHTML = `(${index+1}) ${text}`;
    
// })


// ? 2nd option

// let listItems = Array.prototype.slice.apply(listItem) //apply is used to convert array like object to array

// listItems.forEach((li,index) => {
//     let text = li.innerHTML
//     li.innerHTML = `(${index+1}) ${text}`
    
// })

// ? 3rd option

// let listItems = [...listItem] //spread operator

// listItems.forEach((li,index) => {
//     let text = li.innerHTML  //returns text node
//     li.innerHTML = `(${index+1}) ${text}` //convert array to string
    
// })

// 4th option

// Method 1: Using the for/of loop: The for/of loop is used to loop over values of an iterable object. This includes arrays, strings, nodeLists, and HTMLCollections.
// The syntax of this loop is similar to the for/in loop. The object must be iterable to be used with this loop.

// Syntax:

// for (item of iterable) {
//   // code to be executed
// }


// regular for loop


// for (let i = 0; i < listItem.length; i++) {
//     console.log(listItem[i]);
// }

// ! Create DOM Elements in Javascript

// let li = document.createElement('li')
// li.className = 'list-group-item'
// console.log(li)
// console.dir(li)

// li.setAttribute('title','I am fifth list item')
// li.innerHTML = 'Five'

// let list = document.getElementById('list')
// list.appendChild(li)

let li = createElement('li','list-group-item','Five')
li.setAttribute('title','I am fifth list item')

let list = document.getElementById('list')
list.appendChild(li)

let paragraph = createElement('p', 'lead', 'সম্পূর্ণ বাংলা ভাষায় জাভাস্ক্রিপ্টের কমপ্লিট কোর্স। একদম বিগিনার থেকে অ্যাডভান্সড লেভেল সবার জন্য। এবার জাভাস্ক্রিপ্ট শিখবো নিজের মাতৃভাষায়। কোর্সটি এমন ভাবে সাজানো হয়েছে যেন প্রোগ্রামিং এর বিগিনার থেকে এক্সপার্ট সবাই এখান থেকে উপকৃত হতে পারে।');

let paragraph2 = createElement('p', 'lead', 'প্রথম কয়েকটা অধ্যায়ে প্রোগ্রামিং এর ফান্ডামেন্টালস নিয়ে আলোচনা করা হয়েছে। এর পরে জাভাস্ক্রিপ্টের গুরুত্বপূর্ণ তিনটি বিষয় অ্যারে, অবজেক্ট এবং ফাংশন নিয়ে আলোচনা করা হয়েছে। তারপরে ধীরে অ্যাডভান্সড কনসেপ্ট গুলো যেমন ফাংশনাল প্রোগ্রামিং, অবজেক্ট অরিয়েন্টেড প্রোগ্রামিং, স্কোপ, ক্লোজার, প্রোটোটাইপ, অ্যাসিংক্রোনাস প্রোগ্রামিং, ডম ম্যানিপুলেশন এর মত বিষয় গুলো নিয়ে আলোচনা করা হয়েছে। এর সাথে সাথে জাভাস্ক্রিপ্টের বহুবিধ ব্যবহার নিয়েও আলোচনা করার সাথে প্রাক্টিক্যাল করে দেখানো হয়েছে।');

let div = createElement('div');
append(div,[paragraph,paragraph2]);
// console.log(div);
document.getElementsByClassName('container')[0].appendChild(div);

function createElement(tagName, className, innerHTML) {
    let tag = document.createElement(tagName);
    tag.className = className || '';
    tag.innerHTML = innerHTML || '';
    return tag;
}


function append(parent, children) {
    children.forEach(child => parent.appendChild(child));
}