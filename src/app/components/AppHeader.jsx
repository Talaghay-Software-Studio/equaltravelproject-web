import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import AppLogo from './AppLogo';

const pages = ['Find a Property', 'Share Stories', 'Rental Guides', 'Download Mobile App'];
const menu = ['Sign Up', 'Login', 'Help Center'];

function AppHeader(){
    const [anchorElUser, setAnchorElUser] = React.useState(null);
      
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    return (
        <div>
            <AppBar position="static">
            <Toolbar disableGutters sx={{ mx: 2 }}>
                  <AppLogo sx={{ display: 'flex', mr: 1 }} />
                  
                  <Box sx={{ display: 'flex', ml: 'auto' }}>
                    {pages.map((page) => (
                      <Button key={page} sx={{ my: 2, color: 'white', display: 'block' }}>
                        <Typography sx={{ textTransform: 'initial' }}>
                          {page}
                        </Typography>
                      </Button>
                    ))}
                  </Box>

                  <Button sx={{ 
                      color: '#3B79C9', 
                      background: 'white', 
                      display: 'block', 
                      borderRadius: '30px', 
                      mx: 2, 
                      padding: "10px 30px",
                      }}
                    >
                      <Typography sx={{ textTransform: 'initial' }}>
                        {`Become A Host`}
                      </Typography>
                  </Button>
                    
                  <Button sx={{ 
                      background: 'white', 
                      display: 'block', 
                      borderRadius: '30px', }}>
                    <Tooltip title="Open Menu">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                      >
                        <MenuIcon sx={{ px: 2 }} />
                      </IconButton>
                    </Tooltip>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="User Profile Icon" src="" sx={{ width: 37, height: 37, bgcolor: "#3B79C9" }}/>
                    </IconButton>
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {menu.map((menu) => (
                        <MenuItem key={menu} onClick={handleCloseUserMenu}>
                          <Typography textAlign="center">{menu}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default AppHeader;