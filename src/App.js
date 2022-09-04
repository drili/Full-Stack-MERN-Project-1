import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Auth from './components/Auth/Auth'

const App = () => {
    return (
        <BrowserRouter>
            <Container maxwidth="lg">
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" exact element={<Home />}></Route>
                    <Route path="/auth" exact element={<Auth />}></Route>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App