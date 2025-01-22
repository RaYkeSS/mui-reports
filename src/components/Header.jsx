import {useContext} from 'react';
import { AppBar, Toolbar, Typography, Container, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

import {NavLink} from "./NavLink.jsx";
import {INNER_ENDPOINTS} from '../utils/innerEndpoints.js'
import {Context} from "../App.jsx";

const Header = () => {
    const {user} = useContext(Context);

    const userData = user ? user[0] : null;

    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Typography variant="h6" component={NavLink} to={INNER_ENDPOINTS.home} style={{ color: 'white', textDecoration: 'none' }}>
                        Home
                    </Typography>
                    <div style={{ marginLeft: 'auto', display: 'flex', justifyContent: 'space-between' }}>
                        <NavLink to={INNER_ENDPOINTS.report}>Report</NavLink>
                    {userData ? (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body1" sx={{ marginLeft: 2 }}>
                                {userData.email}
                            </Typography>
                            <IconButton sx={{
                                color: 'yellow',
                                fontSize: '4rem',
                            }}>
                                <AccountCircle />
                            </IconButton>
                        </div>
                    ) : <NavLink to={INNER_ENDPOINTS.login}>Login</NavLink>}

                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
