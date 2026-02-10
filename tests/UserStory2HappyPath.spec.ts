import { test, expect } from '@playwright/test';
import { Product } from '../src/models/product';
import { ProductsApi } from '../src/api/productsApi';

test('User Story 2: Create a product (happy path)', async () => {
  const api = new ProductsApi();
  await api.init();

  const newProduct: Partial<Product> = {
    title: `Test Product ${Date.now()}`, // helps avoid accidental duplicates
    price: 29.99,
    description: 'A test product description',
    image: 'https://i.pravatar.cc',
    category: 'electronics',
  };

  const response = await api.createProduct(newProduct);
  expect(response.ok()).toBeTruthy();

  const created = await response.json();
  expect(created.id).toBeDefined();
  expect(created.title).toBe(newProduct.title);
  expect(created.price).toBe(newProduct.price);
});
