import OutlinedButton from '@/shared/OutlinedButton/OutlinedButton'
import Link from 'next/link'
import css from './LayoutNav.module.sass'

export default function LayoutNav() {
	return (
		<nav className={css.main}>
			<div className={css.inner}>
				<div className={css.title}>
					<h2>EngJournal</h2>
					<h3>
						good practice <br /> for english
					</h3>
				</div>
				<hr />
				<div className={css.nav__block}>
					<h1>Dias Journal</h1>
					<div className={css.nav__list}>
						<Link href={''} className={css.nav}>
							Posts
						</Link>
						<Link href={''} className={css.nav}>
							Settings
						</Link>
						<Link href={''} className={css.nav}>
							Information
						</Link>
						<Link href={''} className={css.nav}>
							Profile
						</Link>
						<OutlinedButton>New Post</OutlinedButton>
					</div>
				</div>
			</div>
		</nav>
	)
}
