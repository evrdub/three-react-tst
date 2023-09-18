import { useEffect, useRef } from 'react'
import * as THREE from 'three'

type SceneProps = { width: number; height: number }

const ThreeScene = (props: SceneProps) => {
    const sceneRef = useRef<HTMLDivElement>(null)
    const cubeColor = 0x9b42f5

    useEffect(() => {
        if (!sceneRef.current) return

        const width: number = props.width
        const height: number = props.height

        const scene = new THREE.Scene()

        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
        camera.position.z = 5

        const geometry = new THREE.BoxGeometry()
        const material = new THREE.MeshBasicMaterial({ color: cubeColor })
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)

        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(width, height)

        if (sceneRef.current) {
            sceneRef.current.appendChild(renderer.domElement)
        }

        const animate = () => {
            requestAnimationFrame(animate)

            if (cube) {
                cube.rotation.x += 0.01
                cube.rotation.y += 0.01
            }

            renderer.render(scene, camera)
        }

        animate()

        return () => {
            if (sceneRef.current) {
                sceneRef.current.removeChild(renderer.domElement)
                renderer.dispose()
            }
        }
    }, [props.height, props.width])

    return <div ref={sceneRef} />
}

export default ThreeScene
