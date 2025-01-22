import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router';

export const NotFoundPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <Container style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h3" color="error">
                404
            </Typography>
            <Typography variant="h5" gutterBottom>
                Not Found
            </Typography>
            <Button variant="contained" color="primary" onClick={handleGoHome} style={{ marginTop: '20px' }}>
                Вернуться на главную
            </Button>
        </Container>
    );
};

