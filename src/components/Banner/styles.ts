import styled, { css } from "styled-components"

interface BannerProps {
	imageUrl: string
}

export const BannerContainer = styled.section<BannerProps>`
	height: 100vh;
	${props =>
		props.imageUrl &&
		css`
			background-image: url(${props.imageUrl});
		`}
	background-size: cover;
	background-position: center;

	div.verticalFade {
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;

		padding-top: 4.3rem;
		padding-left: 2rem;
		padding-bottom: 10rem;

		background: linear-gradient(to top, var(--background-color) 10%, transparent 90%),
			linear-gradient(to right, var(--background-color) 30%, transparent 70%);

		h1.name {
			font-size: 3.8rem;
			font-weight: bold;
		}

		div.info {
			font-size: 1.4rem;
			font-weight: bold;
			margin-top: 1rem;

			& * {
				display: inline-block;
				margin-right: 1rem;
			}
			.points {
				color: var(--green-positive);
			}
		}

		div.description {
			margin-top: 1rem;
			max-width: 40%;

			font-size: 1.4rem;
			color: var(--secondary-white);

			text-align: justify;
		}

		div.buttons {
			margin-top: 1rem;
			cursor: pointer;

			& * {
				display: inline-block;

				font-size: 1.4rem;
				font-weight: bold;

				padding: 1rem 1.55rem;
				border-radius: 0.3rem;
				opacity: 0.9;

				text-decoration: none;
				transition: opacity ease 0.25s;

				margin-right: 1rem;
			}

			& *:hover {
				opacity: 0.6;
			}

			& *:first-child {
				background-color: var(--text-color);
				color: var(--background-color);
			}

			& *:last-child {
				color: var(--text-color);
				background-color: var(--gray-contrast);
			}
		}
		div.genres {
			margin-top: 1rem;

			color: var(--secondary-white);
			font-size: 1.2rem;
		}
	}
`
