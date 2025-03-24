import { twMerge } from 'tailwind-merge'
import { RainbowButton } from './rainbow-btn'
const rows = [
	{
		row: [
			{
				label: 'My new app',
				className: '[animation-delay:-26s] [animation-duration:30s]',
			},
			{
				label: 'Todo manager',
				className: '[animation-delay:-8s] [animation-duration:30s]',
			},
			{
				label: 'Task tracker',
				className: '[animation-delay:-18s] [animation-duration:30s]',
			},
			{
				label: 'Todo list',
				className: '[animation-delay:-22s] [animation-duration:30s]',
			},
		],
	},
	{
		row: [
			{
				label: 'My todo app',
				className: '[animation-delay:-40s] [animation-duration:40s]',
			},
			{
				label: 'Project manager',
				className: '[animation-delay:-20s] [animation-duration:40s]',
			},
			{
				label: 'Task app',
				className: '[animation-delay:-30s] [animation-duration:40s]',
			},
			{
				label: 'Todo tracker',
				className: '[animation-delay:-35s] [animation-duration:40s]',
			},
		],
	},
	{
		row: [
			{
				label: 'My project',
				className: '[animation-delay:-10s] [animation-duration:40s]',
			},
			{
				label: 'Todo manager',
				className: '[animation-delay:-32s] [animation-duration:40s]',
			},
			{
				label: 'Task list',
				className: '[animation-delay:-22s] [animation-duration:40s]',
			},
			{
				label: 'My new todo',
				className: '[animation-delay:-28s] [animation-duration:40s]',
			},
		],
	},
	{
		row: [
			{
				label: 'New project',
				className: '[animation-delay:-45s] [animation-duration:45s]',
			},
			{
				label: 'Todo keeper',
				className: '[animation-delay:-23s] [animation-duration:45s]',
			},
			{
				label: 'My tasks',
				className: '[animation-delay:-34s] [animation-duration:45s]',
			},
			{
				label: 'Todo app',
				className: '[animation-delay:-39s] [animation-duration:45s]',
			},
		],
	},
	{
		row: [
			{
				label: 'Productivity app',
				className: '[animation-delay:-55s] [animation-duration:60s]',
			},
			{
				label: 'My todo list',
				className: '[animation-delay:-20s] [animation-duration:60s]',
			},
			{
				label: 'Task organizer',
				className: '[animation-delay:-38s] [animation-duration:60s]',
			},
			{
				label: 'Todo tracker',
				className: '[animation-delay:-45s] [animation-duration:60s]',
			},
		],
	},
	{
		row: [
			{
				label: 'New todo app',
				className: '[animation-delay:-9s] [animation-duration:40s]',
			},
			{
				label: 'Task manager',
				className: '[animation-delay:-28s] [animation-duration:40s]',
			},
			{
				label: 'My app',
				className: '[animation-delay:-18s] [animation-duration:40s]',
			},
			{
				label: 'Todo planner',
				className: '[animation-delay:-33s] [animation-duration:40s]',
			},
		],
	},
]

export const FooterCta = () => (
	<section className=' h-[450px] ' id='features'>
		<div
			aria-hidden='true'
			className='relative h-full overflow-hidden  py-24 ring-inset sm:py-32 bg-neutral-950'>
			<div className='bg-black/5 backdrop-blur-[1px] absolute inset-0 z-10'></div>
			<div className='-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 mx-auto w-full max-w-[90%] text-center z-20'>
				<div className='relative z-20 space-y-12'>
					<h2 className='max-w-3xl text-center font-bold text-4xl leading-tight tracking-tighter sm:text-5xl md:max-w-4xl md:text-6xl lg:leading-[1.1] text-white mx-auto'>
						Are you ready to Ship?
					</h2>
					<p className='text-white/90 text-center text-lg text-pretty max-w-xl mx-auto'>
						It's never been easier to go from idea to real product than now
						thanks to Bolt. Let's build the app you always wanted.
					</p>
					<RainbowButton>Create an App</RainbowButton>
				</div>
			</div>
			<div className='absolute inset-0 z-0 grid grid-cols-1 pt-0 [container-type:inline-size]'>
				{rows.map((rowData, index) => (
					<div className='group relative' key={index}>
						<div className='absolute inset-x-0 top-1/2 h-0.5 bg-[length:12px_100%] bg-gradient-to-r from-[2px]  to-[2px] from-white/5' />
						<div className='absolute inset-x-0 bottom-0 h-0.5 bg-[length:12px_100%] bg-gradient-to-r from-[2px]  to-[2px] group-last:hidden from-white/15' />
						{rowData.row.map((logo, _logoIndex) => (
							<div
								key={logo.label}
								className={twMerge(
									logo.className,
									'absolute top-[50px] flex items-center gap-2 whitespace-nowrap px-3 py-1',
									'rounded-full bg-gradient-to-t from-50%  ring-inset backdrop-blur-sm from-neutral-950/50 to-neutral-800/50 ring-white/10 ring',
									'[--move-x-from:-100%] [--move-x-to:calc(100%+100cqw)] [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:running] [animation-timing-function:linear]',
									'shadow-[0_0_15px_rgba(0,0,0,0.2)]'
								)}>
								⚡️
								<span className='font-medium  text-sm/6 text-white'>
									{logo.label}
								</span>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	</section>
)
