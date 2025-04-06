import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { buttonProps } from '../util/restaurant_util';

export const Home = () => {
	const navigate = useNavigate();
	function goToRestaurants() {
		navigate('/restaurants');
	}
	return (
		<div id='home-page'>
			<h1>Welcome to the Restaurant voting site!</h1>
			<Button
				onClick={goToRestaurants}
				sx={{
					fontSize: '3rem',
					lineHeight: '3rem',
					padding: '2rem',
					borderRadius: '10px',
					...buttonProps,
				}}
				variant='contained'>
				Continue to the site...
			</Button>
		</div>
	);
};
