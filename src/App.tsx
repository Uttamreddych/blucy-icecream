import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Menu } from './pages/Menu';
import { Franchise } from './pages/Franchise';
import { Investment } from './pages/Investment';
import { BusinessFormats } from './pages/BusinessFormats';
import { Gallery } from './pages/Gallery';
import { Founder } from './pages/Founder';
import { Contact } from './pages/Contact';

const NotFound: React.FC = () => {
  return (
    <div className="pt-32 pb-24 text-center max-w-lg mx-auto px-4">
      <div className="w-20 h-20 bg-blucy-ice rounded-full flex items-center justify-center mx-auto mb-4 text-blucy-blue font-heading font-bold text-3xl">
        404
      </div>
      <h1 className="text-3xl font-heading font-bold text-blucy-navy mb-2">
        Page Not Found
      </h1>
      <p className="text-sm text-blucy-muted mb-6">
        The sweet scoop you are looking for doesn't exist or has moved.
      </p>
      <Link to="/" className="btn-primary text-sm px-6 py-2.5">
        Return to Home
      </Link>
    </div>
  );
};

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white selection:bg-blucy-pink selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/business-formats" element={<BusinessFormats />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
