import { useRef, useEffect } from 'react'
import * as THREE from 'three'

const ThreeScene = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    // Create renderer, scene, camera
    const renderer = new THREE.WebGLRenderer()
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    // Create a cube for demonstration
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)

    function initRender() {
        renderer.setSize(window.innerWidth, window.innerHeight)

        // Only continue if defined
        if (!containerRef.current) return

        // Append the renderer to the container div if defined
        containerRef.current.appendChild(renderer.domElement)

        // Add 3D cube to the scene
        scene.add(cube)

        // Position the camera
        camera.position.z = 2.5

        // Animation loop
        function animate() {
            // Indicate to browser that we want to make an animation
            requestAnimationFrame(animate)

            // Rotate the cube
            cube.rotation.x += 0.01
            cube.rotation.y += 0.01

            // Start render
            renderer.render(scene, camera)
        }

        function handleResize() {
            console.log('resize')
            const div = document.getElementById('scene')

            const newWidth = div?.clientWidth
            const newHeight = div?.clientHeight - div?.getBoundingClientRect().top

            camera.aspect = newWidth / newHeight
            camera.updateProjectionMatrix()
            renderer.setSize(newWidth, newHeight)
        }

        handleResize() // Init size of render
        animate()

        window.addEventListener('resize', handleResize)

        // Clean up on unmount
        return () => {
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement)
            }
            window.removeEventListener('resize', handleResize)
            renderer.dispose()
        }
    }

    useEffect(() => {
        initRender()
    }, [])

    // ... (rest of the code)

    return <div ref={containerRef} style={{ flex: 1 }} />
}

export default ThreeScene
