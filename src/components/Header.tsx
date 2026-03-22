import { Link } from '@tanstack/react-router';

export default function Header() {
	return (
		<>
			<header className='bg-secondary-foreground flex items-center p-4 text-white shadow-lg'>
				<h1 className='ml-4 text-xl font-semibold'>
					<Link
						to='/'
						className='flex items-center gap-2'
					>
						<img
							src='/doggo.png'
							alt='Good coloc Logo'
							className='h-10 rounded-[99px]'
						/>
						Good coloc
					</Link>
				</h1>
			</header>
		</>
	);
}
