import React, { useState, useEffect } from "react"

// Connection

import conn from "../../services/connection"
import { categoryList } from "../../services/requests"

// Visual

import { BannerContainer } from "./styles"

function Banner(): JSX.Element {
	const [bannerData, setBannerData] = useState([])

	useEffect(() => {
		// Get Random Movie
	}, [])

	return (
		<BannerContainer>
			{bannerData && (
				<div>
					<p>Filme em Destaque</p>
				</div>
			)}
		</BannerContainer>
	)
}

export default Banner
