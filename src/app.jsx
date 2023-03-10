import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import planets from "./planets"
import Home from "./views/home"
import Planet from './components/planet'
import NotFound from "./views/notFound"
import Logo from './assets/logo.svg'
import MenuIcon from './assets/menu.svg'
import Menu from './components/menu'

window.addEventListener('DOMContentLoaded',()=>{
    ReactDOM.createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <div className="app">
                <header className="app__header">
                    <Logo/>
                    <MenuIcon className='icon' onClick={()=>{
                        document.querySelector('.menu').classList.toggle('show')
                    }}/>
                </header>
                <main className="app__main">
                    <Menu/>
                    <Routes>
                        <Route path="*" element={<NotFound/>}/>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/tierra" element={<Planet planet={planets.tierra}/>}/>
                        <Route path="/jupiter" element={<Planet planet={planets.jupiter}/>}/>
                        <Route path="/venus" element={<Planet planet={planets.venus}/>}/>
                        <Route path="/mercurio" element={<Planet planet={planets.mercurio}/>}/>
                        <Route path="/marte" element={<Planet planet={planets.marte}/>}/>
                        <Route path="/urano" element={<Planet planet={planets.urano}/>}/>
                        <Route path="/saturno" element={<Planet planet={planets.saturno}/>}/>
                        <Route path="/neptuno" element={<Planet planet={planets.neptuno}/>}/>
                    </Routes>
                </main> 
            </div>
        </BrowserRouter>
    )
})