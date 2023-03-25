import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageOne from './components/homepage/PageOne';
import { Layout } from './components/Layouts/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageOne />}></Route>
          <Route path="five-days"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
