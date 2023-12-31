import Helico from '../../assets/helicopter.svg'

import { FrameScreenContainer, Heli, HeliContainer, SceneContainer } from './stylesFrameScreen'
import Scene from '../../components/Scene'

export default function FrameScreen() {
    return (
        <FrameScreenContainer>
            <SceneContainer>
                <Scene />
            </SceneContainer>

            <HeliContainer>
                <Heli src={Helico} alt="HeliImg" />
            </HeliContainer>
        </FrameScreenContainer>
    )
}
