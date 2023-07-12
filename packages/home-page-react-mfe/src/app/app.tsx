import * as React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './home-page';
import SignInWrapper from './sign-in-wrapper';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignInWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
