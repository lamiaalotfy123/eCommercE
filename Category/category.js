let category = new URL(window.location).searchParams.get("category");
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    let catItems = new Array();

    catItems = json.filter((cat) => {
      return cat.category === category;
    });
    // console.log(catItems);
    catItems.forEach((product) => {
      // Card
      let itemCard = document.createElement("div");
      // itemCard.classList.add("category-item");
      
      // Card Children
      //hidden id
      let ID = document.createElement("span");
      ID.textContent = product.id;
      ID.style.display = "none";
      itemCard.appendChild(ID);
      //img
      let imgContainer = document.createElement("div");
      imgContainer.classList.add("img-container");
      let itemImg = document.createElement("img");
      itemImg.src = `${product.image}`;
      itemImg.classList.add('item-img-style');
      // itemImg.setAttribute("width", "200px"); // styleing in css file
      // itemImg.setAttribute("height", "300px");
      imgContainer.appendChild(itemImg);
      itemCard.appendChild(imgContainer);
      //title
      let itemTitle = document.createElement("h2");
      itemTitle.classList.add('item-title-style');
      itemTitle.textContent = `${product.title}`;
      itemCard.appendChild(itemTitle);
      //price
      let itemRate = document.createElement("p");
      let itemPrice = document.createElement("p");
      itemPrice.classList.add('items-price-style');
      itemPrice.innerHTML = `<b>Price: </b>${product.price}   <i class="fa-solid fa-sack-dollar"></i>`;
      // console.log(product.price[0]);
      itemCard.appendChild(itemPrice);
      //rating
      let starsRating = new String();
      for (k = 0; k < 5; k++) {
        if (k + 1 > product.rating.rate && product.rating.rate > k) {
          starsRating += `<i class="fa-solid fa-star-half-stroke"></i>`;
        } else if (product.rating.rate > k) {
          starsRating += `<i class="fa-solid fa-star"></i>`;
        } else {
          starsRating += `<i class="fa-regular fa-star"></i>`;
        }
      }
      itemRate.classList.add('items-rateing-style');
      itemRate.innerHTML = `<b>Rating :${product.rating.rate}</b> <small>(${product.rating.count})</small> ${starsRating}`;
      itemCard.appendChild(itemRate);
      //button
      let itemButton = document.createElement("button");
      itemButton.textContent = "See Product";
      itemButton.classList.add('See-Product-btn-style');  // to style in css file
      itemButton.setAttribute("onclick", "goToProduct(event)");
      itemCard.appendChild(itemButton);

      document.querySelector("#container").appendChild(itemCard);
    });
  });

function goToProduct(e) {
  let Product = e.target.parentElement.firstChild.textContent;
  window.open(`../Product/Product.html?id=${Product}`, "_self");
}
