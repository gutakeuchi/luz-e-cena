import styles from './Link.module.css'

export const Link = ({ children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return (
        <a className={styles.link}{...rest}>{children}</a>
    )
}
