import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// layouts
const MainLayout = lazy(() => import('./layout/MainLayout.tsx'));
const PublicLayout = lazy(() => import('./layout/PublicLayout.tsx'));

// pages
const LandingPage = lazy(() => import('../pages/LandingPage.tsx'));
const RegisterPage = lazy(() => import('../features/auth/pages/Register.tsx'));
const LoginPage = lazy(() => import('../features/auth/pages/Login.tsx'));
const GamePage = lazy(() => import('../pages/GamePage.tsx'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage.tsx'));

function App() {
  return (
    <Suspense fallback={
      <div className='suspense'>
        Wait until the content loads...
      </div>
    }>

      <Routes>
        {/* public layout */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* main layout */}
        <Route element={<MainLayout />}>
          <Route path="/game" element={<GamePage/>} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>

    </Suspense>
  );
};

export default App;