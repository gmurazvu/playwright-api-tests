import { test, expect } from '@playwright/test';
import { ProductsApi } from '../src/api/productsApi';
import { Product } from '../src/models/product';

test('User Story 2: Add a new product to the store', async () => {
  const productsApi = new ProductsApi();
  await productsApi.init();

  const newProduct: Partial<Product> = {
    title: 'Test Product',
    price: 29.99,
    description: 'A test product description',
    image: 'https://i.pravatar.cc',
    category: 'electronics'
  };

  const response = await productsApi.createProduct(newProduct);
  expect(response.ok()).toBeTruthy();

  const createdProduct = await response.json();
  expect(createdProduct.id).toBeDefined();
  expect(createdProduct.title).toBe(newProduct.title);
  expect(createdProduct.price).toBe(newProduct.price);
});
