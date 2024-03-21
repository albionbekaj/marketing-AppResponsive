import RelatedProduct from "./RelatedProduct";

function ViewProduct() {
  return (
    <div className="flex flex-col items-center justify-center mt-12 xl:mt-24">
      <h1 className="text-xl xl:text-2xl font-bold">Related Products</h1>
      <div className="flex flex-row mx-auto flex-wrap sm:flex-nowrap sm:justify-between ">
        <RelatedProduct />
        <RelatedProduct />
        <RelatedProduct />
      </div>
    </div>
  );
}

export default ViewProduct;
