/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 PRO React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// @mui icons
import Icon from "@mui/material/Icon";
import { LINKS } from "../../../type/globals";

const routes = [
  
  {
    type: "collapse",
    name: "Nodos",
    key: "nodes",
    icon: <Icon fontSize="medium">description</Icon>,
    collapse: [
      {
        name: "Inventarios",
        key: "nodes_inventories",
        route: LINKS.inventories,
      },
      {
        name: "Productos",
        key: "nodes_products",
        route: LINKS.products,
      },
      {
        name: "Órdenes de Compra",
        key: "nodes_purchase_orders",
        route: LINKS.purchase_orders,
      },
      {
        name: "Rutas de Transporte",
        key: "nodes_transport_routes",
        route: LINKS.transport_routes,
      },
      {
        name: "Proveedores",
        key: "nodes_suppliers",
        route: LINKS.suppliers,
      },
    ],
  },
  {
    type: "collapse",
    name: "Create",
    key: "create",
    icon: <Icon fontSize="medium">edit</Icon>,
    collapse: [
      {
        name: "Proveedores",
        key: "create_suppliers",
        route: LINKS.suppliers_create,
      },
    ],
  },
  {
    type: "collapse",
    name: "Facturas",
    key: "invoices",
    icon: <Icon fontSize="medium">description</Icon>,
    collapse: [
      {
        name: "Facturas Vigentes",
        key: "invoices_list",
        route: LINKS.invoicesVIG,
      },
      {
        name: "Facturas Anuladas",
        key: "invoices_list",
        route: LINKS.invoicesANU,
      },
    
    ],
  },
  {
    type: "collapse",
    name: "Inteligencia de Negocios",
    key: "charts",
    icon: <Icon fontSize="medium">description</Icon>,
    collapse: [
      {
        name: "Mongo Charts",
        key: "mongo_charts",
        route: LINKS.charts
      },
      
    ],
  },
  {
    type: "collapse",
    name: "Agregaciones",
    key: "aggregations",
    icon: <Icon fontSize="medium">description</Icon>,
    collapse: [
      {
        name: "Agregacion 1",
        key: "aggregation01",
        route: LINKS.aggregation01,
      },
      {
        name: "Agregacion 2",
        key: "aggregation02",
        route: LINKS.aggregation02,
      },
      {
        name: "Agregacion 3",
        key: "aggregation03",
        route: LINKS.aggregation03,
      },
      {
        name: "Agregacion 4",
        key: "aggregation04",
        route: LINKS.aggregation04,
      },
      {
        name: "Product Test",
        key: "product_test",
        route: LINKS.product_test,
      },
    ],
  },
];

export default routes;
