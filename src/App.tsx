import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom'
import Layout from './components/Layout'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="program" element={<h1>program</h1>} />
			<Route path="about" element={<h1>about</h1>} />
			<Route path="contact" element={<h1>contact</h1>} />
		</Route>
	)
)

function App() {
	return <RouterProvider router={router} />
}

export default App
