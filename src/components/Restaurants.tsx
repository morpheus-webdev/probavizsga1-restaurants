import { useContext, useState } from 'react';
import { RestaurantContext } from '../contexts/RestaurantContext';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { NewRestaurant } from './NewRestaurant';
import { RestaurantComp } from './RestaurantComp';
import { ArrowBack } from '@mui/icons-material';
import { buttonProps } from '../util/restaurant_util';

export const Restaurants = () => {
	const { restaurants } = useContext(RestaurantContext);
	const [open, setOpen] = useState<boolean>(false);
	let navigate = useNavigate();
	function onClose() {
		setOpen(false);
	}
	function goToNewRestaurants() {
		setOpen(true);
	}
	return (
		<div id='restaurants'>
			<NewRestaurant open={open} onClose={onClose} />
			<div id='left-restaurants'>
				{restaurants.map((r, i) => {
					return <RestaurantComp key={`restaurant-${i}`} restaurant={r} />;
				})}
			</div>
			<div id='right-restaurants'>
				<Button
					sx={buttonProps}
					onClick={() => {
						navigate('/');
					}}
					variant='outlined'>
					<ArrowBack />
				</Button>
				<Button
					onClick={goToNewRestaurants}
					variant='outlined'
					sx={buttonProps}>
					+
				</Button>
			</div>
		</div>
	);
};
