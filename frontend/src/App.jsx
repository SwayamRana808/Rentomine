import React from 'react'
import Page1 from './pages/Page1'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Grid from './components/parts/Grid'
import Login from './components/parts/Login'
import HomeFiltered from './pages/HomeFiltered.jsx'
import Signup from './components/parts/Signup'
import { Provider } from 'react-redux'
import appStore from './components/utils/appStore'
import Wishlist from './pages/Wishlist.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contactus from './pages/contactus.jsx'
import Footer from './pages/Footer.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'
import CancellationAndRefundPolicy from './pages/CancellationAndRefundPolicy.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
const App = () => {
   // is key 
  // return auth?<Outlet/>:<Navigate to="/signup"/>
  
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Page1/>,
      children:[{
        path:"/",
        element :<Grid/> 
      },
      {
        path:"/card/:sellerId/:productId/:userID",
        element: <div className='col-span-3'>
        <Page2/>
        </div> 
      },{
        
          path:"/login",
          element:<div className='col-span-3 m-auto'>
          <Login/>
    </div>
      },{
        
        path:"/signup",
        element:<div className='col-span-3 m-auto'>
        <Signup/>
  </div>
    },{
        
      path:"/products",
      element:<div className='col-span-3  '>
       <Page4/>
</div>
  } ,{
        
        path:"/wishlist",
        element:<div className='col-span-3  '>
        <Wishlist/>
    </div>},{
        
        path:"/messages",
        element:<div className='col-span-3  '>
         <Home/>
    </div>},{
        
        path:"/chat/:userID",
        element:<div className='col-span-3  '>
         <HomeFiltered/>
    </div>}  ]
    },
    {
      path:"/rent",
      element : <Page3/> 
    },
    {
      path:"/about-us",
      element : <About/> 
    },
    {
      path:"/contact-us",
      element : <Contactus/> 
    },
    {
      path:"/refund",
      element : <CancellationAndRefundPolicy/> 
    },
    {
      path:"/privacy-policy",
      element : <PrivacyPolicy/> 
    },
    {
      path:"/terms&conditions",
      element : <TermsAndConditions/> 
    }
  
  
  
  
  ])
  return (
    <div>
         <Provider store={appStore}>
         <RouterProvider router={appRouter}/>
         

        <Footer/>

         </Provider>
    </div>
  )
}

export default App;