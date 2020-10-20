console.log("Pls work!")

// Read
const menu = document.querySelector("#menu")
const menuHeader = menu.querySelector("h1")

const cards = document.querySelectorAll(".card")

// Create

// Strategy 1: Hand crafted, artisnal DOM creation
// step 1. create the element
const cardHeader = document.createElement("h2")
// step 2. assign any attributes (style it up!)
cardHeader.id = "card-header"
cardHeader.textContent = "Look at those cute animals"
// step 3. add it to the page (slap it on DOM)
// find a parent element
const container = document.querySelector(".container")
// add to the parent (append/prepend) (appendChild)
container.prepend(cardHeader)

// Strategy 2: brute force!
// Step 1: find the parent element
const animalList = document.querySelector("#animal-list")
// Step 2: set the innerHTML to the new content
animalList.innerHTML += `
<li class="card">
  <div class="image">
    <img src="https://i1.wp.com/www.redpandanetwork.org/wp-content/uploads/2018/10/Photo-1-for-Give-page.png?fit=584%2C584&amp;ssl=1" alt="Red Panda">
  </div>
  <div class="content">
    <h4>Red Panda</h4>
    <p class="description">not actually a panda</p>
  </div>
  <button class="button donate-button" data-action="donate">
    $<span class="donation-count">0</span> Donated
  </button>
</li>
`

// Hybrid
// step 1. create the outer element using createElement (& assign necessary attributes)
const outerLi = document.createElement("li")
outerLi.className = "card"
// step 2. use innerHTML to create all of its children
outerLi.innerHTML = `
<div class="image">
  <img src="https://i1.wp.com/www.redpandanetwork.org/wp-content/uploads/2018/10/Photo-1-for-Give-page.png?fit=584%2C584&amp;ssl=1" alt="Red Panda">
</div>
<div class="content">
  <h4>Red Panda</h4>
  <p class="description">not actually a panda</p>
</div>
<button class="button donate-button" data-action="donate">
  $<span class="donation-count">0</span> Donated
</button>
`
// step 3. slap it on the DOM!
animalList.append(outerLi)

// Update
// // change the text inside the element
// menuHeader.textContent = "Welcome to zkpr."
// // change the inline styles
// menuHeader.style.color = "red"
// // change the ID
// menuHeader.id = "menu-header"
// // change the classes as a string
// menuHeader.className = "reddish"
// // change the classes using classList
// menuHeader.classList.add("primary")
// menuHeader.classList.remove("reddish")
// menuHeader.classList.toggle("hidden")

// Delete
// menuHeader.remove()
// cards[0].remove()


