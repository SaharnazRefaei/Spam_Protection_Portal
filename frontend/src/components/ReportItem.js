import React, { useState } from 'react';

import Card from './shared/UIElements/Card';
import Button from './shared/UIElements/Button';

import './ReportItem.css';

const ReportItem = (props) => {
	const [block, setBlock] = useState(true);
	const reportBlockHandler = (event) => {
		setBlock(!block);
	};
	return (
		<li className="report-item">
			<Card className="report-item__content">
				<div className="report-item__info">
					<div className="report-item__left">
						<h2>
							<span>Id: </span>
							{props.id}
						</h2>
						<h2>
							<span>State: </span>
							{props.state}
						</h2>
						<Button info>Details</Button>
					</div>
					<div className="report-item__middle">
						<h2>
							<span>Type: </span>
							{props.type}
						</h2>
						<h2>
							<span>Message: </span>
							{props.message}
						</h2>
					</div>
					<div className="report-item__right">
						<Button reject big onClick={reportBlockHandler}>
							{block ? 'Block' : 'unblock'}
						</Button>
						<Button accept big to={`/reports/${props.id}`}>
							Resolve
						</Button>
					</div>
				</div>
			</Card>
		</li>
	);
};

export default ReportItem;
