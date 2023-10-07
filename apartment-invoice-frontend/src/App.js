
import './App.css';
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ComplainPage from './pages/ComplainPage';
import BillPage from './pages/BillPage';
import FeaturesPage from './pages/FeaturesPage';
import PaymentPage from './pages/PaymentPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ActivityDetailsPage from './pages/ActivityDetailsPage';
import DonatePage from './pages/DonatePage';
import ResultsPage from './pages/ResultsPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route  path='*' element={<NotFoundPage />} />
        <Route  path='/complain' element={<ComplainPage />} />
        <Route  path='/my-bills' element={<BillPage />} />
        <Route path='/features' element={<FeaturesPage />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/activities' element={<ActivitiesPage />} />
        <Route path='/activity-details' element={<ActivityDetailsPage />} />
        <Route path='/donate' element={<DonatePage />} />
        <Route path='/results' element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
