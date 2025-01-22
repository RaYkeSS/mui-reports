import {Button} from "@mui/material";
import { NavLink as RouterNavLink } from 'react-router';


export const NavLink = ({to, children}) => {
    return (
        <Button
            color="inherit"
            component={RouterNavLink}
            to={to}
            style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
        >
            {children}
        </Button>
    )
}
