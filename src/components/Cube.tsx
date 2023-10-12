import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Cube() {
    const mesh = useRef()

    useFrame(() => {
        if (mesh?.current) {
            mesh.current.rotation.x += 0.01
            mesh.current.rotation.y += 0.01
        }
    })

    return (
        <mesh ref={mesh}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="red" />
        </mesh>
    )
}
