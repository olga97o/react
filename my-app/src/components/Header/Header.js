import styles from './Header.module.scss';

export default function Header ({userData}) {
    const {firstName, lastName} = userData;
    return (
        <header>
        Hello, user! We are {lastName} {firstName}!
        </header>
    );
}