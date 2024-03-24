import { ReactNode } from "react"
import { AxiosPromise } from "axios"

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
export interface InitialStateType extends Omit<Product, "id"> { }

export interface RouterTypes {
    Home: string,
    Add: string,
    UpdateItem: string,
    Detail: string,
    Product: string,
    Basket: string,
    ProductDetail: string
    Login: string
    Register: string
    User: string
    UserEdit: string
}
interface ProductParams {
    price: number;
    discountPrice: number;
}
export interface Users {
    id?: number
    name?: string
    email: string
    phone: string
    password: string
    image?: string
    address?: string
}
export interface ContextProps {
    isAdmin: boolean
    users: Users[]
    showPassword: boolean
    confirmPassword: string
    loggedInUser: Users | null
    setUsers: React.Dispatch<React.SetStateAction<Users[]>>;
    showDelete: boolean
    deleteUser: Users | null
    closeModal: () => void
    openDelModal: (userId:any) => void
    setShowDelete: (value: boolean) => void
    setConfirmPassword: (value: string) => void
    setShowPassword: (value: boolean) => void


}



export interface BasketType extends Omit<Product, "create_at">, PriceDetails { }

export interface ProductState extends PriceDetails {
    basket: BasketType[];
}
interface PriceDetails {
    amount: number;
    totalAmount: number;
    totalPrice: number;
    totalDiscountPrice: number;
}

export interface AddProduct {
    (newProduct: InitialStateType): AxiosPromise<Product>
}
export interface GetProduct {
    (params?: Required<ProductParams> | undefined): AxiosPromise<Product[]>;
}
export interface DeleteProduct {
    (productId: number): AxiosPromise<void>
}
export interface EditProduct {
    (productId: number,
        updatedProduct: Partial<InitialStateType>
    ): AxiosPromise<Product>
}
export interface GetSingleProduct {
    (productId: number): AxiosPromise<Product>
}