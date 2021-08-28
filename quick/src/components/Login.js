import React, { useContext, useState } from 'react';
import styles from '../styles/login.module.css';
import bgImage from '../assets/bg.jpg';
import logoImage from '../assets/logo.png';
import colSvg from '../assets/colombia.svg';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { validatorEmail, validatorMinLength, validatorOnlyNumbers, validatorRequired } from '../utils/Validators';
import AuthService from '../services/AuthService';
import { UserContext } from '../context/UserContext';
import { ModalContext } from '../context/ModalContext';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import AvInput from 'availity-reactstrap-validation/lib/AvInput';
import AvGroup from 'availity-reactstrap-validation/lib/AvGroup';
import AvFeedback from 'availity-reactstrap-validation/lib/AvFeedback';
import { Link, useHistory } from 'react-router-dom';
import { routes } from '../routes/Routes';

const Login = () => {

    const { user, setUser } = useContext(UserContext);
    const { modal, setModal } = useContext(ModalContext);
    const [visibilityPassword, setVisibilityPassword] = useState(false);
    const history = useHistory();

    const _login = (_, values) => {
        AuthService.login(values.email, values.password).then(user => {
            setUser(user);
            history.push(routes.home.path_with_params);
        }).catch(_ => setModal({
            title: "Error al iniciar sesión",
            content: "Por favor verifique sus credenciales"
        }));
    }
    return <div className={styles.main} style={{ backgroundImage: `url("${bgImage}")` }}>
        <div className={`card ${styles.card}`}>
            <div className="card-body">
                <img src={logoImage} />
                <div className="d-flex justify-content-between">
                    <h5>Ingreso</h5>
                    <div className="d-flex align-items-center">
                        <img width="30" src={colSvg} />
                        <span>&nbsp;Español</span>
                    </div>
                </div>
                <div className="my-2">
                    Bienvenido, por favor ingrese su cuenta de SmartControl
                </div>
                <AvForm onValidSubmit={_login} className="row">
                    <div className="col-12 mb-3">
                        <AvGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText><i className="material-icons">person</i></InputGroupText>
                                </InputGroupAddon>
                                <AvField className="form-control" name="email" placeholder="Correo" validate={{
                                    ...validatorRequired,
                                    ...validatorEmail,
                                }} />
                            </InputGroup>
                        </AvGroup>
                    </div>
                    <div className="col-12 mb-3">
                        <AvGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText><i className="material-icons">lock</i></InputGroupText>
                                </InputGroupAddon>
                                <AvField className="form-control" type={visibilityPassword ? "text" : "password"} name="password" placeholder="Contraseña" validate={{
                                    ...validatorRequired,
                                    ...validatorMinLength(6)
                                }} />
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText className="bgMain text-white hover" onClick={() => setVisibilityPassword(!visibilityPassword)}><i className="material-icons">{visibilityPassword ? "visibility" : "visibility_off"}</i></InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </AvGroup>
                    </div>
                    <div className="col-12 mb-4 d-flex justify-content-between">
                        <div>
                            <AvInput type="checkbox" name="Recuerdame" falseValue="NOPE!" /> Recuerdame
                        </div>
                        <Link to="#">¿Olvidaste tu contraseña?</Link>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button type="submit" className="btn btnMain">Ingresar</button>
                    </div>
                </AvForm>
            </div>
        </div>
    </div>
}

export default Login