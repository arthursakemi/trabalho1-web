function createProductCard(product) {
  const productName = document.createElement('h2');
  productName.className = 'product-name';
  productName.innerHTML = product.nome;

  const productPrice = document.createElement('h3');
  productPrice.className = 'product-price';
  productPrice.innerHTML = `R$: ${product.valor.toFixed(2)}`;

  const productInfo = document.createElement('div');
  productInfo.className = 'product-info';
  productInfo.appendChild(productName);
  productInfo.appendChild(productPrice);

  const productImg = document.createElement('div');
  productImg.className = 'product-img';
  productImg.style.backgroundImage = `url('${product.imagens[0].imagem}')`;

  const card = document.createElement('div');
  card.className = 'product-card';
  card.appendChild(productImg);
  card.appendChild(productInfo);

  return card;
}

produtos.forEach((produto) => {
  console.log(produto.imagens[0].imagem);
  document.getElementById('card-list').appendChild(createProductCard(produto));
});
