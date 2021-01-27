import { Button } from "@material-ui/core";
import React from "react";
import "./book.css";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Card, Select, MenuItem, MuiThemeProvider, Tooltip } from '@material-ui/core';
import Image from "../../Assets/textbook.png";
import { makeStyles } from '@material-ui/core/styles';
import userService from '../../Services/userService';

import Addtobag from './../AddBag/addtobag.jsx';
const service = new userService();

const useStyles = makeStyles((theme) => ({
    formControl: {
    //   margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function Book(){

         const classes =useStyles();
     const [booksList, setBooksList] = React.useState([]);
    const [age, setAge] = React.useState('');
    const [books,setBooks]= React.useState([]);

    const getAllBooks = () => {
        service.getAllBooks().then((data) => {
            let array = data.data.result;
            console.log(array);
            setBooksList(array);
        }).catch(error => {
            console.log(error);
        })
      }
    
    React.useEffect(() => { 
        getAllBooks();
      }, [] )
	  
	      const addCart = (productId) => {
        service.addToCart(productId,localStorage.getItem("userToken")).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })
    }


    return(
        <div className="display">
            <div className="header">
                <span>Books<span className="length"> ({booksList.length} items)</span></span>
                        <Select
                            variant="outlined"
                            style={{ fontSize: "15px", color: "darkslategray" }}
                        >
                            <MenuItem value="Newly Arrived">Newly Arrived</MenuItem>
                            <MenuItem value="Price : Low to High">Price : Low to High</MenuItem>
                            <MenuItem value="Price : High to Low">Price : High to Low</MenuItem>
                        </Select>
            </div>
            <div className="books">
                    {booksList.map((item) => (
                    <div  className="main">
                        <div className="book-image">
                            <div className="image">
                            <img className="image" src={Image} alt="" />
                            </div>
                        </div>
                        <div className="description">
                            <div className="title-book">
                                <div><small className="book-Name">{item.bookName}</small></div>
                                <div><small className="author">{item.author}</small></div>
                                <div><small className="price">Rs{item.price}</small></div>
								                            <div className="buttons">
							  <Button variant="contained" className="addbutton" onClick ={() => {addCart(item._id)}} >Add To Bag</Button>
                             <button className="wish-Button">Whishlist</button>
                             </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
