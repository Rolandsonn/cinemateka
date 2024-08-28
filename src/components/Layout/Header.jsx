import { Link } from "react-router-dom";
import logo from "../../assets/img/cinematica.png";
import { useSelector } from "react-redux";
import { RiAccountBoxFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  const isAuth = useSelector((state) => state.user.token);
  const email = useSelector((state) => state.user.email);
  return (
    <header className="header">
      <Link to={"/"}>
        <img width={80} src={logo} alt="logo" />
      </Link>

      <nav className="menu">
        <Link to={"/films"}>Фильмы</Link>
        <Link to={"/series"}>Сериалы</Link>
        <Link to={"/cartoon"}>Мультфильмы</Link>
        <Link to={"/search"}>Поиск</Link>

        {isAuth ? (
          <Link to={"/account"}>
            <CgProfile />
            {email}
          </Link>
        ) : (
          <Link className="menu__login" to={"/login"}>
            <RiAccountBoxFill />
            Войти
          </Link>
        )}
        {isAuth && <Link to={"favorites"}>Смотреть позже</Link>}
      </nav>
    </header>
  );
};

export default Header;
