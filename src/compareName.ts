import { Product } from "./type";

export function compareName(product: Product, name: string) {
  return product.name === name;
}
