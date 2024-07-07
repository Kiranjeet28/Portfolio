import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

function FlippingCoin ({ imageUrl, onFlip }) {
  const containerRef = useRef(null);
  const angularSpeed = 1; // Speed of rotation
  let lastTime = (new Date()).getTime();
  let totalRotation = 0; // Total rotation in radians
  const oneFullRotation = 2 * Math.PI; // 360 degrees in radians
  const [isFlipped, setIsFlipped] = useState(false); // Flag to track flip state

  useEffect(() => {
    const cylinderRadius = 90; // Adjusted size for the coin
    const cylinderHeight = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(35, containerRef.current.clientWidth / containerRef.current.clientHeight, 1, 2000);
    camera.position.z = 300; // Adjust camera position

    const scene = new THREE.Scene();

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(imageUrl);

    const cylinderMaterials =
      new THREE.MeshBasicMaterial({ map: texture, 
        color: 0xeeeeee ,
       });
    

    const cylinderGeometry = new THREE.CylinderGeometry(cylinderRadius, cylinderRadius, cylinderHeight, 50);
    const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterials);
    cylinder.rotation.x = Math.PI / 2; // Position the coin standing on its edge
    scene.add(cylinder);

    const animate = () => {
      const time = (new Date()).getTime();
      const timeDiff = time - lastTime;
      const angleChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;
      lastTime = time;

      if (totalRotation < oneFullRotation) {
        cylinder.rotation.z += angleChange;
        totalRotation += angleChange;
      } else {
        cylinder.rotation.z = oneFullRotation; // Ensure it stops exactly at one full rotation
        setIsFlipped(false); // Reset flipped flag after animation
      }

      renderer.render(scene, camera);

      if (totalRotation < oneFullRotation) {
        requestAnimationFrame(animate);
      }
    };

    // Only call animation if onFlip prop is provided (user interaction)
    if (onFlip && !isFlipped) {
      animate();
      setIsFlipped(true); // Set flipped flag to true before animation
    }

    // Clean up on component unmount
    return () => {
      renderer.dispose();
    };
  }, [onFlip, isFlipped]); // Only re-run useEffect when onFlip or isFlipped changes

  return <div ref={containerRef} style={{ width: '110px', height: '110px' }} />;
}

export default FlippingCoin;
