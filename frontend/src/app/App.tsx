import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// --- layouts ---
const MainLayout = lazy(() => import('./layout/MainLayout.tsx'));
const PublicLayout = lazy(() => import('./layout/PublicLayout.tsx'));
const SettingsLayout = lazy(() => import('../features/settings/pages/SettingsLayout.tsx'));

// --- pages ---
// public pages
const LandingPage = lazy(() => import('../pages/LandingPage.tsx'));
const RegisterPage = lazy(() => import('../features/auth/pages/Register.tsx'));
const LoginPage = lazy(() => import('../features/auth/pages/Login.tsx'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage.tsx'));
// game page
const GamePage = lazy(() => import('../game/page/GamePage.tsx'));
// settings pages
const SettingsPage = lazy(() => import('../features/settings/pages/SettingsPage.tsx'));
const ProfilePage = lazy(() => import('../features/settings/pages/ProfileSettings.tsx'));
const PreferencesPage = lazy(() => import('../features/settings/pages/PreferencesSettings.tsx'));

function App() {
  const { t } = useTranslation();

  return (
    <Suspense fallback={
      <div className='suspense'>
        {t('app.loading')}
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
          <Route path="/game/:mode" element={<GamePage/>} />
          <Route path='*' element={<NotFoundPage />} />

          {/* settings layout */}
          <Route path="/settings" element={<SettingsLayout />}>
            <Route index element={<SettingsPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="preferences" element={<PreferencesPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;