import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

if (WebGL.isWebGLAvailable()) {
  // 씬
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('skyblue');

  // 카메라
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1_000
  ); // 화각, 종횡비, 가까움, 먼
  camera.position.z = 1;

  // 렌더러
  const $canvas = document.querySelector('#canvas');
  const renderer = new THREE.WebGLRenderer({
    canvas: $canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const geometry01 = new THREE.TorusGeometry(0.3, 0.15, 16, 40);
  const material01 = new THREE.MeshStandardMaterial({
    color: '#aaa',
  });

  const donut = new THREE.Mesh(geometry01, material01);
  donut.position.x = 0;
  scene.add(donut);

  function render(time) {
    const newTime = time * 0.001;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);

  function resize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener('resize', resize);
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById('container').appendChild(warning);
}
