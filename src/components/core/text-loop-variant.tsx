import { TextLoop } from './animations/looping-text'

export function TextLoopVariant() {
	return (
		<TextLoop
			className='overflow-y-clip inline-flex whitespace-pre-wrap'
			transition={{
				type: 'spring',
				stiffness: 900,
				damping: 80,
				mass: 10,
			}}
			variants={{
				initial: {
					y: 20,
					rotateX: 90,
					opacity: 0,
					// Use specific filter style to ensure non-negative values
					style: {
						filter: 'blur(6px)',
					},
				},
				animate: {
					y: 0,
					rotateX: 0,
					opacity: 1,
					style: {
						filter: 'blur(0px)',
					},
				},
				exit: {
					y: -20,
					rotateX: -90,
					opacity: 0,
					style: {
						filter: 'blur(4px)',
					},
				},
			}}>
			<span>product</span>
			<span>engineering</span>
			<span>marketing</span>
			<span>sales</span>
		</TextLoop>
	)
}
