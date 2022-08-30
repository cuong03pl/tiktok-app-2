// import classNames from 'classnames/bind';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/Layouts';
// const cx = classNames.bind(styles);

function App() {
    return (
        <Router>
            <div className={'App'}>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Comp = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = 'Fragment';
                        }

                        return <Route path={route.path} element={<Layout>{<Comp />}</Layout>} key={index}></Route>;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
