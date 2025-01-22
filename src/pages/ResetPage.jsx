import { TextField, Button, Container, Typography } from '@mui/material';

export const ResetPage = () => {
    const handleReset = (e) => {
        e.preventDefault();
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
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Сбросить пароль
                </Button>
            </form>
        </Container>
    );
};

