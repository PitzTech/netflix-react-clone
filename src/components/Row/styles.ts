import styled from "styled-components"

export const MovieRow = styled.div`
	font-size: 1.2rem; // 16px -> 19.2px
	margin-bottom: 2rem;

	h2 {
		margin-left: 2rem;
	}

	&:hover .arrowLeft,
	&:hover .arrowRight {
		opacity: 1;
	}
	.arrowLeft,
	.arrowRight {
		font-size: 3.5rem;
		position: absolute;

		width: 2.5rem;
		height: 18rem; // 12rem * 1.5

		overflow: hidden;
		z-index: 99;
		cursor: pointer;

		display: flex;
		align-items: center;
		justify-content: center;

		background-color: rgba(0, 0, 0, 0.75);
		opacity: 0;

		transition: opacity ease 0.5s;
	}

	.arrowLeft {
		left: 0;
	}

	.arrowRight {
		right: 0;
	}

	div.movieRow-Container {
		overflow-x: hidden;
		padding-left: 2rem; // 30px

		div.movieRow-List {
			white-space: nowrap;
			transition: margin-left ease 0.3s;
		}

		.item {
			display: inline-block;
			width: 12rem;

			img {
				width: 100%;
				transform: scale(0.9);

				user-select: none;

				transition: transform ease 0.35s;
				&:hover {
					transform: scale(1);
					cursor: pointer;
				}
			}
		}
	}

	@media (max-width: 760px) {
		.arrowLeft,
		.arrowRight {
			opacity: 1;
		}
	}
`
