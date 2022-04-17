import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/home';

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
