export interface IRestaurant {
    id: string;
    name: string;
    description: string;
    address: string;
    rating: number;
    phone: string;
    email: string;
    img: string;
    url: string;
}

export const defaultRestaurant: IRestaurant = {
    id: '',
    name: '',
    description: '',
    address: '',
    rating: 0,
    phone: '',
    email: '',
    img: '',
    url: ''
}

export interface IServerRes {
    message: string;
    success: boolean;
}

export const buttonProps = {
    backgroundColor: "#b72d2d",
    color: "white"
} 