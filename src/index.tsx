import { createRoot } from 'react-dom/client';

// import App from './ui/App';
import App from './ui/MimicWebChat';

const rootElement = document.getElementById('webchat');

rootElement && createRoot(rootElement).render(<App />);
