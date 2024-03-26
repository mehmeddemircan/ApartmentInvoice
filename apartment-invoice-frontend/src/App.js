import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ComplainPage from "./pages/ComplainPage";

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
import PostsPage from "./pages/PostsPage";
import MyPostsPage from "./pages/MyPostsPage";
import MyCommentsPage from "./pages/MyCommentsPage";
import SubscriptionsPage from "./pages/SubscriptionsPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import GiveOrderPage from "./pages/GiveOrderPage";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

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

        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/:subscriptionId/payment" element={<PaymentPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route
          path="/activities/:activityId/details"
          element={<ActivityDetailsPage />}
        />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/my-profile" element={<ProfilePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/my-posts" element={<MyPostsPage />} />
        <Route path="/my-comments" element={<MyCommentsPage />} />
        <Route path="/pay-aidat" element={<SubscriptionsPage />} />
        <Route path="/my-orders" element={<MyOrdersPage />} />
        <Route path="/give-order" element={<GiveOrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
