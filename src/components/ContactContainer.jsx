import React, { useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ContactAdd from './ContactAdd';
import ContactEdit from './ContactEdit';
import ContactList from './ContactList';
import { CtxState } from '../contexts/FriendsCtxProvider';

const GlobalStyle = createGlobalStyle`
*{margin: 0;padding: 0;}
ul,ol,li{list-style: none;}
.sr-only{
    position: absolute;
    left: -9999px;}
.on{
    color:#f89b9b;
    font-weight: 600;}
`;

const ccAlign = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	background-color: #ffd496;
`;

const Header = styled.header`
	position: relative;
`;

const Img = styled.img`
	position: absolute;
	left: 50%;
	top: 20px;
	width: 70px;
	margin-left: -220px;
`;

const Title = styled(ccAlign)`
	height: 100px;
	color: #99d53b;
	text-shadow: 3px 3px 3px #a34f41;
`;

const Section = styled.section`
	padding: 10px 0;
`;
const Footer = styled(ccAlign)`
	height: 50px;
	font-size: 12px;
	border-top: 1px solid #fcb44d;
`;

const ContactContainer = () => {
	const { editing } = useContext(CtxState);

	return (
		<>
			<GlobalStyle />

			<Container>
				<Header>
					<Img src="https://ifh.cc/g/NX1Jvn.png" alt="메론빵" />
					<Title as="h1">친구 연락처 - {editing ? '수정' : '등록'}</Title>

					{editing ? <ContactEdit /> : <ContactAdd />}
				</Header>
				<Section>
					<ContactList />
				</Section>
				<Footer>&copy;Designed by 김시은</Footer>
			</Container>
		</>
	);
};

export default ContactContainer;
