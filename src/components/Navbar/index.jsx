// import React from "react";
import splogo from "/SP_LOGO.png";
import { Notification } from "./Notification";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./../../pages/Dashboard";
import Login from "../../pages/Login";
import { LandingPage } from "../../pages/LandingPage/LandingPage";
import PageNotFound from "../../pages/PageNotFound";
// import { BrowserRouter, Route, Routes, Link } from "react-router-dom"; // Import necessary components from react-router-dom

const Navigation = () => {
	const navs_list = [
		{ id: 1, name: "Dashboard", path: "/dashboard" },
		{ id: 2, name: "Login", path: "/login" },
		{ id: 3, name: "Landing Page", path: "/landingPage" },
		{ id: 4, name: "Page Not Found", path: "/pagenotfound" },
	];

	return (
		<BrowserRouter>
			<nav className=" container border-b-2 border-slate-700 border-opacity-30 h-24 sticky">
				<div className="my-auto mx-auto flex justify-between items-center">
					<div className="flex ">
						<img src={splogo} className="logo" alt="SP logo" />
						<ul className="md:flex space-x-4 hidden">
							{navs_list.map((x) => (
								<li
									key={x.id}
									className="p-2 my-auto hover:bg-blue-400 hover:text-white">
									<Link to={x.path}>{x.name}</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="md:hidden">
						{/* Add a mobile menu button here */}
						<button>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
								/>
							</svg>
						</button>
					</div>
					<Notification />
				</div>
			</nav>
			{/* Define your routes outside of the navigation */}
			<Routes>
				{navs_list.map((x, id) => (
					<>
						<Route key={id} path="/Dashboard" element={<Dashboard />} />
						<Route key={id} path="/Login" element={<Login />} />
						<Route key={id} path="/LandingPage" element={<LandingPage />} />
						<Route key={id} path="/PageNotFound" element={<PageNotFound />} />
					</>
				))}
			</Routes>
		</BrowserRouter>
	);
};

export { Navigation };
