import React, { Component } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AppBar, Button } from '@material-ui/core'
import './Dashboard.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Book from '../Display/book.jsx';
import shoping from './shopping-cart-icon-shopping-cart-icon-by_vexels.png'

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
      },
      title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 1),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginRight: theme.spacing(0),
          marginLeft: theme.spacing(0),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'lightgray'
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '35ch',
        },
      },
      sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
      },
      appbar:{
        boxShadow: 'none',
        borderBottom: '1px solid lightgray' ,
        text: 'white',
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },
}));

const theme = createMuiTheme({

    palette: {
        primary:{
            main: '#fff',
        },
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
        },
      },

  });


export default function Dashboard() {


        return (
            <div className='container'>
                <AppBar id='appbar'>
				<div className="style">
                        <label className="Bookstore">Bookname</label>
                        <input id="search" type="text" placeholder='Search here...' />
						<i className="fas fa-cart-plus"></i>
                    </div>
                    <div>
                            <Button>
						  <img id="add-shoping" src={shoping} alt="add_shoping" />
                                <i className="fas fa-cart-plus"></i>
                            </Button>
                    </div>
                </AppBar>
				<Book />

            </div>
        );
    }


