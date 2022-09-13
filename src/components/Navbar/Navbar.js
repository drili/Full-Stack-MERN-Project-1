import React, { useState, useEffect } from 'react'
import { AppBar, Avatar, Typography, Toolbar, Button } from "@material-ui/core"
import useStyles from "./styles"
import memories from "../../images/memories.png"
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from "react-redux"

function Navbar() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))

    useEffect(() => {
        const token = user?.token
        // - Check for JWT (JASON Web Token)

        setUser(JSON.parse(localStorage.getItem("profile")))
    }, [location])

    const logout = () => {
        dispatch({ type: "LOGOUT" })

        navigate("/")
        setUser(null)
    }

    // const user = null

    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant='h2' align='center'>Memories</Typography>
                <img className={classes.image} src={memories} height="60"></img>
            </div>

            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        {/* <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar> */}
                        {/* <Typography classname={classes.userName} variant="h6">{user.result.name}</Typography> */}
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar