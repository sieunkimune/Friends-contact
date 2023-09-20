import React, { createContext, useReducer, useRef } from 'react';

const initialData = {
	editing: false,
	editSeq: 0,
	friends: [
		{ seq: 1, name: '다현', phone: '010-1254-8526', bef: true },
		{ seq: 2, name: '수박이', phone: '010-3245-7896', bef: true },
		{ seq: 3, name: '수빈', phone: '010-8956-7412', bef: true },
		{ seq: 4, name: '지민', phone: '010-5647-9856', bef: false },
		{ seq: 5, name: '지수', phone: '010-7532-5741', bef: false },
		{ seq: 6, name: '지현', phone: '010-5034-2063', bef: false },
	],
};

export const CtxState = createContext(null);
export const CtxDispatch = createContext(null);
export const CtxNextSeq = createContext(null);

//상태관리로직 함수
const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			return {
				...state,
				friends: state.friends.concat(action.data),
			};

		case 'EDITING':
			return {
				...state,
				editing: !state.editing,
				editSeq: action.seq,
			};

		case 'EDIT':
			return {
				...state,
				editing: !state.editing,
				friends: state.friends.map((friend) =>
					friend.seq !== state.editSeq
						? friend
						: {
								...friend,
								name: action.name,
								phone: action.phone,
						  }
				),
			};

		case 'DEL':
			return {
				...state,
				friends: state.friends.filter((friend) => friend.seq !== action.seq),
			};

		case 'BEF':
			return {
				...state,
				friends: state.friends.map((friend) =>
					friend.seq !== action.seq
						? friend
						: {
								...friend,
								bef: !friend.bef,
						  }
				),
			};

		default:
			return state;
	}
};

const FriendsCtxProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialData);
	const nextSeq = useRef(7);

	return (
		<div>
			<CtxState.Provider value={state}>
				<CtxDispatch.Provider value={dispatch}>
					<CtxNextSeq.Provider value={nextSeq}>{children}</CtxNextSeq.Provider>
				</CtxDispatch.Provider>
			</CtxState.Provider>
		</div>
	);
};

export default FriendsCtxProvider;
