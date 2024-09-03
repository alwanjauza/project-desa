import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "../pages/home-page";
import AppLayout from "../layouts/AppLayout";
import NotFoundPage from "../pages/notFound-page";
import LoadingPage from "../pages/loading-page";
import SejarahPage from "../pages/sejarah-page";
import BudayaPage from "../pages/budaya-page";
import LokasiPage from "../pages/lokasi-page";
import SaranaPage from "../pages/sarana-page";
import LoginPage from "../pages/login-page";
import ProtectedRoute from "./ProtectedRoute";
import DashboardPage from "../pages/dashboard-page";
import Sidebar from "../components/common/sidebar";
import ListingSchedule from "@/pages/schedule/listing-schedule";
import NewSchedule from "@/pages/schedule/new-schedule";
import UpdateSchedule from "@/pages/schedule/update-schedule";
import SchedulesPage from "@/pages/schedules-page";
import PengurusPage from "@/pages/pengurus-page";
import ListingUser from "@/pages/user/listing-user";
import NewUser from "@/pages/user/new-user";
import UpdateUser from "@/pages/user/update-user";
import ProfilePage from "@/pages/user/profile/profile-page";
import NewPassPage from "@/pages/user/profile/newpass-page";
import DetilSchedule from "@/pages/detail-schedule-page";

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
    <Routes>
      <Route path='*' element={<NotFoundPage />} />
      <Route path='/auth/login' element={<LoginPage />} />
      <Route
        path='/profile/:id'
        element={
          <ProtectedRoute
            element={
              <Sidebar>
                <ProfilePage />
              </Sidebar>
            }
          />
        }
      />
      <Route
        path='/profile/newpassword/:id'
        element={
          <ProtectedRoute
            element={
              <Sidebar>
                <NewPassPage />
              </Sidebar>
            }
          />
        }
      />
      <Route
        path='/dashboard'
        element={
          <ProtectedRoute
            element={
              <Sidebar>
                <DashboardPage />
              </Sidebar>
            }
          />
        }
      />
      <Route
        path='/dashboard/schedule'
        element={
          <ProtectedRoute
            element={
              <Sidebar>
                <ListingSchedule />
              </Sidebar>
            }
          />
        }
      />
      <Route
        path='/dashboard/schedule/new'
        element={
          <ProtectedRoute
            element={
              <Sidebar>
                <NewSchedule />
              </Sidebar>
            }
          />
        }
      />
      <Route
        path='/dashboard/schedule/update/:id'
        element={
          <ProtectedRoute
            element={
              <Sidebar>
                <UpdateSchedule />
              </Sidebar>
            }
          />
        }
      />
      <Route
        path='/dashboard/user'
        element={
          <ProtectedRoute
            element={
              <Sidebar>
                <ListingUser />
              </Sidebar>
            }
          />
        }
      />
      <Route
        path='/dashboard/user/new'
        element={
          <ProtectedRoute
            element={
              <Sidebar>
                <NewUser />
              </Sidebar>
            }
          />
        }
      />
      <Route
        path='/dashboard/user/update/:id'
        element={
          <ProtectedRoute
            element={
              <Sidebar>
                <UpdateUser />
              </Sidebar>
            }
          />
        }
      />
      <Route
        path='/'
        element={
          <AppLayout>
            <HomePage />
          </AppLayout>
        }
      />
      <Route
        path='/sejarah'
        element={
          <AppLayout>
            <SejarahPage />
          </AppLayout>
        }
      />
      <Route
        path='/budaya'
        element={
          <AppLayout>
            <BudayaPage />
          </AppLayout>
        }
      />
      <Route
        path='/lokasi'
        element={
          <AppLayout>
            <LokasiPage />
          </AppLayout>
        }
      />
      <Route
        path='/sarana'
        element={
          <AppLayout>
            <SaranaPage />
          </AppLayout>
        }
      />
      <Route
        path='/jadwal'
        element={
          <AppLayout>
            <SchedulesPage />
          </AppLayout>
        }
      />
      <Route
        path='/jadwal/:id'
        element={
          <AppLayout>
            <DetilSchedule />
          </AppLayout>
        }
      />
      <Route
        path='/perangkat'
        element={
          <AppLayout>
            <PengurusPage />
          </AppLayout>
        }
      />
    </Routes>
  );
};

export default AppRoute;
