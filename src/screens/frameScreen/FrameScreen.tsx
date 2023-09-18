import { useRef, useEffect, useState } from 'react'

import ThreeScene from '../../components/three-scene/ThreeScene'

import { logJSONWhite } from '../../utils/simpleFunctions'

import Helico from '../../assets/Helico_silhouette.svg'

import { FrameScreenContainer, Heli, Scene } from './stylesFrameScreen'

const FrameScreen = () => {
    const [sceneWidth, setSceneWidth] = useState(100)
    const [sceneHeight, setSceneHeight] = useState(100)

    const childRef = useRef(null)

    useEffect(() => {
        if (!childRef.current) return
        const data = childRef.current.getBoundingClientRect()

        logJSONWhite(data)

        const heightmaybe: number = window.innerHeight - data.top
        const widthmaybe: number = data.right - data.left

        console.log('heightmaybe : ', heightmaybe)
        console.log('widthmaybe : ', widthmaybe)

        setSceneWidth(widthmaybe)
        setSceneHeight(heightmaybe)
    }, [childRef])

    useEffect(() => {
        console.log('window.innerHeight : ', window.innerHeight)
        console.log('window.innerWidth : ', window.innerWidth)
    }, [window.innerHeight, window.innerWidth])

    return (
        <FrameScreenContainer>
            <Scene ref={childRef}>
                <ThreeScene width={sceneWidth} height={sceneHeight} />
            </Scene>

            <Heli src={Helico} alt="HeliImg" />
        </FrameScreenContainer>
    )
}

export default FrameScreen
