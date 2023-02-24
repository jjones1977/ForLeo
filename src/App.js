import logo from './logo.svg';
import './App.css';
import Home from './Home';
import AddUser from './AddUser';
import NavBar from './NavBar';
import {Route, Link, Routes, Router} from "react-router-dom";
import styled from 'styled-components';
import { Tabs, Tab, TabPanel } from "./components/tabs/Tabs";

const TabsContainer = styled.div;

const TabPanelContainer = styled.div;

function App () {
  return (
    <div className = "App">

        
      

      <NavBar/>
      <Tabs>
          <Tab></Tab>
          <Tab></Tab>
        </Tabs>
      
        <TabPanel>
          <div className="divTable"><h1>Home</h1></div>
        </TabPanel>
        <TabPanel>
        <div className="divTable"><h1>AddUser</h1></div>
          </TabPanel>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/AddUser" element={<AddUser/>} />
      </Routes>
    </div>
  );
}

export default App;
