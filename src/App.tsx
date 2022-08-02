import React, { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LocomotiveScrollProvider, Scroll } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import ScrollTriggerProxy from './lib/animation/gsap/ScrollTriggerProxy';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import MintPage from './pages/MintPage';
import GallaryPage from './pages/GallaryPage';
import ScrollTrigger from 'gsap/ScrollTrigger';
import FixedBtn from './components/FixedBtn/FixedBtn';

function App() {
    const containRef = useRef(null);

    return (
        <BrowserRouter>
            <LocomotiveScrollProvider
                options={{
                    smooth: true,
                    smartphone: {
                        smooth: true,
                    },
                    tablet: {
                        smooth: true,
                    },
                }}
                watch={
                    [
                        //..all the dependencies you want to watch to update the scroll.
                        //  Basicaly, you would want to watch page/location changes
                        //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
                    ]
                }
                containerRef={containRef}
                onUpdate={(scroll: Scroll) =>
                    scroll.scrollTo(0, { duration: 0, disableLerp: true })
                }
            >
                <ScrollTriggerProxy />
                <main className="Main" data-scroll-container ref={containRef}>
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/mint" element={<MintPage />} />
                        <Route path="/gallary" element={<GallaryPage />} />
                    </Routes>
                    <Footer />
                    <FixedBtn />
                </main>
            </LocomotiveScrollProvider>
        </BrowserRouter>
    );
}

export default App;
