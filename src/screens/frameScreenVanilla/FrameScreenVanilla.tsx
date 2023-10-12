import Helico from '../../assets/helicopter.svg'

import { FrameScreenContainer, Heli, HeliContainer, SceneContainer } from './stylesFrameScreen'
import ThreeScene from '../../components/three-scene/ThreeScene'

export default function FrameScreenVanilla() {
    return (
        <FrameScreenContainer>
            <SceneContainer id="scene">
                <ThreeScene />
            </SceneContainer>

            <HeliContainer>
                <Heli src={Helico} alt="HeliImg" />
            </HeliContainer>
        </FrameScreenContainer>
    )
}
