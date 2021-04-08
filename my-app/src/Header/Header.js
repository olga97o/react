import styles from './Header.module.scss';

export default function Header ({userData}) {
    const {firstName, lastName} = userData;
    return (
        <header>
        Hello, Friend! I am {lastName} {firstName}!
        </header>
    );
}