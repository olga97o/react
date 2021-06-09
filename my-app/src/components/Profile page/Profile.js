import styles from "./Profile.module.scss";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Profile() {

    let history = useHistory();
    let auth = useSelector(state => state.authStatus);

    if (!auth.length) {
        history.push('/login');
    }

    return (
        <div className={styles.profile}>
            <img src="https://zooblog.ru/wp-content/uploads/2021/04/izobrazhenie_2021-04-12_151613.png"/>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet illo incidunt iusto nesciunt nobis sit
                voluptatibus. Assumenda earum, eligendi error, facere non, perferendis quas quos tenetur vero voluptas
                voluptate voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur
                excepturi fugit labore molestias numquam quae ratione sunt tempore voluptas. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Amet illo incidunt iusto nesciunt nobis sit
                voluptatibus. Assumenda earum, eligendi error, facere non, perferendis quas quos tenetur vero voluptas
                voluptate voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur
                excepturi fugit labore molestias numquam quae ratione sunt tempore voluptas. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Amet illo incidunt iusto nesciunt nobis sit
                voluptatibus. Assumenda earum, eligendi error, facere non, perferendis quas quos tenetur vero voluptas
                voluptate voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur
                excepturi fugit labore molestias numquam quae ratione sunt tempore voluptas. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
            </div>
        </div>
    )

}