import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import authService, { AuthService } from './appwrite/auth.js'
import { login, logout } from './store/authSlice.js'

import './App.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
 
 
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {

    authService.getCurrentUser()
      .then((userdata) => {
        if (userdata) {
          dispatch(login({ userdata }))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() => { setLoading(false) })


  }, [])



  return !loading ? (
    <div className='h-screen'>
      <Header />
      <main>
        {/* outlet */}
      </main>
      <Footer />


    </div>
  ) : null
}

export default App
