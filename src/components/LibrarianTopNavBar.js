import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function LibrarianTopNavBar() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'linear-gradient(to right, #1a33ad, #8184fe)' }} style={{width: '98vw', marginLeft: '1vw', borderRadius: '10px'}}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                        style={{ color: 'black' , borderRadius: '5px'}}
                    >
                        Libray Management System
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                        {/* Mail icon count */}
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error" badgeContentColor="red">
                                <span style={{ color: 'black' }}>
                                    <MailIcon />
                                </span>
                            </Badge>
                        </IconButton>

                        {/* Bell icon count */}
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error" badgeContentColor="red">
                                <span style={{ color: 'black' }}>
                                    <NotificationsIcon />
                                </span>
                            </Badge>
                        </IconButton>

                        {/* Profile icon */}
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <span style={{ color: 'black' }}>
                                <AccountCircle /></span>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
