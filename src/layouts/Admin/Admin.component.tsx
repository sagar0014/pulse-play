import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import DashboardIcon from '@mui/icons-material/Dashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Collapse } from '@mui/material';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme)
  })
}));

export default function AdminLayout({ children }: any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navItems = [
    {
      id: 1,
      name: 'Dashboard',
      slug: '/manage/dashboard',
      icon: <DashboardIcon style={{ color: '#fff' }} />
    },
    {
      id: 2,
      name: 'Sales Report',
      slug: '/manage/sales-report',
      icon: <TableChartIcon style={{ color: '#fff' }} />
    },
    {
      id: 3,
      name: 'Items Report',
      slug: '/manage/items-report',
      icon: <TableChartIcon style={{ color: '#fff' }} />
    },
    {
      id: 4,
      name: 'Reports',
      icon: <TableChartIcon style={{ color: '#fff' }} />,
      subItems: [
        {
          id: 4.1,
          name: 'Reports 1',
          slug: '/manage/reports/reports-1'
        }
      ]
    },
    {
      id: 5,
      name: 'Order',
      icon: <TableChartIcon style={{ color: '#fff' }} />,
      subItems: [
        {
          id: 5.1,
          name: 'Order 1',
          slug: '/manage/order/order-1'
        }
      ]
    },
    {
      id: 6,
      name: 'Attendance',
      slug: '/manage/attendance',
      icon: <AppRegistrationIcon style={{ color: '#fff' }} />
    },
    {
      id: 7,
      name: 'Products',
      slug: '/manage/products',
      icon: <ApartmentIcon style={{ color: '#fff' }} />
    },
    {
      id: 8,
      name: 'Categories',
      slug: '/manage/categories',
      icon: <ApartmentIcon style={{ color: '#fff' }} />
    },
    {
      id: 9,
      name: 'Retailers',
      slug: '/manage/retailers',
      icon: <ApartmentIcon style={{ color: '#fff' }} />
    },
    {
      id: 10,
      name: 'Distributors',
      slug: '/manage/distributors',
      icon: <ApartmentIcon style={{ color: '#fff' }} />
    },
    {
      id: 11,
      name: 'Beats',
      slug: '/manage/beats',
      icon: <ApartmentIcon style={{ color: '#fff' }} />
    },
    {
      id: 12,
      name: 'City',
      slug: '/manage/city',
      icon: <ApartmentIcon style={{ color: '#fff' }} />
    },
    {
      id: 13,
      name: 'Users',
      slug: '/manage/users',
      icon: <ApartmentIcon style={{ color: '#fff' }} />
    }
  ];

  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' })
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ backgroundColor: 'primary.dark' }}>
          {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton> */}
          <Image
            src={'/assets/images/logo.png'}
            height={80}
            width={100}
            alt="logo"
            style={{ objectFit: 'contain' }}
          />
        </DrawerHeader>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            height: '100%',
            color: '#fff'
          }}
        >
          <Divider />
          <List sx={{ mt: '48px' }}>
            {navItems?.map((item, index) => (
              <React.Fragment key={index}>
                <ListItemButton
                  onClick={item?.subItems ? handleClick : undefined}
                >
                  <ListItemIcon
                    sx={{ justifyContent: 'flex-end', paddingRight: '10px' }}
                  >
                    {item?.icon}
                  </ListItemIcon>
                  <ListItemText primary={item?.name} />
                  {item?.subItems &&
                    (menuOpen ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
                {item?.subItems && (
                  <Collapse in={menuOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="Starred" />
                      </ListItemButton>
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: 3,
          backgroundColor: 'primary.light',
          height: '100vh',
          pb: 4
        }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
