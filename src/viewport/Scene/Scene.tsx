import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteLogger from './RouteLogger';
import Home from '@/pages/Home';
import Detail from '@/pages/Detail';

const Scene = () => (
  <Suspense>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id/detail-restaurant" element={<Detail />} />
      </Routes>
      <RouteLogger></RouteLogger>
    </BrowserRouter>
  </Suspense>
);

export default Scene;
