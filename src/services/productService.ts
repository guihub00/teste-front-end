import type { Product, ProductsResponse } from '../types/product';
import fallback from '../data/produtos.fallback.json';

export const PRODUCTS_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';


const REQUEST_URL = import.meta.env.DEV ? '/api/produtos.json' : PRODUCTS_URL;

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(REQUEST_URL);
    if (!response.ok) throw new Error(`Erro ao buscar produtos (${response.status})`);
    const data: ProductsResponse = await response.json();
    if (!data.success) throw new Error('A API retornou uma resposta sem sucesso.');
    return data.products;
  } catch (error) {
    console.warn('Não foi possível buscar a API, usando a cópia local:', error);
    return (fallback as ProductsResponse).products;
  }
}