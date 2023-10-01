import React from 'react'
import css from './OutlinedButton.module.sass'
export default function OutlinedButton({
	children,
}: {
	children: React.ReactNode
}) {
	return <button className={css.button}>{children}</button>
}
