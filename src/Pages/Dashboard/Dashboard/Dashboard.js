import React, { useState } from 'react';
import  IconButton  from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import { Button, Grid } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

import useAuth from '../../../Hook/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddService from '../AddService/AddService';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';
import Payment from '../../Payment/Payment';
import Orders from '../../orders/Orders';
import Navigation from '../../Shared/Navigation/Navigation';
import AllOrders from '../../AllOrders/AllOrders';
import ProductManagement from '../../ProductManagement/ProductManagement';
import MakeReview from './MakeReview';


const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin, logOut } = useAuth();
  const [date, setDate] = React.useState(new Date())
 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      
      <Toolbar />
      
      <Divider />  
      <List>
          {
            !admin && <Box>
              <ListItem button key={'myorder'}>
                <Link style={{textDecoration:"none",color: "black"}} to={`${url}/orders`}><ListItemText primary={'My Orders'} /></Link>
              </ListItem>
              <ListItem button key={'Payment'}>
                <Link style={{textDecoration:"none", color: "black"}} to={`${url}/Payment`}><ListItemText primary={'Payment'} /></Link>
              </ListItem>
              
              <ListItem button key={'review'}>
                <Link style={{textDecoration:"none",color: "black"}} to={`${url}/postreview`}><ListItemText primary={'Review'} /></Link>
              </ListItem>
              <ListItem style={{textDecoration:"none",color: "black"}} button key={'logOut'}>
                <Button onClick={logOut}><ListItemText primary={'LogOut'} /></Button>
              </ListItem>
            </Box>
          }
          {
            admin && <Box>
              <ListItem button key={'addNewWatch'}>
                <Link style={{textDecoration:"none",color: "black"}} to={`${url}/addNewProduct`}><ListItemText primary={'Add New Product'} /></Link>
              </ListItem>
              <ListItem button key={'manageAllOrder'}>
                <Link style={{textDecoration:"none",color: "black"}} to={`${url}/manageorder`}><ListItemText primary={'Manage All Order'} /></Link>
              </ListItem>
              <ListItem style={{textDecoration:"none"}} button key={'manageproducts'}>
                <Link style={{textDecoration:"none",color: "black"}} to={`${url}/manageproducts`}><ListItemText primary={'Manage Products'} /></Link>
              </ListItem>
              <ListItem button key={'manageAllOrder'}>
                <Link style={{textDecoration:"none",color: "black"}} to={`${url}/MakeAdmin`}><ListItemText primary={'Make Admin'} /></Link>
              </ListItem> 
              <ListItem style={{textDecoration:"none",color: "black"}} button key={'logout'}>
                <Button onClick={logOut}><ListItemText primary={'LogOut'} /></Button>
              </ListItem>
            </Box>
          }   
      </List>
      <Divider />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <Link style={{textDecoration:"none",color: "white"}} to={`/home`}><Typography style={{marginLeft:"10px"}} variant="h6" noWrap component="div">
            Home
          </Typography></Link>
          
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          <h1>Your all required things in this DashBoard</h1>
        </Route>
        <PrivateRoute path={`${url}/Payment`}>
          <Payment></Payment>
        </PrivateRoute>
        <PrivateRoute path={`${url}/orders`}>
          <Orders></Orders>
        </PrivateRoute>
        <PrivateRoute path={`${url}/postreview`}>
          <MakeReview></MakeReview>
        </PrivateRoute>

        <AdminRoute path={`${url}/manageorder`}>
          <AllOrders></AllOrders>
        </AdminRoute>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        
        <AdminRoute path={`${url}/manageproducts`}>
          <ProductManagement></ProductManagement>
        </AdminRoute>
        <AdminRoute path={`${path}/addService`}>
          <AddService></AddService>
        </AdminRoute>
      </Switch>


       </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
