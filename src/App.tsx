import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { LanguageProvider } from './context/LanguageContext'
import { CheckoutSummary } from './pages/CheckoutSummary'
import { SuccessPage } from './pages/SuccessPage'
import { LanguageSelectionPage } from './pages/LanguageSelectionPage'

function App() {
  return (
    <LanguageProvider>
      <AppProvider>
        <Router>
          <Routes>
            {/* Language selection page */}
            <Route path="/" element={<LanguageSelectionPage />} />
            
            {/* Language-specific routes */}
            <Route path="/:lang/checkout" element={<CheckoutSummary />} />
            <Route path="/:lang/success" element={<SuccessPage />} />
            
            {/* Redirect old routes to language selection */}
            <Route path="/checkout" element={<Navigate to="/" replace />} />
            <Route path="/success" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AppProvider>
    </LanguageProvider>
  )
}

export default App