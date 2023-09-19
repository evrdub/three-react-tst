import ThreeScene from '../../components/three-scene/ThreeScene'

import Helico from '../../assets/Helico_silhouette.svg'

import { FrameScreenContainer, Heli, HeliContainer, Scene } from './stylesFrameScreen'

const FrameScreen = () => {
    return (
        <FrameScreenContainer>
            <Scene id="scene">
                <ThreeScene />
            </Scene>

            <HeliContainer>
                <Heli src={Helico} alt="HeliImg" />
            </HeliContainer>
        </FrameScreenContainer>

        // <div className="App" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        //     <header>Header</header>
        //     <main style={{ flex: 1 }}>
        //         <ThreeScene />
        //     </main>
        //     <footer>Footer</footer>
        // </div>
    )
}

export default FrameScreen
