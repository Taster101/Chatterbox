import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Friends from "./pages/Friends"
import Bookmarks from "./pages/Bookmarks"
import Notifications from "./pages/Notifications"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Comments from "./pages/Comments";
import Likes from "./pages/Likes"

// import { NavigationCard } from "./components/NavigationCard"

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <>
      {/* <NavigationCard> */}
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path='/' element={< Login />} />
            <Route path='home' element={<Home />} />
            <Route path='profile' element={<Profile />} />
            <Route path='friends' element={<Friends />} />
            <Route path='bookmarks' element={<Bookmarks />} />
            <Route path='notifications' element={<Notifications />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='profile/comments' element={<Comments />} />
            <Route path='profile/likes' element={<Likes />} />
          </Routes>
        </Router>
      {/* </NavigationCard> */}
      </ApolloProvider>
    </>
  )
} 
