import { APIRequestContext, request } from '@playwright/test';
 
/**
* Base API client responsible for:
* - Initializing the Playwright API request context
* - Providing common HTTP methods
* 
* This keeps API configuration centralized and avoids duplication in tests.
*/
export class BaseApiClient {
  protected apiContext!: APIRequestContext;
 
  /**
   * Initializes the API request context.
   * Separated from constructor to allow async setup.
   */
  async init() {
    this.apiContext = await request.newContext({
      baseURL: 'https://fakestoreapi.com',
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
      },
    });
  }
 
  async get(endpoint: string) {
    return this.apiContext.get(endpoint);
  }
 
  async post(endpoint: string, body: unknown) {
    return this.apiContext.post(endpoint, { data: body });
  }
 
  async put(endpoint: string, body: unknown) {
    return this.apiContext.put(endpoint, { data: body });
  }
 
  async delete(endpoint: string) {
    return this.apiContext.delete(endpoint);
  }
}