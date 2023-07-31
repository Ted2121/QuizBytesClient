import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Route, Routes} from 'react-router-dom';

const basePath='/QuizBytesClient/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter basename={basePath}>
    <AuthProvider>
      <Routes>
        <Route path='/*' element={<App />}/>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
