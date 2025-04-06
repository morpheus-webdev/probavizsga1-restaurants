import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { RestaurantContextProvider } from './contexts/RestaurantContext.tsx';

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<RestaurantContextProvider>
			<App />
		</RestaurantContextProvider>
	</BrowserRouter>
);
