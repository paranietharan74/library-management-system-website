import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: alpha(theme.palette.common.white, 0.15),
    backgroundColor: '#f2f2f2',
    '&:hover': {
        // backgroundColor: alpha(theme.palette.common.white, 0.25),
        backgroundColor: '#e6e6e6',
    },
    marginLeft: 0,
    width: '70%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
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

// search bar place holder through input
export default function SearchAppBar(props) {
    const { SearchBarPlaceholder } = props;
    return (
        <Search>
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