import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';

function SearchBar({ placeholder, onChange}) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', mb:'10px'}}>
            <SearchIcon fontSize='large' sx={{ marginRight: '10px' }} />
            <Input
                placeholder={placeholder}
                onChange={onChange}
                sx={{width: '300px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.1rem'}}
                disableUnderline
            />
        </Box>
    )
}

export default SearchBar;