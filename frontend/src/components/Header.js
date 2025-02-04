import React, { useEffect, useState } from 'react';
import { AppBar, Box, Toolbar, Autocomplete, TextField, Tabs, Tab } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie'; 
import { getAllMovies } from '../api-helpers/api-helpers.js';
import { Link } from 'react-router-dom';



const Header = () => {
    const [value, setValue] = useState(0);
const [movies, setMovies] =useState([]);
    useEffect(() => {
        getAllMovies()
            .then((data) => setMovies(data.movies))
            .catch((err) => console.error("Error fetching movies:", err));
    }, []);

    return (
        <AppBar position ="sticky" sx={{ bgcolor: "#2b2d42" }}>
            <Toolbar>
                <Box width="20%">
                    <MovieIcon />
                </Box>
                <Box width={"30%"} margin={"auto"}>
                    <Autocomplete
                        freeSolo
                        options={movies && movies.map((option) => option.title)}
                        renderInput={(params) => (
                            <TextField 
                                {...params} 
                                variant="standard" 
                                placeholder="Search Across Multiple Movies" 
                                sx={{ input: { color: "white" } }} 
                            />
                        )}
                    />
                </Box>
                <Box display={'flex'}>
                    <Tabs 
                        textColor="inherit" 
                        indicatorColor="secondary"
                        value={value} 
                        onChange={(e, val) => setValue(val)}
                    >
                        <Tab LinkComponent={Link} to="/movies" label="Movies" />
                        <Tab label="Admin" LinkComponent={Link} to="/admin" />
                        <Tab label="Auth" LinkComponent={Link} to="/auth" />
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
