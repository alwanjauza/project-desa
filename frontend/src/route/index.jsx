import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/home-page";
import AppLayout from "../layouts/AppLayout";
import NotFoundPage from "../pages/notFound-page";
import { useEffect, useState } from "react";
import LoadingPage from "../pages/loading-page";
import SejarahPage from "../pages/sejarah-page";
import BudayaPage from "../pages/budaya-page";
import LokasiPage from "../pages/lokasi-page";
import SaranaPage from "../pages/sarana-page";

const AppRoute = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [location]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <AppLayout>
      <Routes>
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/sejarah' element={<SejarahPage />} />
        <Route path='/budaya' element={<BudayaPage />} />
        <Route path='/lokasi' element={<LokasiPage />} />
        <Route path='/sarana' element={<SaranaPage />} />
      </Routes>
    </AppLayout>
  );
};

export default AppRoute;
