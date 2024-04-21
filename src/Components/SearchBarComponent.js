import React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme, width }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#f2f2f2',
    '&:hover': {
        backgroundColor: '#e6e6e6',
    },
    marginLeft: 'auto', // Align to the right
    marginRight: 'auto', // Align to the left
    width: width || '90%', // Set the width to the passed value or 90% as default
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 'auto',
    },
    height: '40px',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar(props) {
    const { SearchBarPlaceholder, width } = props;
    return (
        <Search width={width}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder={SearchBarPlaceholder}
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    );
}
