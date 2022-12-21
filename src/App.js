import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DeafaultLayout } from '~/layouts';
import { useStore } from './store';
import { Login } from './components/Login';

function App() {
    // eslint-disable-next-line
    const [state, dispatch] = useStore();

    useEffect(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        };

        return () => {
            window.onbeforeunload = null;
        };
    }, []);

    useEffect(() => {
        if (state.modalLogin) {
            document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        } else {
            document.getElementsByTagName('body')[0].style = '';
        }
    }, [state.modalLogin]);
    return (
        <Router>
            <div className="App" style={{ overflow: 'hidden' }}>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DeafaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                        {state.modalLogin && <Login />}
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
