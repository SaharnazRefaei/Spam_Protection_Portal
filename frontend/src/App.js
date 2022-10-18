import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Report from './pages/Reports';
import ResolveReport from './pages/ResolveReport';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Report />} />
				<Route path="/reports/:reportId" element={<ResolveReport />} />
			</Routes>
		</Router>
	);
}

export default App;
