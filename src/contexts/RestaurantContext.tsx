import { createContext, ReactNode, useEffect, useState } from 'react';
import { IRestaurant, IServerRes } from '../util/restaurant_util';

interface IRestaurantContext {
	restaurants: IRestaurant[];
	addRestaurant: (newRestaurant: IRestaurant) => IServerRes;
}
const defaultRestaurantContext: IRestaurantContext = {
	restaurants: [],
	addRestaurant: (newRestaurant) => {
		return { message: '', success: false };
	},
};
export const RestaurantContext = createContext<IRestaurantContext>(
	defaultRestaurantContext
);
export const RestaurantContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
	async function loadRestaurants() {
		let res = await fetch('http://localhost:3001/api/restaurants').then(
			(data) => data.json()
		);
		setRestaurants(res);
	}
	useEffect(() => {
		setTimeout(() => loadRestaurants(), 2000);
	}, []);
	async function addRestaurant(newRestaurant: IRestaurant) {
		let response = await fetch('http://localhost:3001/api/restaurants', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newRestaurant),
		});
		let res: IServerRes = await response.json();
		try {
			if (res.success) {
				loadRestaurants();
			}
			return res;
		} catch (e) {
			console.error(e);
			return {
				message: 'Invalid response',
				success: false,
			};
		}
	}
	return (
		<RestaurantContext.Provider value={{ restaurants, addRestaurant }}>
			{children}
		</RestaurantContext.Provider>
	);
};
