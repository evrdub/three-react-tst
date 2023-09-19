import Helico from '../../assets/Helico_silhouette.svg'

import { FrameScreenContainer, Heli, HeliContainer, SceneContainer } from './stylesFrameScreen'
import { Scene } from '../../components/Scene'

const FrameScreen = () => {
    return (
        <FrameScreenContainer>
            <SceneContainer id="scene">
                <Scene />
            </SceneContainer>

            <HeliContainer>
                <Heli src={Helico} alt="HeliImg" />
            </HeliContainer>
        </FrameScreenContainer>
    )
}

export default FrameScreen
