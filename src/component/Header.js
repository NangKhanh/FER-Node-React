import './Header.css'
// Tạo 1 component defaut là 'Header'
function Top() {
    return (
        <div className="top">
            <a href="#">SignIn</a>
            <a href="#">SignUp</a>
        </div>
    )
}

function Banner() {
    return (
        <div className="banner">
            <img src="#" alt="logo" />
        </div>
    )
}

function Menu() {
    return (
        <div className="menu">
            <a href="/">Home</a>
            <a href='/about'>About Us</a>
            <a href="/contact">Contact</a>
        </div>
    )
}

function Header() {
    return (
        <header>
            <Top />
            <Banner />
            <Menu />
        </header>
    )
}

export{Top, Menu, Banner};
export default Header;