import { Link, NavLink } from 'react-router-dom'
import mainLogo from '../../../assets/main-logo.webp'

const links = [
	{
		title: 'صفحه اصلی',
		route: '/',
	},
	{
		title: 'برنامه',
		route: '/program',
	},
	{
		title: 'درباره من',
		route: '/about',
	},
	{
		title: 'تماس با ما',
		route: '/contact',
	},
]

const Navbar = () => {
	return (
		<div className="sticky top-0 shadow-sm">
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start gap-5">
          <Link to="/" className="h-20 w-20">
            <img
              src={mainLogo}
              alt="main logo"
              className="w-full h-full block object-contain"
            />
          </Link>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 gap-2 shadow bg-base-100 rounded-box w-52"
            >
              {links.map(item => (
                <NavLink to={item.route} key={item.route} className='hover:text-primary'>
                  {item.title}
                </NavLink>
              ))}
            </ul>
          </div>
          <ul className="menu menu-horizontal px-1 hidden lg:flex gap-5 text-lg">
            {links.map(item => (
              <NavLink to={item.route} key={item.route} className='hover:text-primary'>
                {item.title}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary text-white">ورود / عضویت</a>
        </div>
      </div>
    </div>
	)
}

export default Navbar
