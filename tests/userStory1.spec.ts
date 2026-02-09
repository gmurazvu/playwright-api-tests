import { test, expect } from '@playwright/test';
import { ProductsApi } from '../src/api/productsApi';
import { filterInStockByCategory, findCheapestProduct } from '../src/utils/productHelpers';
import { Product } from '../src/models/product';
 
test('User Story 1: Select cheapest in-stock electronics product', async () => {
  const productsApi = new ProductsApi();
  await productsApi.init();
 
  const response = await productsApi.getAllProducts();
  expect(response.ok()).toBeTruthy();
 
  const products: Product[] = await response.json();
 
  // Filter only in-stock electronics products using helper
  const electronicsInStock = filterInStockByCategory(products, 'electronics');
 
  expect(electronicsInStock.length).toBeGreaterThan(0);
 
  // Find cheapest using helper
  const cheapestProduct = findCheapestProduct(electronicsInStock);
 
  // Assertions validate business rules
  expect(cheapestProduct.category).toBe('electronics');
  expect(cheapestProduct.price).toBeGreaterThan(0);
});
