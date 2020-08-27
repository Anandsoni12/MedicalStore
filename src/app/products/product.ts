/* Defines the product entity */
export interface Product {
  id: number;
  productName: string;
  productCode: string;
  usage: string[];
  manufactureDate: string;
  expiryDate: string;
  price: number;
  quantity: string;
  imageUrl: string;
}

