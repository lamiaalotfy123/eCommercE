let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
if (!localStorage.getItem("cartItems")) {
  let message = document.createElement("h1");
  message.innerHTML = `You Have no Items in your Cart<br >Go Add some items we're right here waiting for you ;)`;
  message.style.textAlign = "center";
  message.style.paddingTop = "250px";
  message.style.height = "300px";
  document.querySelector("#container").appendChild(message);
} else {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      let cartProducts = new Array();
      // cartProducts.push(json.filter((item) => {
      //   return item.id == cartItems[index];
      // },index=0));

      for (i = 0; i < cartItems.length; i++) {
        json.forEach((item) => {
          if (cartItems[i] == item.id) {
            cartProducts.push(item);
            return; //for performance measures
          }
        });
      }
      console.log(cartProducts);
      let total = 0;
      cartProducts.forEach((product) => {
        // Card
        let itemCard = document.createElement("div");
        // itemCard.classList.add("category-item");
        // Card Children
        //img
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("img-container");
        let itemImg = document.createElement("img");
        itemImg.src = `${product.image}`;
        itemImg.classList.add("item-img-style");
        imgContainer.appendChild(itemImg);

        let detailsContainer = document.createElement("div");
        //title
        let itemTitle = document.createElement("h2");
        itemTitle.classList.add("item-title-style");
        itemTitle.textContent = `${product.title}`;
        detailsContainer.appendChild(itemTitle);
        //price
        let itemRate = document.createElement("p");
        let itemPrice = document.createElement("p");
        itemPrice.classList.add("items-price-style");
        itemPrice.innerHTML = `<b>Price: </b>${product.price}   <i class="fa-solid fa-sack-dollar"></i>`;

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
        itemRate.classList.add("items-rateing-style");
        itemRate.innerHTML = `<b>Rating :${product.rating.rate}</b> <small>(${product.rating.count})</small> ${starsRating}`;
        itemCard.style = "display:flex; flex-direction:row;";
        detailsContainer.style = "flex-basis:65%;";
        imgContainer.style = "flex-basis:30%;";

        detailsContainer.appendChild(itemRate);
        detailsContainer.appendChild(itemPrice);
        itemCard.appendChild(detailsContainer);
        itemCard.appendChild(imgContainer);
        document.querySelector("#container").appendChild(itemCard);
        total += product.price;
      });
      //Total Price
      let totalPrice = document.createElement("div");
      totalPrice.innerHTML = `<b>Your Toatal: </b><span style="color:red">${total.toFixed(2)}</span> only`;
      totalPrice.style.fontFamily = "Rubik";
      totalPrice.style.fontSize = "3rem";
      totalPrice.style.display = "block";
      //buy btn
      let porceedBtn = document.createElement("Button");
      porceedBtn.classList.add("btn-style");
      porceedBtn.textContent = "Porceed to Buy";
      porceedBtn.style = "width:30%";
      porceedBtn.setAttribute("onclick", "buyItems()");

      document.querySelector("#container").appendChild(totalPrice);
      document.querySelector("#container").appendChild(porceedBtn);
    });
}
function buyItems(){
    alert(
      "Your Order is now being prepaired for Shipping\n Thank you for shopping with us."
    );
    localStorage.removeItem("cartItems");
    location.reload();

}