let id = new URL(window.location).searchParams.get("id");
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    let product = json.filter((cat) => {
      return cat.id == id;
    });
    // console.log(product);
    let itemCard = document.createElement("div");
    // itemCard.classList.add("category-item");
    // Card Children
    //hidden id
    let ID = document.createElement("span");
    ID.setAttribute("id", "itemID");
    ID.textContent = product[0].id;
    ID.style.display = "none";
    itemCard.appendChild(ID);
    //img
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    let itemImg = document.createElement("img");
    itemImg.src = `${product[0].image}`;
    itemImg.style = "textAlign:center;"
    itemImg.classList.add('item-img-style');
    // itemImg.setAttribute("width", "200px"); // to style in css file
    // itemImg.setAttribute("height", "300px");
    imgContainer.appendChild(itemImg);
    itemCard.appendChild(imgContainer);
    //title
    let itemTitle = document.createElement("h2");
    itemTitle.classList.add('item-title-style');
    itemTitle.textContent = `${product[0].title}`;
    itemCard.appendChild(itemTitle);
    //description
    let itemDescription = document.createElement("p");
    itemDescription.classList.add('para-description');
    itemDescription.innerHTML = `<i>${product[0].description}</i>`;
    itemCard.appendChild(itemDescription);
    //price
    let itemPrice = document.createElement("p");
    itemPrice.classList.add('items-price-style');
    itemPrice.innerHTML = `<b>Price: </b>${product[0].price}  <i class="fa-solid fa-sack-dollar"></i>`;
    itemCard.appendChild(itemPrice);
    //rating
    let itemRate = document.createElement("p");
    let starsRating = new String();
    for (k = 0; k < 5; k++) {
      if (k + 1 > product[0].rating.rate && product[0].rating.rate > k) {
        starsRating += `<i class="fa-solid fa-star-half-stroke"></i>`;
      }
      else if (product[0].rating.rate > k) {
        starsRating += `<i class="fa-solid fa-star"></i>`;
      } else {
        starsRating += `<i class="fa-regular fa-star"></i>`;
      }
    }
    itemRate.classList.add('items-rateing-style');
    itemRate.innerHTML = `<b>Rating :${product[0].rating.rate}</b> <small>(${product[0].rating.count})</small> ${starsRating}`;
    itemCard.appendChild(itemRate);
    //button
    let itemButton = document.createElement("button");
    itemButton.innerHTML = `Add to Cart <i class="fa fa-shopping-cart" aria-hidden="true"></i>`;
    itemButton.classList.add('add-to-cart-btn-style'); // to style in css file
    itemButton.setAttribute("onclick", "addToCart()");
    itemCard.appendChild(itemButton);

    document.querySelector("#container").appendChild(itemCard);
  });
function addToCart(){
  let id = document.querySelector("#itemID").textContent;
  let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  
  if (cartItems.includes(id)) {
    alert("You already have this item added in your cart");
    return;
  } 
  cartItems.push(id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  alert("Your item has been added to your cart\nGo to cart to confirm purchase");
}