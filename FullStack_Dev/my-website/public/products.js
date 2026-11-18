fetch("http://localhost:3000/products")
    .then(function(response){
        return response.json();
    })
    .then(function(products){
        let list = document.getElementById("product-list");

        products.forEach(function(product){
            list.innerHTML += `
                <p>${product.id} - ${product.name}</p>
            `;
        });
    })