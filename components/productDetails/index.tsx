import React from "react";
import { IProduct } from "../../lib/types/products";
import Breadcrumb from "../UI/Breadcrumb";
import ImageSection from "./ImageSection";

interface Props {
  product: IProduct;
  products: IProduct[];
}
const ProductDetails: React.FC<Props> = ({ product, products }) => {
  return (
    <div className="flex flex-col">
      <Breadcrumb />
      <div>
        <ImageSection imgArray={product.image} />
      </div>
    </div>
  );
};

export default ProductDetails;