import { useState, useEffect } from 'react';

const useElementOnScreen = (targetRef, options, intersectionRatio) => {
    const [isVisible, setIsVisible] = useState();

    const callbackFunc = (entries) => {
        const [entry] = entries;
        if (entry.intersectionRatio > intersectionRatio) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunc, options);
        const currentTarget = targetRef.current;
        if (currentTarget) {
            observer.observe(currentTarget);
        }
        return () => {
            observer.unobserve(currentTarget);
        };
    }, [options, targetRef]);

    return isVisible;
};

export default useElementOnScreen;
