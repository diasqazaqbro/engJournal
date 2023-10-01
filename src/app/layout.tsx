import LayoutNav from '@/widgets/LayoutNav/ui/LayoutNav'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './style/adaptive.sass'
import './style/global.sass'

const montserrat = Montserrat({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	fallback: ['Arial', 'sans-serif'],
})

export const metadata: Metadata = {
	title: 'EngJournal | good practice for english',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<main className='layout'>
					<div className='sidebar'>
						<LayoutNav />
					</div>
					<div className='main'>{children}</div>
					<div className='footer'></div>
				</main>
			</body>
		</html>
	)
}
