import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Stack, Button } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton></IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    BOOKSTORE
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit' component={Link} to="/">Home</Button>
                    <Button color='inherit' component={Link} to="/stock">Books</Button>
                    <Button color='inherit' component={Link} to="/addBook">Add Book</Button>
                    <Button color='inherit' component={Link} to="/search">Search</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
