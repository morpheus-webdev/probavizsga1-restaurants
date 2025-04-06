import { IRestaurant } from '../util/restaurant_util';

export const RestaurantComp = (props: { restaurant: IRestaurant }) => {
	const r = props.restaurant;
	return (
		<div className='restaurant-card'>
			<h1>{r.name}</h1>
			<span>{r.description}</span>
			<span>{r.rating}</span>
			<span>{r.address}</span>
			<span>{r.email}</span>
			<span>{r.phone}</span>
			<span>{r.url}</span>
			<img src={r.img} />
		</div>
	);
};
