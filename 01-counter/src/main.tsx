import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CounterApp } from './components/CounterApp';
// import App from './App.tsx';
// import { FirstApp } from './components/FirstApp.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <CounterApp initialValue={0} />
    {/* <FirstApp title="Hello, World!" subtitle="This is a subtitle" name="My name is John Doe" /> */}
  </StrictMode>
);
