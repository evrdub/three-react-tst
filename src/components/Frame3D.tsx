import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function Frame3D({ containerRef }) {
    const cubeColor = 0x9b42f5
    const renderer = new THREE.WebGLRenderer()
    const scene = new THREE.Scene()

    useEffect(() => {
        const camera = new THREE.PerspectiveCamera(
            75,
            containerRef.current.clientWidth / containerRef.current.clientHeight,
            0.1,
            1000,
        )

        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
        containerRef.current.appendChild(renderer.domElement)

        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: cubeColor })
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)

        camera.position.z = 5

        function animate() {
            requestAnimationFrame(animate)

            cube.rotation.x += 0.01
            cube.rotation.y += 0.01

            renderer.render(scene, camera)
        }

        animate()
    }, [containerRef])

    return null // Rien à rendre ici
}
