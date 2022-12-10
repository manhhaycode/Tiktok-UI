import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import MenuItem from './MenuItem';
import Wrapper from '../Wrapper';
import Header from './Header';
import { ArrowIcon } from '~/components/Icon';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { useSpring, motion } from 'framer-motion';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }, onChange = () => {}) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const springConfig = { damping: 10, stiffness: 1000000 };
    const initialScale = 0.7;
    const opacity = useSpring(0, springConfig);
    const scale = useSpring(initialScale, springConfig);

    const onMount = () => {
        scale.set(1);
        opacity.set(1);
    };

    const onHide = ({ unmount }) => {
        const cleanup = scale.onChange((value) => {
            if (value <= initialScale) {
                cleanup();
                unmount();
            }
        });
        scale.set(initialScale);
        opacity.set(0);
        handleReset();
    };

    const renderItems = (children) => {
        return current.data.map((item, index) => {
            return (
                <MenuItem
                    key={index}
                    iconRight={item.icon}
                    onClick={() => {
                        const isParent = !!item.children;
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            // onChange(item);
                        }
                    }}
                    isChildren={children}
                >
                    {item.title}
                </MenuItem>
            );
        });
    };

    const renderResult = (attrs) => (
        <motion.div className="box" tabIndex="-1" {...attrs} style={{ cursor: 'pointer', opacity, scale }}>
            <Wrapper>
                <div className={cx('arrow-icon')}>
                    <ArrowIcon />
                </div>
                {history.length > 1 ? <Header title={history[history.length - 1].title} goBack={handleBack} /> : <></>}
                {renderItems(!!(history.length > 1))}
            </Wrapper>
        </motion.div>
    );

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const handleReset = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            interactive
            render={renderResult}
            delay={[0, 300]}
            offset={[-75, 12]}
            animation={true}
            onMount={onMount}
            onHide={onHide}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
