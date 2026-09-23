import { useEffect } from 'react';
import { bodyTemplate } from './bodyTemplate';
import { initPortfolio } from './interaction';
import './style.css';

export default function App() {
  useEffect(() => {
    initPortfolio();
  }, []);

  return <div id="portfolio-root" dangerouslySetInnerHTML={{ __html: bodyTemplate }} />;
}
