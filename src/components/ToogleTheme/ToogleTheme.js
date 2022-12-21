import classNames from 'classnames/bind';
import styles from './ToggleTheme.module.scss';
import { motion } from 'framer-motion';
import { actions, useStore } from '~/store';

const cx = classNames.bind(styles);

function ToogleTheme() {
    const [state, dispatch] = useStore();
    const className = ['switch', state.theme === 'white' ? 'off' : 'on'];
    const spring = {
        type: 'spring',
        stiffness: 700,
        damping: 30,
    };

    return (
        <div
            className={cx(className)}
            onClick={() => dispatch(actions.setTheme(state.theme === 'white' ? 'black' : 'white'))}
        >
            <motion.div layout transition={spring} />
        </div>
    );
}

export default ToogleTheme;
