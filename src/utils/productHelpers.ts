import { Product } from '../models/product';

/**
 * Filters products to return only those in a specific category and with at least one rating.
 */
export function filterInStockByCategory(products: Product[], category: string): Product[] {
  return products.filter(
    (product) =>
      product.category === category &&
      product.rating &&
      product.rating.count > 0
  );
}

/**
 * Finds the cheapest product in a list.
 */
export function findCheapestProduct(products: Product[]): Product {
  if (products.length === 0) {
    throw new Error('Cannot find cheapest product in an empty list');
  }
  return products.reduce((cheapest, current) =>
    current.price < cheapest.price ? current : cheapest
  );
}
