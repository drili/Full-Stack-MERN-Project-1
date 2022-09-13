import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GoogleOAuthProvider } from "@react-oauth/google"
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Auth from './components/Auth/Auth'

const App = () => {
    return (
        <GoogleOAuthProvider clientId='246085363770-b84tgj5s4spri4aas3sma3hc1aalj5vo.apps.googleusercontent.com'>
            <BrowserRouter>
                <Container maxwidth="lg">
                    <Navbar></Navbar>
                    <Routes>
                        <Route path="/" exact element={<Home />}></Route>
                        <Route path="/auth" exact element={<Auth />}></Route>
                    </Routes>
                </Container>
            </BrowserRouter>
        </GoogleOAuthProvider>
    )
}

export default App