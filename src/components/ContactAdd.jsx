import React, { useContext } from 'react';
import styled from 'styled-components';
import { CtxDispatch, CtxNextSeq } from '../contexts/FriendsCtxProvider';
import useInputs from '../hooks/useInputs';

const Container = styled.div`
	padding: 10px;
	background-color: #99d53b;
`;

const Form = styled.form`
	display: flex;
	justify-content: center;
`;

const Input = styled.input.attrs({ autoComplete: 'off' })`
	border: none;
	outline: none;
	padding: 10px 5px;
	border-radius: 2px;
	text-align: center;
`;
const InputName = styled(Input)`
	width: 50vw;
`;

const InputPhone = styled(Input)`
	width: 20vw;
	min-width: 80px;
	margin: 0 16px;
`;

const Button = styled.button`
	border: none;
	outline: none;
	padding: 10px 15px;
	color: #fff;
	background-color: #fcb44d;
	border-radius: 4px;
	cursor: pointer;
`;

const ContactAdd = () => {
	const dispatch = useContext(CtxDispatch);
	const nextSeq = useContext(CtxNextSeq);

	const [inputs, changeFn, emptyFn, $name] = useInputs({ name: '', phone: '' });

	const { name, phone } = inputs;

	const submitFn = (evt) => {
		evt.preventDefault();

		if (name === '' || phone === '') {
			alert('이름과 전화번호를 모두 입력해주세요.');
			return false;
		}

		dispatch({
			type: 'ADD',
			data: {
				seq: nextSeq.current++,
				name,
				phone,
				bef: false,
			},
		});

		emptyFn();
	};

	return (
		<Container>
			<Form onSubmit={submitFn}>
				<label className="sr-only" htmlFor="name">
					이름 :{' '}
				</label>
				<InputName
					ref={$name}
					onChange={changeFn}
					value={name}
					type="text"
					id="name"
					placeholder="친구이름"
				/>

				<label className="sr-only" htmlFor="phone">
					연락처 :{' '}
				</label>
				<InputPhone onChange={changeFn} value={phone} type="text" id="phone" placeholder="연락처" />

				<Button>확인</Button>
			</Form>
		</Container>
	);
};

export default ContactAdd;
