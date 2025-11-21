import styles from './Button.module.css'
import clasNames from 'classnames'

type ButtonProps = {
    variant: "default" | "icon"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, variant='default', ...rest }: ButtonProps) => {
    const classMap = {
        default: styles.default,
        icon: styles.icon
    }
    return (
        <button className={clasNames(styles.botao, classMap[variant])} {...rest}>{children}</button>
    )
}

export default Button 