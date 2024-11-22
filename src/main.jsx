import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './Components/React router/components/Home.jsx'
import Contact from './Components/React router/components/Contact.jsx'
import PasswordGenerator from '../src/Components/PasswordGenerator.jsx'
import ColorChanger from './Components/ColorChanger.jsx'
import CurrencyConvertor from './Components/CurrencyConvertor/CurrecyConvertor.jsx'
import DynamicFormGenerator from './Components/DynamicFromGererator/DynamicFormGenerator.jsx'
import Todo from './Components/Todo/Todo.jsx'


import './main.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter(
   
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='' element={<Home/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='passwordGenerator' element={<PasswordGenerator/>}/>
            <Route path='ColorChanger' element={<ColorChanger/>}/>
            <Route path='CurrencyConvertor' element={<CurrencyConvertor/>}/>
            <Route path='dynamicformgenerator' element={<DynamicFormGenerator/>}/>

            <Route path='todo' element=<Todo/>/>


        </Route>
    )
)
createRoot(document.getElementById('root')).render(

<RouterProvider future={{
    v7_startTransition: true,
  }} router={router}  />
 
)
