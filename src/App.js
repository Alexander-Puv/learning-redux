import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { SecondApp } from './secondStore/SecondApp';
import { FirstApp } from './store/FirstApp';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<SecondApp />}></Route>
                <Route path='/first' element={<FirstApp />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
