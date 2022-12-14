import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import { getPosts } from "../../actions/posts"
import { useDispatch } from 'react-redux'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'

function Home() {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])

    return (
        <Grow in>
            <Container>
                <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId}></Posts>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}></Form>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home