// let fetch = new XMLHttpRequest()

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    // console.log(json);
    let categories = [
      "men's clothing",
      "jewelery",
      "electronics",
      "women's clothing",
    ];
    let catItems = new Array();
    for (i = 0; i < categories.length; i++) {
      catItems.push(
        json.filter((cat) => {
          return cat.category === categories[i];
        })
      );
    }
    var i = 0;
    // console.log(catItems);
    catItems.forEach((item) => {
      let catergoryDiv = document.createElement('div')
      catergoryDiv.classList.add("category-container");
      let categoryName = document.createElement("h1");
      categoryName.classList.add('h1-style'); // to style in css file
      categoryName.innerHTML = `${categories[i].toLocaleUpperCase()}  <i class="fa-solid fa-arrow-turn-down"></i>`;
      let container = document.createElement('div')
      container.classList.add("category-items");
      catergoryDiv.appendChild(categoryName);
      catergoryDiv.appendChild(container);
      for(j=0;j<3;j++) {
        
        // Card
        let itemCard = document.createElement('div');
        itemCard.classList.add('item-card-style'); // to style in css file
        // Card Children
        let imgContainer = document.createElement('div')
        imgContainer.classList.add('img-container');
        let itemImg = document.createElement('img');
        itemImg.classList.add('item-img-style');
        itemImg.src = `${item[j].image}`;
        imgContainer.appendChild(itemImg);
        itemCard.appendChild(imgContainer);
        
        let itemTitle = document.createElement('h2');
        itemTitle.classList.add('item-title-style') // to style in css file
        itemTitle.style = "height:30%"
        itemTitle.textContent = `${item[j].title}`;
        itemCard.appendChild(itemTitle);
        
        let itemPrice = document.createElement('p');
        itemPrice.innerHTML = `<b>Price:</b>    ${item[j].price} <i class="fa-solid fa-sack-dollar"></i>`;
        itemPrice.classList.add('items-price-style') // to style in css file
        itemCard.appendChild(itemPrice);
        
        let itemRate = document.createElement('p')
        let starsRating = new String
        for(k=0;k<5;k++) 
        {
          if (k + 1 > item[j].rating.rate && item[j].rating.rate > k) {
            starsRating += `<i class="fa-solid fa-star-half-stroke"></i>`;
          }
          else if(item[j].rating.rate > k){
            starsRating +=`<i class="fa-solid fa-star"></i>`
          }
          else
          {
           starsRating +=`<i class="fa-regular fa-star"></i>`
          }
        }
        itemRate.innerHTML = `<b>Rating :  ${item[j].rating.rate}</b> <small>(${item[j].rating.count})</small>${starsRating}`;
        itemRate.classList.add('items-rateing-style'); // to style in css file
        itemCard.appendChild(itemRate);
        
        container.appendChild(itemCard);
        
      };
      let seeMore = document.createElement('button')
      seeMore.setAttribute("onclick", "goToCategory(event)");
      seeMore.classList.add('btn-style'); // to style in css file
      seeMore.innerHTML = `See More ${categories[i]}`;
      catergoryDiv.appendChild(seeMore);
      document.querySelector("#container").appendChild(catergoryDiv);
      i++
    });
  });


  function goToCategory(e){
    let category = e.target.parentElement.firstChild.textContent
    window.open(`./Category/Category.html?category=${category.toLowerCase()}`,'_self')
  }