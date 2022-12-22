import {BrowserRouter,Routes, Route} from 'react-router-dom'
import About from './Pages/About'
import Error from './Pages/Error'
import Formulario from './Pages/Formulario'
import Home from './Pages/Home'
import Productos from './Pages/Productos'
import Api from './Pages/Api'
// import NavBar from './Componentes/NavBar'
import Layout from './Componentes/Layout'



/* --------------------------------------- navegacion tradicional ------------------------------- */
// function App() {
  

//   return (
    
//   <BrowserRouter>
//       <NavBar />
//         <Routes>
//             <Route index  element={<Home />} />
//             <Route path="/about" element={<About />}/>
//             <Route path="/api" element={<Api />}/>
//             <Route path="/productos" element={<Productos />}/>
//             <Route path="/formulario" element={<Formulario />}/>
//             <Route path="*" errorElement={<Error />}/>
//         </Routes>
      
//   </BrowserRouter>  
//   )
// }

/* --------------------------------- darle stylo al navbar ------------------------------------- */

function App() {
  

  return (
    
  <BrowserRouter>
    {/* <Layout /> */}
        <Routes>
          <Route path="/*" element={<Layout />}>
            <Route index  element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/api" element={<Api />}/>
            <Route path="/productos" element={<Productos />}/>
            <Route path="/formulario" element={<Formulario />}/>
            <Route path="*" element={<Error />}/>
          </Route>
        </Routes>
      
  </BrowserRouter>  
  )
}

export default App


