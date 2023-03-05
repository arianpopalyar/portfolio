import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {createBrowserHistory} from'history';
import App from './components/App';
import Header from './components/Header';
import Jokes from './components/Jokes';
import './index.css'

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
<BrowserRouter history={createBrowserHistory()}>
   <Routes>
        <Route path='/' element={<Header><App /></Header>} />
        <Route path='/jokes' element={<Header><Jokes /></Header>} />
    </Routes>
</BrowserRouter>);