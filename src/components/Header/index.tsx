import React, { useState, useEffect } from "react"

// Visual

import { HeaderElement } from "./styles"

import LogoIMG from "../../assets/logo.svg"
import userIMG from "../../assets/user.png"

function Header(): JSX.Element {
	const [isTransparent, setTransparent] = useState(true)

	useEffect(() => {
		const scrollListener: EventListenerOrEventListenerObject = () => {
			if (window.scrollY > 100) setTransparent(false)
			else setTransparent(true)
		}
		window.addEventListener("scroll", scrollListener)

		return () => {
			window.removeEventListener("scroll", scrollListener)
		}
	}, [])
	return (
		<HeaderElement isTransparent={isTransparent}>
			<div className="logo">
				<a href="/">
					<img src={LogoIMG} alt="Netflix" />
				</a>
			</div>
			<div className="user">
				<a href="/">
					<img src={userIMG} alt="Usuário" />
				</a>
			</div>
		</HeaderElement>
	)
}

export default Header
