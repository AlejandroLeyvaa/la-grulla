export const home = (data) => {
  let template;

  template = `
<div class="home">
  <article class="card">
    <div class="food-container">
      <figure class="image-container">
        <picture>
          <img src="./assets/images/combo_completo.jpg" alt="">
        </picture>
      </figure>
    </div>
    <div class="food-description">
      <p class="food-name">Paquete Completo</p>
      <p class="food-packContent">Arroz, 2 Guisos, 1 Rollo, Té 1/2 Litro</p>
    </div>
    <span class="line"></span>
    <div class="food-price">
      <a class="price" href="https://wa.me/5216671019556">$100.00</a>
      <a class="button order" href="https://wa.me/5216671019556">Ordenar</a>
    </div>
  </article>
</div>
  `;

  return template;
};
