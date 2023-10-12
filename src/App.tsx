import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from './components/header/Header'

import Home from './screens/home/Home'
import FrameScreenVanilla from './screens/frameScreenVanilla/FrameScreenVanilla'
import FrameScreen from './screens/frameScreen/FrameScreen'

import { indexRoutes } from './utils/indexRoutes'

import { AppContainer, BodyWrapper } from './stylesApp'

const App: React.FC = () => {
    return (
        <AppContainer>
            <BrowserRouter>
                <Header />
                <BodyWrapper>
                    <Routes>
                        <Route path={indexRoutes['Home']} element={<Home />} />
                        <Route path={indexRoutes['Vanilla']} element={<FrameScreenVanilla />} />
                        <Route path={indexRoutes['ReactTF']} element={<FrameScreen />} />
                    </Routes>
                </BodyWrapper>
            </BrowserRouter>
        </AppContainer>
    )
}

export default App
