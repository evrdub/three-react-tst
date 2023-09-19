import { Canvas } from '@react-three/fiber'
import { Box, OrbitControls } from '@react-three/drei'
import { Cube } from './Cube'

export function Scene() {
    return (
        <Canvas style={{ backgroundColor: 'black' }}>
            <Cube />
            <Box position={[2, 0, 0]} />
            <OrbitControls />
        </Canvas>
    )
}
