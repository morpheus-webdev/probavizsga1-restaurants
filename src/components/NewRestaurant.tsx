import { Button, Dialog, DialogTitle, TextField } from '@mui/material';
import {
	defaultRestaurant,
	IRestaurant,
	IServerRes,
} from '../util/restaurant_util';
import { useContext, useState } from 'react';
import { RestaurantContext } from '../contexts/RestaurantContext';

export const NewRestaurant = ({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => void;
}) => {
	const { addRestaurant } = useContext(RestaurantContext);
	const [newRestaurant, setNewRestaurant] =
		useState<IRestaurant>(defaultRestaurant);

	async function handleUpload() {
		if (
			newRestaurant.name &&
			newRestaurant.description &&
			newRestaurant.address &&
			newRestaurant.rating > 0 &&
			newRestaurant.rating < 10 &&
			newRestaurant.email &&
			newRestaurant.phone &&
			newRestaurant.img &&
			newRestaurant.url
		) {
			let res: IServerRes = await addRestaurant(newRestaurant);
			if (res.success) {
				onClose();
			}
			console.log(res);
		} else {
			console.error('invalid input');
			console.log(newRestaurant);
		}
	}
	return (
		<div>
			<Dialog onClose={onClose} open={open}>
				<div id='new-restaurant-dialog'>
					<DialogTitle>Add new restaurant</DialogTitle>
					<TextField
						placeholder='Name...'
						onChange={(e) =>
							setNewRestaurant({ ...newRestaurant, name: e.target.value })
						}
					/>
					<TextField
						placeholder='Description...'
						onChange={(e) =>
							setNewRestaurant({
								...newRestaurant,
								description: e.target.value,
							})
						}
					/>
					<TextField
						placeholder='Address...'
						onChange={(e) =>
							setNewRestaurant({ ...newRestaurant, address: e.target.value })
						}
					/>
					<TextField
						placeholder='Rating...'
						type='number'
						inputProps={{ step: 0.1 }}
						onChange={(e) =>
							setNewRestaurant({
								...newRestaurant,
								rating: parseFloat(e.target.value),
							})
						}
					/>
					<TextField
						placeholder='Phone number'
						onChange={(e) =>
							setNewRestaurant({ ...newRestaurant, phone: e.target.value })
						}
					/>
					<TextField
						placeholder='E-mail'
						onChange={(e) =>
							setNewRestaurant({ ...newRestaurant, email: e.target.value })
						}
					/>
					<TextField
						placeholder='Image...'
						onChange={(e) =>
							setNewRestaurant({ ...newRestaurant, img: e.target.value })
						}
					/>
					<TextField
						placeholder='Webpage...'
						onChange={(e) =>
							setNewRestaurant({ ...newRestaurant, url: e.target.value })
						}
					/>
					<Button onClick={handleUpload}>Upload</Button>
				</div>
			</Dialog>
		</div>
	);
};
