import React from 'react';
import { render } from "react-dom";

import App from './components/App';

import './index.scss';

const container = document.getElementById('root');
render(<App />, container);