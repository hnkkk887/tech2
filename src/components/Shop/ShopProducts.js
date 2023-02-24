import { ProductGridListWrapper } from "../../components/ProductThumb";

const ShopProducts = ({ products, layout }) => {
  return (
    <div className="shop-products">
      <ProductGridListWrapper
        products={products}
        bottomSpace="space-mb--50"
        layout={layout}
      />
    </div>
  );
};

export default ShopProducts;
