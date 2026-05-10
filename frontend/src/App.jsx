import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegistrationScreen from './pages/Signup';
import LoginScreen from './pages/Signin';
import TraveloopLanding from './pages/Landingpage';
import CreateTripScreen from './pages/CreateTrip';
import UserProfilePage from './pages/Profile';
import CommunityTab from './pages/Community';
import PackingChecklist from './pages/Checklist';
import TripNotesScreen from './pages/TripNotes';
import ExpenseInvoiceScreen from './pages/Expense';
import Home from './pages/Home';
import './App.css';

function App() {
  return (

    
    <Router>
      <div className="app-container">
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Home />} />
          
          {/* Auth Routes */}
          <Route path="/signup" element={<RegistrationScreen />} />
          <Route path="/signin" element={<LoginScreen />} />
          
          {/* App Routes */}
          <Route path="/landing" element={<TraveloopLanding />} />
          <Route path="/create-trip" element={<CreateTripScreen />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/community" element={<CommunityTab />} />
          <Route path="/checklist/:tripId" element={<PackingChecklist />} />
          <Route path="/notes/:tripId" element={<TripNotesScreen />} />
          <Route path="/expense/:tripId" element={<ExpenseInvoiceScreen />} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/landing" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
