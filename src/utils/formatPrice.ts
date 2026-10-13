export function formatPrice(value: number): string {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}


export function getOldPrice(price: number): number {
  return price * (30.9 / 28.9);
}
