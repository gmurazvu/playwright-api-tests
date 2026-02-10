import { test, expect } from '@playwright/test';
import { ProductsApi } from '../src/api/productsApi';
import { Product } from '../src/models/product';

test('User Story 2: Add three new unique products to the store', async () => {
  const productsApi = new ProductsApi();
  await productsApi.init();

  const products: Partial<Product>[] = [
    {
      title: 'Test Product A',
      price: 29.99,
      description: 'First test product',
      image: 'https://i.pravatar.cc',
      category: 'electronics'
    },
    {
      title: 'Test Product B',
      price: 39.99,
      description: 'Second test product',
      image: 'https://i.pravatar.cc',
      category: 'electronics'
    },
    {
      title: 'Test Product C',
      price: 49.99,
      description: 'Third test product',
      image: 'https://i.pravatar.cc',
      category: 'electronics'
    }
  ];

  const createdIds: number[] = [];

  for (const product of products) {
    const response = await productsApi.createProduct(product);
    expect(response.ok()).toBeTruthy();

    const createdProduct = await response.json();
    expect(createdProduct.id).toBeDefined();
    expect(createdProduct.title).toBe(product.title);

    createdIds.push(createdProduct.id);
  }

  // Assert IDs are unique
  expect(new Set(createdIds).size).toBe(products.length);
});

