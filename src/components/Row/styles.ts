import styled from "styled-components"

export const MovieRow = styled.div`
	font-size: 1.2rem; // 16px -> 19.2px
	margin-bottom: 2rem;

	h2 {
		margin-left: 2rem;
	}

	div.movieRow-Container {
		overflow-x: hidden;
		padding-left: 2rem; // 30px

		div.movieRow-List {
			white-space: nowrap;
		}

		.item {
			display: inline-block;
			width: 12rem;

			img {
				width: 100%;
				transform: scale(0.9);

				transition: transform ease 0.35s;
				&:hover {
					transform: scale(1);
					cursor: pointer;
				}
			}
		}
	}
`
