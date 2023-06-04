import { useContext, useEffect, useState } from "react";
import { HiMenuAlt1, HiOutlineUserCircle, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from '../../../assets/others/zestful-bites-logo.svg'
import cartImg from '../../../assets/others/cartImg.png'
import ActiveLink from "../../../providers/ActiveLink";
import { AuthContext } from "../../../providers/AuthProvider";


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [menuActive, setMenuActive] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = (event) => {
            const topHeight = window.scrollY
            if (topHeight > 70) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`fixed top-0 w-full z-50 transition-[top] text-white ${scrolled ? 'md:top-0 bg-black bg-opacity-75 shadow-xl' : 'md:top-5 bg-transparent'}`}>
            <div className="container">
                <nav className='flex justify-around items-center py-2'>
                    {
                        menuActive ? <button onClick={() => setMenuActive(false)} className='text-3xl mr-3 lg:hidden'><HiX /></button> : <button onClick={() => setMenuActive(true)} className='text-3xl mr-3 lg:hidden'><HiMenuAlt1 /></button>
                    }
                    <Link to='/' className='mr-auto'>
                        <div className='flex gap-2'>
                            <img className='w-28' src={logo} alt="" />
                        </div>
                    </Link>
                    <ul className={`
                        p-5 
                        absolute 
                        lg:static 
                        bg-black 
                        lg:bg-transparent 
                        bg-opacity-50 
                        top-[5rem] 
                        min-h-[calc(100vh-9rem)] 
                        lg:min-h-[auto] 
                        leading-10 
                        lg:leading-3 
                        rounded-md 
                        lg:flex 
                        justify-center 
                        items-center 
                        gap-7
                        transition-[left] 
                        ${menuActive ? 'left-0' : 'left-[-100%]'}
                        `}>
                        <li className='font-semibold hover:text-primary border-y-2 border-transparent shrink-0'><ActiveLink to={"/"}>HOME</ActiveLink></li>
                        <li className='font-semibold hover:text-primary border-y-2 border-transparent shrink-0'><ActiveLink to={"/contact"}>CONTACT US</ActiveLink></li>
                        <li className='font-semibold hover:text-primary border-y-2 border-transparent shrink-0'><ActiveLink to={"/menu"}>OUR MENU</ActiveLink></li>
                        <li className='font-semibold hover:text-primary border-y-2 border-transparent shrink-0'><ActiveLink to={"/shop/all"}>OUR SHOP</ActiveLink></li>
                    </ul>
                    <div className='flex justify-end items-center gap-5 '>
                        <button className="btn btn-ghost relative">
                            <Link to={"/"}>
                                <img className="w-10 h-10" src={cartImg} alt="" />
                                <span className="indicator-item badge badge-secondary absolute top-0 right-0 shadow-xl">0</span>
                            </Link>
                        </button>

                        {
                            user ?
                                user.photoURL ?
                                    <img src={user?.photoURL} title={user.displayName} className='w-11 h-11 rounded-full' alt="" />
                                    : <h3 className=' py-3' title={user.displayName}><HiOutlineUserCircle className='text-4xl' /></h3>
                                : ''
                        }
                        {
                            user ?
                                <button onClick={logOut} className='btn btn-ghost text-white'>Log-Out</button>
                                : <Link to='/loginRegister/login'><button className='btn btn-ghost text-white'>Log-In</button></Link>
                        }
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;