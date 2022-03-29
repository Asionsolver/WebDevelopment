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

//let list = document.getElementById('list')

// let parent = list.parentElement  // show parent element
// console.log(parent)

// let children = list.children
// console.log(children)

// let previousChildren = list.previousSibling //return node element
// console.log(previousChildren)

// let previousChildren2 = list.previousElementSibling //return html element
// console.log(previousChildren2)

// console.log(list.nextElementSibling)

// let li = document.querySelector('li')

// console.log(li.nextElementSibling)

//console.log(list.firstChild) //return first child node that means text node

//console.log(list.firstElementChild) // return first element child node that means first html element
//console.log(list.lastElementChild) // return first element child node that means first html element

let listItem = document.getElementsByTagName('li')
// console.log(listItem)


// listItem.forEach is not a function
// listItem.forEach((li,index) => {
//     let text = li.innerHTML
//     li.innerHtml = `(${index+1}) ${text}`
    
// })

// 1st option

// let listItems = Array.from(listItem)
// console.log(listItems)

// let listItems = Array.prototype.slice.apply('li')
// let listItems = [...listItem]

// listItems.forEach((li,index) => {
//     let text = li.innerHTML
//     li.innerHtml = `(${index+1}) ${text}`
    
// })

