import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Menu from "../Menu";

import Clients from "../ClientsAndSuppliers";
import Users from "../Users";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MenuM from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";


// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
} from "./styles";

// Material Dashboard 2 PRO React components
import MDBox from "../../components/MDBox";

import {
  useMaterialUIController,
  setMiniSidenav,
} from "../../context";

import Sidenav from "../../module/common/Sidenav";
import routes from "../../module/common/routes/routes";


import { getSessionData, signOut, getRolLabel } from "../../Services/authService";


import Charts from "../Charts/Charts";
import Invoice from "../Invoices/Invoice";
import Aggregation01 from "../Aggregation01/Aggregation01";
import Aggregation02 from "../Aggregation02/Aggregation02";
import Aggregation03 from "../Aggregation03/Aggregation03";
import Aggregation04 from "../Aggregation04/Aggregation04";
import ProductTest from "../ProductTest/ProductTest";
import Inventories from "../Inventories/Inventories";
import Products from "../Products/Products";
import PurchaseOrders from "../PurchaseOrders/PurchaseOrders";
import TransportRoutes from "../TransportRoutes/TransportRoutes";
import Suppliers from "../SuppliersNode/Suppliers";
import AddSupplierForm from "../SuppliersNode/Create/SupplierForm";
import UpdateSupplier from "../SuppliersNode/Update/UpdateSupplier";
import AddProductForm from "../Products/Create/ProductForm";
import UpdateProduct from "../Products/Update/UpdateProduct";
import DeleteSupplier from "../SuppliersNode/Delete/DeleteSupplier";
import DeleteProduct from "../Products/Delete/DeleteProduct";

const MainLayout = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState("");
  const [rol, setRol] = useState()
  const [rolLabel, setRolLabel] = useState()
  const [controller, dispatch] = useMaterialUIController();
  const [onMouseEnter, setOnMouseEnter] = useState(false);

  const {
    miniSidenav,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
    transparentNavbar,
  } = controller;

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    signOut();
    setAnchorEl(null);
    window.location.replace("/");
  };

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  return (
    <div className="main-layout">
      <AppBar position="absolute" color="inherit"
        sx={(theme) => navbar(theme, { transparentNavbar, darkMode })}>
        <Toolbar sx={(theme) => navbarContainer(theme)}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

          </Typography>
          <Button
            startIcon={<AccountCircleIcon />}
            color="inherit"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            {user || "USER"}
          </Button>
        </Toolbar>
      </AppBar>

      <MenuM
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {(rol === 'A') && <Link to="/users" ><MenuItem >Administrar Usuarios</MenuItem></Link>}
        <MenuItem onClick={logOut}>Cerrar Sesion</MenuItem>
      </MenuM>
      <>
        <Sidenav
          color={sidenavColor}
          // brand={
          //   (transparentSidenav && !darkMode) || whiteSidenav
          //     ? consertec
          //     : consertec
          // }
          brandName="Cadena de Suministros"
          routes={routes}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        />
      </>
      <MDBox sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
        p: 3,
        position: "relative",

        [breakpoints.up("xl")]: {
          marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
          transition: transitions.create(["margin-left", "margin-right"], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },
      })}>
        <Routes>
          <Route path="/*" element={<Menu />} />

          
            <Route path="/users" element={<Users />} />
            <Route path="/invoices/list/VIG" element={<Clients sts="VIG" />}  />
            <Route path="/invoices/list/ANU" element={<Clients sts="ANU" />} />
            <Route path="/invoice/create/" element={<Invoice action="add" />} />
            <Route path="/charts/view/" element={<Charts action="view" />} />
            <Route path="/invoices/update/:id" element={<Invoice action="update" />} />
            <Route path="/invoices/view/:id" element={<Invoice action="view" />} />
            <Route path="/aggregation01/view" element={<Aggregation01 action="view" />} />
            <Route path="/aggregation02/view" element={<Aggregation02 action="view" />} />
            <Route path="/aggregation03/view" element={<Aggregation03 action="view" />} />
            <Route path="/aggregation04/view" element={<Aggregation04 action="view" />} />
            <Route path="/product_test/view" element={<ProductTest action="view" />} />
            <Route path="/inventories/view" element={<Inventories action="view" />} />
            <Route path="/products/view" element={<Products action="view" />} />
            <Route path="/products/create" element={<AddProductForm action="create" />} />
            <Route path="/products/update" element={<UpdateProduct action="create" />} />
            <Route path="/products/delete" element={<DeleteProduct action="create" />} />
            <Route path="/purchase-orders/view" element={<PurchaseOrders action="view" />} />
            <Route path="/transport-routes/view" element={<TransportRoutes action="view" />} />
            <Route path="/suppliers/view" element={<Suppliers action="view" />} />
            <Route path="/suppliers/create" element={<AddSupplierForm action="create" />} />
            <Route path="/suppliers/update" element={<UpdateSupplier action="update" />} />
            <Route path="/suppliers/delete" element={<DeleteSupplier action="delete" />} />

        </Routes>
      </MDBox>

    </div>
  );
};

export default MainLayout;
