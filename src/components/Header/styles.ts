import styled, { css } from "styled-components"

interface HeaderProps {
	isTransparent: boolean
}

export const HeaderElement = styled.header<HeaderProps>`
	position: fixed;
	z-index: 999;
	top: 0;
	left: 0;

	width: 100%;
	height: 4rem;
	padding: 2.5rem 2rem;

	display: flex;
	justify-content: space-between;
	align-items: center;

	transition: background-color ease 0.2s;

	${props =>
		props.isTransparent &&
		css`
			background-color: transparent;
		`}
	${props =>
		!props.isTransparent &&
		css`
			background-color: var(--second-black);
		`}

	.logo {
		height: 1.8rem;
	}

	.user {
		height: 2.2rem;
	}

	.logo img,
	.user img {
		height: 100%;
	}

	.user img {
		border-radius: 0.2rem;
	}
`
