import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { CheckoutSummary } from './pages/CheckoutSummary'
import { SuccessPage } from './pages/SuccessPage'

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CheckoutSummary />} />
          <Route path="/checkout" element={<CheckoutSummary />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </Router>
    </AppProvider>
  )
}

export default App