function createCartItem(product) {
  const productName = document.createElement('h2');
  productName.className = 'cart-product-name';
  productName.innerHTML = product.nome;

  const productPrice = document.createElement('h3');
  productPrice.className = 'cart-product-price';
  productPrice.innerHTML = `R$: ${product.valor.toFixed(2)}`;

  const productText = document.createElement('div');
  productText.className = 'cart-text';
  productText.appendChild(productName);
  productText.appendChild(productPrice);

  const productImg = document.createElement('div');
  productImg.className = 'cart-img';
  productImg.style.backgroundImage = `url('${product.imagens[0].imagem}')`;

  const card = document.createElement('div');
  card.className = 'cart-item';
  card.appendChild(productImg);
  card.appendChild(productText);

  return card;
}

let total = 0;
for (let i = 0; i < 3; i++) {
  document.getElementById('cart').appendChild(createCartItem(produtos[i]));
  total += produtos[i].valor;
}

document.getElementById('total').innerHTML = `R$: ${total.toFixed(2)}`;
