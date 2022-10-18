import React from 'react';

import ReportItem from './ReportItem';
import Card from './shared/UIElements/Card';
import './ReportsList.css';

const ReportsList = (props) => {
	if (props.items.length === 0) {
		return (
			<div className="center">
				<Card>
					<h2>No report found.</h2>
				</Card>
			</div>
		);
	}

	return (
		<React.Fragment>
			<div className="center">
				<h3>Reports</h3>
			</div>
			<ul className="reports-list">
				{props.items.map((report) => (
					<ReportItem
						key={report.id}
						id={report.id}
						type={report.type}
						state={report.state}
						message={report.message}
					/>
				))}
			</ul>
		</React.Fragment>
	);
};

export default ReportsList;
