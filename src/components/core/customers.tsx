'use client'

import React from 'react'

import { LogoCarousel } from './animations/logo-carousel'

export function Customers() {
	return (
		<div className='container mx-auto'>
			<LogoCarousel columnCount={3} />
		</div>
	)
}
