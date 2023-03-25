import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// const ref = useRef(); после чего в любой элемент сделать пропром ref
// например <div ref={ref}></div> теперь при обращении к переменной реф будет обращение к элементу например ref.style.width = '100px';

// почитать о useCallback, useMemo, useRef,BrowserRouter

