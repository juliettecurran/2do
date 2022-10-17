import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "./components/Common/Header/Navigation";
import Test from "./components/Test";
import Footer from "./components/Common/Footer/Footer";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false
		}
	}
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<div className='grid place-items-center h-screen'>
					<div className=' h-3/4 w-3/4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-5 rounded-2xl'>
						<header className='col-span-12 row-span-1'>
							<Navigation />
						</header>
						<hr className='h-1 border-white border-opacity-70 w-2/3' />
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/test' element={<Test />} />
						</Routes>
						<hr className='h-1 border-white border-opacity-70 w-2/3' />
						<footer className='col-span-12 row-span-1'>
							<Footer />
						</footer>
					</div>
				</div>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
