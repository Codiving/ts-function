import { compareName } from "./compareName";
import { comparePrice } from "./comparePrice";
import { Product } from "./type";

export function findProduct(
  products: Product[],
  targetPrice: number,
  targetName: string
): Product | undefined {
  return products.find(
    product =>
      comparePrice(product, targetPrice) && compareName(product, targetName)
  );
}
