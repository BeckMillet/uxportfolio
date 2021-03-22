import { Link, useLocation } from "react-router-dom";

export default function Nav() {

    const location = useLocation();
    const buttons = [
      { path: '/home', label: 'Home', icon: '#icon-home'},
      { path: '/research', label: 'UX Research', icon: '#icon-presentation'},
      { path: '/dev', label: 'Development', icon: '#icon-laptop'},
      { path: '/about', label: 'About Me', icon: '#icon-person-male'},
    ]

    return (
        <div className='nav'>
            <div className='navtext navtitle'>Portfolio</div>
          {buttons.map((button) => {
            const className = button.path == location.pathname ? 'navbuttons active' : 'navbuttons';
            return (
                <Link to={button.path} className='navtext'>
                    <div className={className}>
                        <svg className="navIcon"><use xlinkHref={button.icon}></use></svg>
                        {button.label}
                    </div>
                </Link>
            );
          })}
        </div>
    )
}