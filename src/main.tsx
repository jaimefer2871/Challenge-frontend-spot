import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.tsx'
import UrlShortenerMain from './modules/UrlShortener/components/index.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById('root')!).render(

  <UrlShortenerMain />
)
