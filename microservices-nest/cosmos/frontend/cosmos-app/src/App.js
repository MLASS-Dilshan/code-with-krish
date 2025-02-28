import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import OrderMgt from './components/OrderMgt'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <nav>
            <Navigation nav = {'Order management'} url={"/order-management"}/>
          </nav>
        </div>

        <Routes>
          <Route path="/order-management" element = {<OrderMgt/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Navigation({nav, url}) {
  return (
    <li>
      <Link to={url}>{nav}</Link>
    </li>
  )
}

export default App