import { Product } from "./type";

export function comparePrice(product: Product, price: number) {
  return product.price === price;
}
