import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from './components/header/Header'

import Home from './screens/home/Home'
import FrameScreen from './screens/frameScreen/FrameScreen'

import { AppContainer, BodyWrapper } from './stylesApp'

const App: React.FC = () => {
    return (
        <AppContainer>
            <BrowserRouter>
                <Header />
                <BodyWrapper>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/frame" element={<FrameScreen />} />
                    </Routes>
                </BodyWrapper>
            </BrowserRouter>
        </AppContainer>
    )
}

export default App
