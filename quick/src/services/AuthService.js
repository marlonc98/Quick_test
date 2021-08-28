import HostService from './HostService';

const users = [
    {
        name: "Juan",
        lastname: "Cardona",
        type_user: "coordinador",
        email: "juan@correo.com",
        password: "123456789",
        token: "Bearer sdsdsaas",
    },
    {
        name: "Sofia",
        lastname: "Lavanda",
        type_user: "administrador",
        email: "sofia@correo.com",
        password: "123456789",
        token: "Bearer asweee",
    },
];

class AuthService extends HostService {
    constructor() {
        super();
    }
    getUser() {
        let token = localStorage.getItem("token");
        return new Promise((resolve, reject) => {
            let matchs = users.filter((user) => user.token == token);
            if (matchs?.length > 0)
                resolve(matchs[0]);
            else resolve(null);
        })
    }
    login(email, password) {
        return new Promise((resolve, reject) => {
            let matchs = users.filter((user) => user.email == email && user.password == password);
            if (matchs?.length > 0) {
                localStorage.setItem("token", matchs[0].token);
                resolve(matchs[0]);
            }
            else reject(null);
        })
    }
    logout() {
        return new Promise((resolve, reject) => {
            localStorage.removeItem("token");
            resolve(true);
        });
    }
}

const instance = new AuthService();
export default instance;