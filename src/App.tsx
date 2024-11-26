import { Routes, Route } from 'react-router-dom';
import UrlShortenerMain from './modules/UrlShortener/components';
import ViewUrlShortener from './modules/UrlShortener/components/view';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<UrlShortenerMain />} />
        <Route path="/:code" element={<ViewUrlShortener />} />
      </Routes>
    </>
  );
}

export default App;
