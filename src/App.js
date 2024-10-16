import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { loadStripe } from '@stripe/stripe-js';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles
// import {Elements} from '@stripe/react-stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_VOOyyYjgzqdm8I3SrBqmh9qY');

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Story1 = lazy(() => import('./pages/Stories/Story1'));
const Story2 = lazy(() => import('./pages/Stories/Story2'));
const Story3 = lazy(() => import('./pages/Stories/Story3'));
const Story4 = lazy(() => import('./pages/Stories/Story4'));
const Story5 = lazy(() => import('./pages/Stories/Story5'));
const Story6 = lazy(() => import('./pages/Stories/Story6'));
const Story11 = lazy(() => import('./pages/Stories/Story11'));
const Story12 = lazy(() => import('./pages/Stories/Story12'));
const Story13 = lazy(() => import('./pages/Stories/Story13'));
const Story14 = lazy(() => import('./pages/Stories/Story14'));
const Story15 = lazy(() => import('./pages/Stories/Story15'));
const Story16 = lazy(() => import('./pages/Stories/Story16'));
const Story17 = lazy(() => import('./pages/Stories/Story17'));
const Story18 = lazy(() => import('./pages/Stories/Story18'));
const Story19 = lazy(() => import('./pages/Stories/Story19'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/stories" element={<Projects />} />
        <Route path="/stories/1" element={<Story1 />} />
        <Route path="/stories/2" element={<Story2 />} />
        <Route path="/stories/3" element={<Story3 />} />
        <Route path="/stories/4" element={<Story4 />} />
        <Route path="/stories/5" element={<Story5 />} />
        <Route path="/stories/6" element={<Story6 />} />
        <Route path="/stories/11" element={<Story11 />} />
        <Route path="/stories/12" element={<Story12 />} />
        <Route path="/stories/13" element={<Story13 />} />
        <Route path="/stories/14" element={<Story14 />} />
        <Route path="/stories/15" element={<Story15 />} />
        <Route path="/stories/16" element={<Story16 />} />
        <Route path="/stories/17" element={<Story17 />} />
        <Route path="/stories/18" element={<Story18 />} />
        <Route path="/stories/19" element={<Story19 />} />
        <Route path="/book" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
