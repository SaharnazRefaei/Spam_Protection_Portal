import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Button from '../components/shared/UIElements/Button';
import Card from '../components/shared/UIElements/Card';
import { useHttpClient } from '../components/shared/hooks/http-hook';

const ResolveReport = () => {
	const { sendRequest } = useHttpClient();
	const navigate = useNavigate();
	const reportId = useParams().reportId;

	const reportResolveHandler = async (event) => {
		event.preventDefault();
		try {
			await sendRequest(
				`http://localhost:5000/api/reports/${reportId}`,
				'PATCH',
				JSON.stringify({
					msg: 'Close the request',
				}),
				{
					'Content-Type': 'application/json',
				}
			);
			navigate('/');
		} catch (err) {
			console.log(err);
		}
	};
	const reportCancelHandler = (event) => {
		event.preventDefault();
		navigate('/');
	};
	return (
		<React.Fragment>
			<div className="center">
				<Card style={{ margin: '25px', height: '200px' }}>
					<p>
						Note: Lorem ipsum dolor sit amet, consectetur adipiscing
						elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua.
					</p>
					<h3>
						If you want to resolve the report, press Confirm button:
					</h3>
					<Button accept onClick={reportResolveHandler}>
						Confirm
					</Button>
					<Button reject onClick={reportCancelHandler}>
						Cancel
					</Button>
				</Card>
			</div>
		</React.Fragment>
	);
};

export default ResolveReport;
