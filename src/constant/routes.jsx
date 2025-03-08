import { lazy } from "react"
import { Route } from "react-router-dom"

const Landing = lazy(() => 
    import("../screens/Landing")
)

const Login = lazy(() => 
    import("../screens/Login")
)

export const routes = {
    LANDING: {
        link: '/',
        type: 'auth',
        name: 'Landing',
        element: <Landing/>
    },
    LOGIN: {
        link: '/login',
        type: 'auth',
        name: 'Login',
        element: <Login/>
    }
}

export const routeConfig = Object.entries(routes).map(([key, {link, element }]) => {
    return (
        <Route
            key={key}
            path={link}
            element={element}
        />
    )
})