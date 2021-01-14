import StickyCallButton from './StickyCallButton'
import { HeaderLinks } from './Header'
import { FooterWrap } from './Footer'
import { Route } from 'react-router-dom'
import { StorePage, CartPage } from "./Pages"
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchItems } from '../redux/actions/contentItems'

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchItems())
  }, [])

  return (
    <div>
      <HeaderLinks />
      <Route exact path='/' component={StorePage}/>
      <Route exact path='/cart' component={CartPage}/>
      <StickyCallButton />
      <FooterWrap />
    </div>
  );
}

export default App;
