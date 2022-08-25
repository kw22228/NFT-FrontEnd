import { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LocomotiveScrollProvider, Scroll } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import ScrollTriggerProxy from './lib/animation/gsap/ScrollTriggerProxy';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { lightTheme, darkTheme } from './styles/theme';

import { useRecoilValue } from 'recoil';
import { isDarkSelector } from './lib/recoil/selector';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Overlay from './components/Overlay/Overlay';
import FixedBtn from './components/FixedBtn/FixedBtn';

import { introLoadingAtom } from './lib/recoil/atoms';
import Intro from './components/Intro/Intro';
import { AnimatePresence } from 'framer-motion';
import Home from './components/Home/Home';
import Mint from './components/Mint/Mint';
import Gallary from './components/Gallary/Gallary';
import useDebounceResize from './lib/hooks/useDebounceResize';

// import pMinDelay from 'p-min-delay';

// const LoadableHome = loadable(() => import(/* webpackChunkName: "Home" */ './pages/HomePage'));
// const LoadableMint = loadable(() => import(/* webpackChunkName: "Mint" */ './pages/MintPage'));
// const LoadableGallary = loadable(
//     () => import(/* webpackChunkName: "Gallary" */ './pages/GallaryPage')
// );

function App() {
    const containRef = useRef<HTMLElement>(null);
    const isDark = useRecoilValue(isDarkSelector);
    const introLoading = useRecoilValue(introLoadingAtom);

    // useEffect(() => {
    //     preload(LoadableHome);
    //     preload(LoadableMint);
    //     preload(LoadableGallary);
    // }, []);

    useDebounceResize();

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyle />
            <BrowserRouter>
                {/* <AnimatePresence>{!introLoading && <Intro />}</AnimatePresence> */}
                <LocomotiveScrollProvider
                    options={{
                        smooth: true,
                        smartphone: {
                            smooth: true,
                        },
                        tablet: {
                            smooth: true,
                        },
                        getDirection: true,
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
                        <FixedBtn />
                        <Overlay />
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/mint" element={<Mint />} />
                            <Route path="/gallary" element={<Gallary />} />
                        </Routes>
                        <Footer />
                    </main>
                </LocomotiveScrollProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
