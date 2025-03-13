function ProductCard({ProductImg, ProductName, ProductPrice}) {
  return (
    <div id="product_card">
      <div>
        <img id="product_img" src={ProductImg}/>
      </div>
      <div>
        <h3 id="product_name">{ProductName}</h3>
        <h3 id="product_price">€{ProductPrice}</h3>
      </div>
    </div>
  );
}
export default ProductCard
