import { Canvas } from '@react-three/fiber'

import Cube from './Cube'

export default function Scene() {
    return (
        <Canvas style={{ backgroundColor: 'black' }} camera={{ fov: 40, position: [0, 0, 5] }}>
            <Cube />
        </Canvas>
    )
}
