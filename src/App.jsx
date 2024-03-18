import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import StoryListPage from './pages/StoryListPage';
import NewStoryPage from './pages/NewStoryPage';

function App() {
  return (       
    <div>
    <NavBar />
    <StoryListPage />
    <NewStoryPage />
    </div>
  );
}

export default App;