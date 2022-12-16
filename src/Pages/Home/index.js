import { Main } from '~/layouts/components/Main';
import { useEffect, useRef } from 'react';
import { actions, useStore } from '~/store';

function Home() {
    const [state, dispatch] = useStore();
    const handleInteractive = useRef(() => {
        dispatch(actions.setMuteState(!state.muted));
        document.removeEventListener('mousedown', handleInteractive.current);
    });
    useEffect(() => {
        document.addEventListener('mousedown', handleInteractive.current);
    }, []);

    return (
        <Main>
            <div style={{ height: '10000px' }}>Home</div>
        </Main>
    );
}

export default Home;
