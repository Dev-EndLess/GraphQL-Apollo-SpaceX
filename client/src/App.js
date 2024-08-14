import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';
import './App.css';
import logo from './space-x-logo.png'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img
          src={logo}
          alt="SpaceX"
          style={{ width: 500, display: 'block', margin: 'auto' }}
        />
      <Routes>
        <Route exact path="/" element={<Launches />} />
        <Route path="/launch/:flight_number" element={<Launch />} />
      </Routes>
      </div>
    </ApolloProvider>

  );
}

export default App
