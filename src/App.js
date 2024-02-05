import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Catalog from './components/Catalog';
import MovieDetails from './components/MovieDetails';
import Navbar from './components/Navbar';
import { CATALOGS, USERS } from './Constants';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});




function App() {
  const [catalogs, setCatalogs] = useState(CATALOGS)
  const [users, setUsers] = useState(USERS)
  const isRented = function (movieID) {
    const user = users.find(u => currentUserID === u.id)
    return user.rented.includes(movieID)
  }
  const rentMovie = function (movieID) {
    const newCatalog = [...catalogs]
    const newUsers = [...users]
    const currentUser = newUsers.find(u => currentUserID === u.id)
    console.log(isRented(movieID))
    if (!isRented(movieID)) {
      if (currentUser.budget - 3 >= 0) {
        currentUser.rented.push(movieID)
        currentUser.budget -= 3
      }
      else {
        alert("You can't rent this movie you don't have the budget")
      }
    }
    else {
      currentUser.rented = currentUser.rented.filter(m => m !== movieID);
      currentUser.budget += 3
    }
    setUsers(newUsers)
    setCatalogs(newCatalog)
  }
  const [currentUserID, setCurrentUserID] = useState(0)
  const changeUser = function (userID) {
    setCurrentUserID(userID)
  }

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Landing changeUser={changeUser} users={users} />} />
          <Route path="/:category/" element={<Catalog user={users.find(u => currentUserID === u.id)} catalogs={catalogs} rentMovie={rentMovie} />} />
          <Route path="/movies/:movieID" element={<MovieDetails />} />
        </Routes>
        </ThemeProvider>
    </Router>
  );
}

export default App;
