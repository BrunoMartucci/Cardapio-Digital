// Simulando uma lista de produtos (você pode substituir isso pelo seu banco de dados real)
let products = [];

const productForm = document.getElementById('add-product-form');
const productList = document.getElementById('product-list');

// Função para adicionar um novo produto
function addProduct(event) {
    event.preventDefault();
    
    const productName = document.getElementById('product-name').value;
    const productPrice = parseFloat(document.getElementById('product-price').value);
    const productDescription = document.getElementById('product-description').value;
    const productImage = document.getElementById('product-image').value;
    
    // Verificar se todos os campos estão preenchidos
    if (!productName || !productPrice || !productDescription || !productImage) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // Adicionar o novo produto à lista
    products.push({
        name: productName,
        price: productPrice,
        description: productDescription,
        image: productImage
    });
    
    // Limpar o formulário
    productForm.reset();
    
    // Atualizar a tabela de produtos
    renderProductList();
}

// Função para renderizar a tabela de produtos
function renderProductList() {
    productList.innerHTML = '';
    
    products.forEach(product => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>${product.description}</td>
            <td><img src="${product.image}" alt="${product.name}" style="width: 100px;"></td>
            <td class="actions">
                <button onclick="editProduct('${product.name}')">Editar</button>
                <button onclick="deleteProduct('${product.name}')">Excluir</button>
            </td>
        `;
        
        productList.appendChild(row);
    });
}

// Função para editar um produto
function editProduct(name) {
    // Aqui você pode implementar a lógica para editar um produto
    alert(`Editar produto: ${name}`);
}

// Função para excluir um produto
function deleteProduct(name) {
    // Aqui você pode implementar a lógica para excluir um produto
    const index = products.findIndex(product => product.name === name);
    if (index !== -1) {
        products.splice(index, 1);
        renderProductList();
    }
}

// Event listener para o formulário de adicionar produto
productForm.addEventListener('submit', addProduct);

// Renderizar a tabela de produtos inicialmente
renderProductList();
