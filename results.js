


const storedData = localStorage.getItem('shoppingData');


if (storedData) {
    const products = JSON.parse(storedData);

   
    const productList = document.getElementById('product-list');


    function createProductCard(product) {
      
        const productCard = document.createElement('div');
        productCard.classList.add('product-card'); 

      
        const productTitle = document.createElement('h2');
        productTitle.textContent = product.title;

        const productImage = document.createElement('img');
        productImage.src = product.thumbnail;
        productImage.alt = product.title;

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: ${product.price}`;

        const productRating = document.createElement('p');
        productRating.textContent = `Rating: ${product.rating}`;

        const productSource = document.createElement('p');
        productSource.textContent = `Source: ${product.source}`;

        const comparisonLink = document.createElement('a');
        comparisonLink.href = product.comparison_link;
        comparisonLink.textContent = 'Compare Here';
        comparisonLink.target = '_blank';

        const productLink = document.createElement('a');
        productLink.classList.add("sec_anc");
        productLink.href = product.product_link;
        productLink.textContent = 'View Product';
        productLink.target = '_blank';


       

     
        productCard.appendChild(productImage);
        productCard.appendChild(productTitle);
        productCard.appendChild(productPrice);
        productCard.appendChild(productRating);
        productCard.appendChild(productSource);
        productCard.appendChild(comparisonLink);
        productCard.appendChild(productLink);

      
        productList.appendChild(productCard);
    }

    products.forEach(createProductCard);
}
