import React, { useEffect, useState } from 'react';

import ReportsList from '../components/ReportsList';
import LoadingSpinner from '../components/shared/UIElements/LoadingSpinner';
import { useHttpClient } from '../components/shared/hooks/http-hook';

const Report = () => {
	const { isLoading, sendRequest } = useHttpClient();
	const [loadedReports, setLoadedReports] = useState();

	useEffect(() => {
		const fetchReports = async () => {
			try {
				const responseData = await sendRequest(
					'http://localhost:5000/api/reports'
				);

				setLoadedReports(responseData.reports);
			} catch (err) {}
		};
		fetchReports();
	}, [sendRequest]);

	return (
		<React.Fragment>
			{isLoading && (
				<div className="center">
					<LoadingSpinner />
				</div>
			)}
			{!isLoading && loadedReports && (
				<ReportsList items={loadedReports} />
			)}
		</React.Fragment>
	);
};

export default Report;
