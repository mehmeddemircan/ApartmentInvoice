import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ComplainPage from "./pages/ComplainPage";
import BillPage from "./pages/BillPage";
import FeaturesPage from "./pages/FeaturesPage";
import PaymentPage from "./pages/PaymentPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ActivityDetailsPage from "./pages/ActivityDetailsPage";
import DonatePage from "./pages/DonatePage";
import ResultsPage from "./pages/ResultsPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isUserLoggedIn } from "./redux/actions/AuthAction";
import ProfilePage from "./pages/ProfilePage";


function App() {

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth)

  // When we fresh the page if you are in logged in  stay logged in
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [dispatch, auth.authenticate]);
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/complain" element={<ComplainPage />} />
        <Route path="/my-bills" element={<BillPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/activity-details" element={<ActivityDetailsPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/my-profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
