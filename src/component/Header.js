import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './Stateprovider';
import { auth } from './firebase';


function Header(){
  const [{ basket ,user } ,dispatch] = useStateValue();

  function hendelAuthontication(){
    if(user){
      auth.signOut()
    }
   
  }
    
  return (
    <div className='header'>
        <Link to='/'> <img className='header__logo' src='\pngegg.png' alt=''/></Link>

        

        <div className='header__serach'>
            <input type='text' className='header__searchIN'/>
            <SearchIcon className='header__searchIcon'/>
        </div>
        <div className='header__nav'>
        <Link to={!user && "/login"}>
            <div  onClick={hendelAuthontication} className='header__option'>
          <span className='header__optionlineone'>Hello,{user? 'Customer':'Guest'}</span>
          <span className='header__optionlinetwo' >{user? 'SignOut':'SignIn'}</span>

            </div></Link>
            <div className='header__option'>
            <span className='header__optionlineone'>Returns</span>
          <span className='header__optionlinetwo'>& Orders</span>
            </div>
            <div className='header__option'>
            <span className='header__optionlineone'>your</span>
          <span className='header__optionlinetwo'>Prime</span>
            </div>
            <Link to="/checkout">
            <div className='header__optionBasket'>
                <ShoppingBasketIcon/>
                <span className='header__optionlineTwo header__basketCount'>{basket.length}</span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header