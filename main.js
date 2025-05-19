// Função para carregar os produtos da API
function loadProducts() {
    fetch('http://localhost:5000/products')
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('product-list');

            // Limpar lista antes de adicionar novos produtos
            productList.innerHTML = '';

            // Adicionar cada produto à lista
            data.forEach(product => {
                const li = document.createElement('li');
                li.textContent = `${product.name} - Quantidade: ${product.quantity} - Preço: R$ ${product.price.toFixed(2)}`;
                productList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os produtos:', error);
        });
}

// Carregar produtos quando a página for carregada
window.onload = loadProducts;
