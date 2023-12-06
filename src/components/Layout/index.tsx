import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
      // todo : add footer component
		</>
	)
}

export default Layout
