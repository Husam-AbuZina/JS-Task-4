async function getDetails() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const myId = urlParams.get('id')
        console.log(urlParams);
        const response = await axios.get(`https://dummyjson.com/products?id=${myId}`);
        const data = response.data;
        const phone = data.products[`${myId}`];
        console.log(data);
        document.querySelector(".title").textContent = phone.title;
        document.querySelector(".brand").textContent = phone.brand;
        document.querySelector(".description").textContent = phone.description;
        document.querySelector(".price").textContent = phone.price;
        document.querySelector(".rating").textContent = phone.rating;
        document.querySelector(".img0").src = phone.images[0];
        document.querySelector(".img1").src = phone.images[1];
        document.querySelector(".img2").src = phone.images[2];
        document.querySelector(".img3").src = phone.images[3];
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getDetails();





















// const productDetails = document.querySelector('.product');
// const detailsBtn = document.querySelector('.details-btn');

// const ShowDetails =  () => {
//     axios.get('https://dummyjson.com/products').then(response => {
//         console.log(response);
//         const products = response.data.products;

//         const details = products.map((product) => {
//             return `
//               <div class="product-item">
//                 <h2>${product.title}</h2>
//                 <h2>${product.brand}</h2>
//                 <img src="${product.images[0]}" alt="${product.title}"/>
//                 <img src="${product.images[1]}" alt="${product.title}"/>
//                 <img src="${product.images[2]}" alt="${product.title}"/>
//                 <p> ${product.price} $ </p>
//               </div>
//               `;
//         }).join('');

//         apiData.innerHTML = details;
//     }).catch(error => {
//         console.error('Error fetching data:', error);
//     });
// };

// detailsBtn.addEventListener('click', ShowDetails);