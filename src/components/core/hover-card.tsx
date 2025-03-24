import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface CardProps extends ComponentPropsWithoutRef<'div'> {
	name: string
	className?: string
	backgroundImage?: string
	backgroundImageComponent?: ReactNode
	background?: ReactNode
	Icon?: React.ElementType
	description: string
	href: string
	cta: string
}

const HoverCard = ({
	name,
	className,
	background,
	backgroundImage,
	backgroundImageComponent,
	description,
	href,
	cta,
	...props
}: CardProps) => (
	<div
		key={name}
		className={cn(
			'group relative flex flex-col justify-between overflow-hidden',
			// dark styles
			'transform-gpu bg-background [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
			className
		)}
		{...props}>
		{/* Image component with full control */}
		{backgroundImageComponent && (
			<div className='absolute inset-0 ml-24 z-0 overflow-hidden'>
				<div className='transition-transform duration-300 group-hover:scale-110'>
					{backgroundImageComponent}
				</div>
			</div>
		)}

		{/* Legacy background image support */}
		{!backgroundImageComponent && backgroundImage && (
			<div
				className='absolute inset-0 ml-24 z-0 transition-transform duration-300 group-hover:scale-110'
				style={{
					backgroundImage: `url(${backgroundImage})`,
				}}
			/>
		)}

		<div className='pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:translate-y-2'>
			<h3 className='text-xl font-semibold text-neutral-300'>{name}</h3>
			<p className='max-w-lg text-neutral-400'>{description}</p>
		</div>

		<div
			className={cn(
				'pointer-events-none absolute bottom-0 flex w-full translate-y-1 transform-gpu flex-row items-center p-4 opacity-30 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'
			)}>
			<a
				href={href}
				className='pointer-events-auto inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium  text-neutral-300 hover:text-white'>
				{cta}
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='ms-2 h-4 w-4 rtl:rotate-180'>
					<path d='M5 12h14' />
					<path d='m12 5 7 7-7 7' />
				</svg>
			</a>
		</div>
		<div className='pointer-events-none absolute inset-0 transform-gpu transition-all duration-300  group-hover:bg-neutral-800/10' />
	</div>
)

export { HoverCard }
