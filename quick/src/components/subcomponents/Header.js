import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/logo.png';
import noProfile from '../../assets/no-profile.png';
import '../../styles/header.css';
import { routes } from '../../routes/Routes';
import { UserContext } from '../../context/UserContext';
import AuthService from '../../services/AuthService';

const Header = () => {
    const { user, setUser } = useContext(UserContext);
    const history = useHistory();
    const logout = () => {
        AuthService.logout().then(_ => {
            setUser(null);
            history.push('/');
        });
    }
    if (user === undefined || user == null) {
        return <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow px-5">
                <Link className="navbar-brand" to={routes.home.path_with_params}>{<img height="50" src={logo} />}</Link>
                <div></div>

            </nav>
        </div>
    }

    return <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow px-5">
            {user.type_user == "administrador" ?
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                : ''}
            <Link className="navbar-brand" to={routes.home.path_with_params}>{<img height="50" src={logo} />}</Link>
            <div className="collapse navbar-collapse justify-content-md-center" id="navbarSupportedContent">
                {user.type_user == "administrador" ?
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={routes.home.path_with_params}>Campeones</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to={routes.categories.path_with_params}>Resumen</Link>
                        </li>
                    </ul>
                    : ''}
            </div>
            <div className="d-none d-md-flex justify-content-end ">
                <div className="text-right colorMain text-capitalize">
                    <strong className="w-100 text-right d-flex justify-content-end">{user.name} {user.lastname}</strong>
                    <span>{user.type_user} |  <span className="hover" onClick={logout}>Salir</span></span>
                </div>
                <div className="roundUserImage">
                    <img src={noProfile} />
                </div>
            </div>
        </nav>
    </div>
}

export default Header;