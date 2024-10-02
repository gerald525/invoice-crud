import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "../pages/home";
import DetailPage from "../pages/detail";
import NotFound from "../pages/notFound";

const Router = () => {
	const routerlist = createBrowserRouter([
		{
			path: "/",
			element: <HomePage />
		},
		{
			path: "/detail/:id",
			element: <DetailPage />,
			errorElement: <NotFound />
		},
		{
			path: "*",   // Catch-all route for undefined paths
			element: <NotFound />,
		},
	])
	return (
		<RouterProvider router={routerlist} />
	)
}

export default Router;