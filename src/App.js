import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Store from './pages/store.jsx';
import FAQ from './pages/faq.jsx';
import logo from './logo.svg';
import ResponsiveNavigation from './components/header.jsx';
import Footer from './components/footer.jsx';

export const ScrollToTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location.pathname])
  return children
}

function App() {

  const navLinks = [
    {
      text: 'Home',
      path: `${process.env.PUBLIC_URL}/`
    },
    {
      text: 'About',
      path: `${process.env.PUBLIC_URL}/about`
    },
    {
      text: 'Store',
      path: `${process.env.PUBLIC_URL}/store`
    },
    {
      text: 'FAQ',
      path: `${process.env.PUBLIC_URL}/faq`
    }
  ]

  return (
    <div className="App">
      <ResponsiveNavigation navLinks={ navLinks } logo={ logo } />
      <Router primary={false}>
      <ScrollToTop path="/">
        <Home path={`${process.env.PUBLIC_URL}/`} />
        <About path={`${process.env.PUBLIC_URL}/about`} />
        <Store path={`${process.env.PUBLIC_URL}/store`} />
        <FAQ path={`${process.env.PUBLIC_URL}/faq`} />
        </ScrollToTop>
      </Router>
      <Footer />
    </div>
  );
}

export default App;