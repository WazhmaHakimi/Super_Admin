import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
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
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import ClassIcon from '@mui/icons-material/Class';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import WalletIcon from '@mui/icons-material/Wallet';
import EmailIcon from '@mui/icons-material/Email';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LayersIcon from '@mui/icons-material/Layers';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import Logo from './assets/images/logo.png'
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: 'black',
  color: 'white',
  '&.MuiDrawer-paper': {
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '7px !important',
    },
    '&::-webkit-scrollbar-track': {
      background: 'black',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'white',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
  },
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  backgroundColor: 'black',
  color: 'white',
  '&.MuiDrawer-paper': {
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '7px !important',
    },
    '&::-webkit-scrollbar-track': {
      background: 'black',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'white',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
  },
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: 'black',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        backgroundColor: 'black',
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function MiniDrawer(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 4,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <img src={Logo} width={40} height={40} style={{ marginRight: 15 }} />
          <Typography variant="h6" noWrap component="div">
            Users Management System
          </Typography>

          <IconButton sx={{ color: 'white', right: 40, position: 'absolute' }} aria-label="Notification Icon">
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon sx={{ color: 'white' }} /> : <ChevronLeftIcon sx={{ color: 'white' }} />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            {
              name: 'Students',
              logo: <AccountCircleIcon />,
              link: '/students'
            },

            {
              name: 'Teachers',
              logo: <CastForEducationIcon />,
              link: '/teachers'
            },

            {
              name: 'Subjects',
              logo: <AutoStoriesIcon />,
              link: '/subjects'
            },

            {
              name: 'Classes',
              logo: <ClassIcon />,
              link: '/classes'
            },

            {
              name: 'Classes Teacher',
              logo: <PersonIcon />,
              link: '/classesTeachers'
            },

            {
              name: 'Attendence',
              logo: <EventAvailableIcon />,
              link: '/attendence'
            },

            {
              name: 'Customers',
              logo: <PeopleIcon />,
              link: '/customers'
            },

            {
              name: 'Expenses',
              logo: <AttachMoneyIcon />,
              link: '/expenses'
            },

            {
              name: 'Incomes',
              logo: <WalletIcon />,
              link: '/incomes'
            },

            {
              name: 'Staff',
              logo: <GroupsIcon />,
              link: '/staff'
            },

            {
              name: 'Letters',
              logo: <EmailIcon />,
              link: '/letters'
            },

            {
              name: 'Refferals',
              logo: <FolderSharedIcon />,
              link: '/refferals'
            },


            {
              name: 'Pages',
              logo: <LayersIcon />,
              link: '/pages'
            },

            {
              name: 'Roles',
              logo: <HowToRegIcon />,
              link: '/roles'
            },

            {
              name: 'Super Admins',
              logo: <AdminPanelSettingsIcon />,
              link: '/superAdmins'
            },
          ].map((text, index) => (
            <Link to={text.link} 
            style={{
              textDecoration: 'none'  
            }}
            underline="none"
            >
              <ListItem key={text.name} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                        justifyContent: 'initial',
                      }
                      : {
                        justifyContent: 'center',
                      },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: 'center',
                        color: 'white'
                      },
                      open
                        ? {
                          mr: 3,
                        }
                        : {
                          mr: 'auto',
                        },
                    ]}
                  >
                    {text.logo}
                  </ListItemIcon>
                  <ListItemText
                    primary={text.name}
                    sx={[
                      open
                        ? {
                          opacity: 1,
                          color: 'white', 
                          textDecoration: 'none'
                        }
                        : {
                          opacity: 0,
                        },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            </Link>

          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>
          {props.content}
        </Typography>
      </Box>
    </Box>
  );
}
