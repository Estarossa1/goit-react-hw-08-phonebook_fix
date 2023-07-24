import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import AuthNav from "components/AuthNav/AuthNav";
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Header = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <header style= {{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            borderBottom: '1px solid black',           
        }}>
            <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
    }

    export default Header;
