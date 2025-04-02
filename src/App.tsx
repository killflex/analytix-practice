import { ReactLenis } from 'lenis/react';

import Header from './components/Header';
import Hero from './components/Hero';
import Brand from './components/Brand';
import Feature from './components/Feature';
import Process from './components/Process';
import Overview from './components/Overview';
import Review from './components/Review';
import Blog from './components/Blog';
import Cta from './components/Cta';

const App = () => {
  return (
    <ReactLenis root>
      <div className='relative isolate overflow-hidden'>
        <Header />

        <main>
          <Hero />
          <Brand />
          <Feature />
          <Process />
          <Overview />
          <Review />
          <Blog />
          <Cta />
        </main>
      </div>
    </ReactLenis>
  );
};

export default App;
