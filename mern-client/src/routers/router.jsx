import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";
import Home from "../home/home";
import Shop from "../shop/shop";
import About from "../components/about";
import Blog from "../components/blog";
import SingleMedicine from "../shop/singleMedicine";
import DashboardLayout from "../dashboard/dashboardLayout";
import Dashboard from "../dashboard/dashboard";
import UploadMedicine from "../dashboard/uploadMedicine";
import ManageMedicine from "../dashboard/manageMedicine";
import EditMedicines from "../dashboard/editMedicines";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/shop',
            element: <Shop/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/blog',
            element: <Blog />
        },
        {
          path: '/medicine/:id',
          element: <SingleMedicine/>,
          loader: ({params}) => fetch(`http://localhost:5000/medicine/${params.id}`)
        }
      ]
    },
    {
      path: "/admin/dashboard",
      element: <DashboardLayout/>,
      children: [
        {
          path: "/admin/dashboard",
          element: <Dashboard/>
        },
        {
            path: "/admin/dashboard/upload",
            element: <UploadMedicine/>
        },
        {
          path: "/admin/dashboard/manage",
          element: <ManageMedicine/>
      },
      {
        path: "/admin/dashboard/edit-medicines/:id",
        element: <EditMedicines/>,
        loader: ({params}) => fetch(`http://localhost:5000/medicine/${params.id}`)
    }
      ]
    }
  ]);

  export default router;