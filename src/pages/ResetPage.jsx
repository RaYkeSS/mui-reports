import {useState} from "react";
import { TextField, Button, Container, Typography } from '@mui/material';

import {fetchResetPassword} from "../utils/api/fetchResetPassword.js";

export const ResetPage = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleReset = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setMessage("Пароли не совпадают!");
            return;
        }

        try {
            await fetchResetPassword(email, newPassword);
            setMessage("Пароль успешно изменен!");
        }
        catch (e) {
            setMessage(e.message);
            console.error(e);
        }
        setTimeout(()=>{
            setMessage('')
        }, 3000)
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h5">Сброс пароля</Typography>
            <form onSubmit={handleReset}>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Новый пароль"
                    variant="outlined"
                    type="password"
                    fullWidth
                    margin="normal"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <TextField
                    label="Подтверждение пароля"
                    variant="outlined"
                    type="password"
                    fullWidth
                    margin="normal"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Сбросить пароль
                </Button>
            </form>
            {message && <Typography variant="body2" color="error">{message}</Typography>}
        </Container>
    );
};

