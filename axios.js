const getBtn = document.querySelector('.get-btn');
const apiData = document.querySelector('.apiData');

const getData = () => {
    axios.get('https://dummyjson.com/products').then(response => {
        console.log(response);
        const products = response.data.products;

        const result = products.map((product) => {
            const detailsPageUrl = `product.html?id=${product.id}`;

            return `
              <div class="product-item">
                <h2>${product.title}</h2>
                <img src="${product.thumbnail}" alt="${product.title}"/>
                <p> ${product.price} $ </p>
                <a href="product.html?id=${product.id - 1}"><button class="details-btn">Details</button></a>
              </div>
              `;
        }).join('');

        apiData.innerHTML = result;
    }).catch(error => {
        console.error('Error fetching data:', error);
    });
};

getBtn.addEventListener('click', getData);

getData(); // If you want to show the data without pressing on the button