'use client'

import React from 'react'

import { LogoCarousel } from './animations/logo-carousel'

export function Customers() {
	return (
		<div className='container mx-auto'>
			<div className='hidden sm:block'>
				<LogoCarousel columnCount={3} />
			</div>
			<div className='block sm:hidden py-4'>
				<LogoCarousel columnCount={2} />
			</div>
		</div>
	)
}
