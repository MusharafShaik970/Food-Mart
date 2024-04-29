import React, { Suspense, lazy, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Header from "./components/Header"
import Body from "./components/Body"
import Error from "./components/Error"
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from "./utils/UserContext"
import appStore from "./utils/appStore"
import Cart from "./components/cart"
import { Provider } from "react-redux"
const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
  const [userName, setUserName] = useState()
  useEffect(() => {
    const user = "Musharaf"
    setUserName(user)
  }, [])
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app-container">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....please Wait.</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
