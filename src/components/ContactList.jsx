import React, { useContext } from 'react';
import styled from 'styled-components';
import { CtxDispatch, CtxState } from './../contexts/FriendsCtxProvider';

const List = styled.ul``;

const ListItem = styled.li`
	display: flex;
	width: 80vw;
	margin: 0 auto;
	padding: 24px 0;
	border-bottom: 1px solid #fcb44d;

	&:last-child {
		border: none;
	}
`;

const Span = styled.span`
	padding: 0 10px;
	text-align: center;
`;

const No = styled(Span)`
	width: 10px;
`;

const Name = styled(Span)`
	flex: 1;
	cursor: pointer;
`;

const Phone = styled(Span)`
	flex: 2;
`;

const Button = styled.button`
	padding: 5px 10px;
	cursor: pointer;

	&:nth-of-type(1) {
		margin: 0 5px;
	}
`;

const ContactItem = ({ friend, no }) => {
	const { seq, name, phone, bef } = friend;

	const { editing } = useContext(CtxState);
	const dispatch = useContext(CtxDispatch);

	return (
		<ListItem>
			<No>{no}</No>
			<Name
				className={bef && 'on'}
				onClick={() => {
					dispatch({
						type: 'BEF',
						seq,
					});
				}}
			>
				{name}
			</Name>
			<Phone>{phone}</Phone>
			<Button
				disabled={editing}
				onClick={() => {
					dispatch({ type: 'EDITING', seq });
				}}
			>
				수정
			</Button>
			<Button
				disabled={editing}
				onClick={() => {
					dispatch({ type: 'DEL', seq });
				}}
			>
				삭제
			</Button>
		</ListItem>
	);
};

const ContactList = () => {
	const { friends } = useContext(CtxState);

	return (
		<List>
			{friends.map((friend, idx) => (
				<ContactItem friend={friend} no={idx + 1} key={friend.seq} />
			))}
		</List>
	);
};

export default ContactList;
