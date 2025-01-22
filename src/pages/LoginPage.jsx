import {useContext, useState} from "react";
import { TextField, Button, Container, Typography  } from '@mui/material';
import {Link, useNavigate} from "react-router";

import {Context} from "../App.jsx";

import {INNER_ENDPOINTS} from "../utils/innerEndpoints.js";
import {fetchLogin} from "../utils/api/fetchLogin.js";

export const LoginPage = () => {
    const {setUser} = useContext(Context);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async (e) => {
        e.preventDefault();
        const user = await fetchLogin(email, password)
        setUser(user)
        navigate(INNER_ENDPOINTS.home)
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h5">Вход в систему</Typography>
            <form onSubmit={handleLogin}>
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Войти
                </Button>
                <Button component={Link} variant="text" to={INNER_ENDPOINTS.reset} fullWidth>
                    Забыли пароль?
                </Button>
            </form>
        </Container>
    );
};

export default LoginPage;
