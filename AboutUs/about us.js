fetch('https://fakestoreapi.com/products')
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    // Take only the first 8 products
    const lastEightProducts = completedata.slice(6, 14);

    let data1 = '';
    lastEightProducts.forEach((values) => {
      data1 += `<div class="card">
        <h1 class="title">${values.title}</h1>
        <img src= ${values.image} alt="Image" class="images">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
      </div>`;
    });

    document.getElementById("cards").innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });
