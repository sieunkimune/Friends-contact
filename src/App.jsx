import React from 'react';
import FriendsCtxProvider from './contexts/FriendsCtxProvider';
import ContactContainer from './components/ContactContainer';

const App = () => {
	return (
		<>
			<FriendsCtxProvider>
				<ContactContainer />
			</FriendsCtxProvider>
		</>
	);
};

export default App;
