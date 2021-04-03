/* eslint-disable no-secrets/no-secrets */
import React from "react";

const Card: React.FC = () => (
	<div className="m-auto px-4 py-8 max-w-xl">
		<div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg hover:shadow-2xl transition-shadow">
			<div className="px-4 py-2 mt-2 bg-white dark:bg-gray-700 rounded-lg">
				<div className="bg-white dark:bg-gray-700 mb-2 py-3">
					<h4 className="font-bold tracking-wider">Hello World</h4>
				</div>
				<div className="mb-2">
					<p>You are a rockstar! Never forget it!</p>
				</div>
				<div className="flex justify-between items-center bg-white dark:bg-gray-700 py-3">
					<div className="flex -space-x-2 overflow-hidden">
						<img
							className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-transparent"
							src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
						<img
							className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-transparent"
							src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
						<img
							className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-transparent"
							src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
							alt=""
						/>
						<img
							className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-transparent"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
					</div>
					<p>Footer</p>
				</div>
			</div>
		</div>
	</div>
);

export default Card;
