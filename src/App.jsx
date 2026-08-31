import { Navigate, Route, Routes } from "react-router-dom";
import { useStore } from "./store.jsx";
import AppLayout from "./components/AppLayout.jsx";
import SignIn from "./pages/SignIn.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import PrizeWheel from "./pages/PrizeWheel.jsx";
import SellingPage from "./pages/SellingPage.jsx";
import Home from "./pages/Home.jsx";
import Guides from "./pages/Guides.jsx";
import GuideDetail from "./pages/GuideDetail.jsx";
import Lesson from "./pages/Lesson.jsx";
import AiTools from "./pages/AiTools.jsx";
import AiChat from "./pages/AiChat.jsx";
import Practice from "./pages/Practice.jsx";
import Explore from "./pages/Explore.jsx";
import Challenges from "./pages/Challenges.jsx";
import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Settings.jsx";
import Prompts from "./pages/Prompts.jsx";
import Weekly from "./pages/Weekly.jsx";
import Pay from "./pages/Pay.jsx";
import Certificate from "./pages/Certificate.jsx";
import CertificatePublic from "./pages/CertificatePublic.jsx";

function Private({ children }) {
  const { session } = useStore();
  if (!session) return <Navigate to="/auth/signin" replace />;
  return children;
}

export default function App() {
  return (
    <Routes>
      <Route path="/auth/signin" element={<SignIn />} />
      <Route path="/auth/reset-password" element={<ForgotPassword />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/certificates/public/:certId" element={<CertificatePublic />} />
      <Route
        path="/offer/wheel"
        element={
          <Private>
            <PrizeWheel />
          </Private>
        }
      />
      <Route
        path="/offer/plans"
        element={
          <Private>
            <SellingPage />
          </Private>
        }
      />
      <Route
        element={
          <Private>
            <AppLayout />
          </Private>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/guides/:guideId" element={<GuideDetail />} />
        <Route path="/explore-ai-tools" element={<Explore />} />
        <Route path="/ai-tools" element={<AiTools />} />
        <Route path="/ai-tools/:toolId" element={<AiChat />} />
        <Route path="/ai-practice" element={<Practice />} />
        <Route path="/prompts" element={<Prompts />} />
        <Route path="/avances" element={<Weekly />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/challenges/:challengeId" element={<Challenges />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/settings" element={<Settings />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/guides/:guideId/certificate" element={<Certificate />} />
      </Route>
      <Route
        path="/guides/:guideId/:unitId/:lessonId"
        element={
          <Private>
            <Lesson />
          </Private>
        }
      />
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
