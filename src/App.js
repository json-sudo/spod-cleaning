import React, { useState, createContext } from 'react'
import { Switch, Route } from 'react-router-dom'

import DrawerComponent from './components/drawer/drawer.component'
import Footer from './components/footer/footer.component'
import Header from './components/header/header.component'

import AboutUsPage from './pages/about-us/about-us.page'
import ChemicalSalesPage from './pages/chemical-sales/chemical-sales.page'
import CleaningServicesPage from './pages/cleaning-services/cleaning-services.page'
import ContactUsPage from './pages/contact-us/contact-us.page'
import EquipmentRentalsPage from './pages/equipment-rentals/equipment-rentals.page'
import Error404Page from './pages/page-not-found/error-404.page'
import HomePage from './pages/home/home.page'
import ServicesPage from './pages/services/services.page'

import './App.css'

export const AppContext = createContext({})

function App() {
	const [ drawerClickHandler, handleDrawerClick ] = useState(false)

	const store = {
		drawerClickHandler: { get: drawerClickHandler, set: handleDrawerClick }
	}

	return (
		<AppContext.Provider value={store}>
			<div className="App">
				<Header />

				<DrawerComponent />

				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/about-us" component={AboutUsPage} />
					<Route path="/contact-us" component={ContactUsPage} />
					<Route path="/services" component={ServicesPage} />
					<Route path="/chemical-sales" component={ChemicalSalesPage} />
					<Route path="/equipment-rentals" component={EquipmentRentalsPage} />
					<Route path="/cleaning-services" component={CleaningServicesPage} />
					<Route component={Error404Page} />
				</Switch>

				<Footer />
			</div>
		</AppContext.Provider>
	)
}

export default App;
