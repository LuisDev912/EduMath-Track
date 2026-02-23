import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainLayout = lazy(() => import('./layout/MainLayout.tsx'));
const LandingPage = lazy(() => import('./pages/LandingPage.tsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.tsx'))

function App() {
  return (
    <Suspense fallback={<div style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '15%',
      fontSize: 'var(--font-size-lg)',
      fontWeight: '600'
    }}> wait until the content loads </div>} >

      <Routes>
        <Route element={<MainLayout />}>

          <Route path="/" element={<LandingPage />} />
          <Route path='*' element={<NotFoundPage />} />

        </Route>
      </Routes>

    </Suspense>
  )
}

export default App
