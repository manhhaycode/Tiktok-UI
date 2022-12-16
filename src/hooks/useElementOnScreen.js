import { useState, useEffect } from 'react';

const useElementOnScreen = (targetRef, options) => {
    const [isVisible, setIsVisible] = useState();

    const callbackFunc = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunc, options);
        const currentTarget = targetRef.current;
        if (currentTarget) {
            observer.observe(currentTarget);
        }
    }, [options, targetRef]);

    return isVisible;
};

export default useElementOnScreen;
