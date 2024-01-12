import { ReactNode } from "react"
import {AxiosPromise} from "axios"

export interface LayoutProps {
    children: ReactNode
}
export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPrice: number;
    rating: number;
    stock: number;
    category: string;
    image: string;
    create_at: number;
    color: string;
  }
export interface InitialStateType extends Omit<Product, "id"> {}
export interface RouterTypes {
    Home: string,
    Add: string,
    UpdateItem: string,
    Detail: string,
    Product: string,
    Basket: string,
    ProductDetail: string
}
interface ProductParams {
    price: number;
    discountPrice: number;
  }

export interface AddProduct {
    (addProduct: InitialStateType): AxiosPromise<Product>
}
export interface GetProduct{
    (params?: Required<ProductParams> | undefined): AxiosPromise<Product[]>;
}