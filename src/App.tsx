import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Outlet,
} from 'react-router-dom'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Outlet />}>
			<Route path="program" element={<h1>program</h1>} />
			<Route path="about" element={<h1>about</h1>} />
			<Route path="contact" element={<h1>contact</h1>} />
		</Route>
	)
)

function App() {
	return <RouterProvider router={router} />
}

export default App;
