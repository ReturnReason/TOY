import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

if (WebGL.isWebGLAvailable()) {
  // 씬
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#eee');

  // 카메라
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1_000
  ); // 화각, 종횡비, 가까움, 먼
  camera.position.z = 2;

  // 렌더러
  const $canvas = document.querySelector('#canvas');
  const renderer = new THREE.WebGLRenderer({ canvas: $canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);
  // document.body.appendChild(renderer.domElement);

  // 매쉬
  const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  const material = new THREE.MeshStandardMaterial({
    color: 0x999999,
  });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  function render(time) {
    const newTime = time * 0.001;

    cube.rotation.y = newTime;
    cube.rotation.x = newTime;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
  // renderer.render(scene, camera);
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById('container').appendChild(warning);
}
