// const fetchData = async () => {
//   const url = "https://fakestoreapi.com/products";
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("error while fetching data", error);
//   }
// };

// fetchData();

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    displayProducts(data);
    console.log(data);
  })
  .catch((error) => {
    console.error("error while fetching data", error);
  });

function displayProducts(data) {
  const productsContainer = document.getElementById("product-container");
  data.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
        <img src=${product.image} alt="" class="img" />
        <p>${product.title}</p>
        <p>${product.price}</p>
          <p>${product.description}</p>
        <span>${product.rating.count}</span>
        `;
    // const image = document.createElement("img");
    // image.classList.add("img");
    // image.src = product.image;
    // productDiv.appendChild(image);
    // const text = document.createElement("p");
    // text.textContent = product.title;
    // productDiv.appendChild(text);
    productsContainer.appendChild(productDiv);
  });
}
