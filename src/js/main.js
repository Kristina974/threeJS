import * as THREE from '../../node_modules/three/build/three';

console.log(THREE)

import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls.js';

console.log(OrbitControls)

import { FBXLoader } from '../../node_modules/three/examples/jsm/loaders/FBXLoader.js';

console.log(FBXLoader)

function main() {
  const canvas = document.querySelector('#canvas');

  //сцена
  const scene = new THREE.Scene();

  //камера
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight , 0.1, 1000);
  camera.position.z = 5;

  //рендер
  const renderer = new THREE.WebGLRenderer({canvas});
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  scene.background = new THREE.Color(0x00f0f0);
  renderer.render(scene, camera);

////
  // controls = new THREE.OrbitControls(camera);
  //       const controls = new OrbitControls(camera, renderer.domElement);



  // добавляем модель
  let loader = new FBXLoader();

  loader.load( '../../dist/models/man.fbx', function (fbx) {
    scene.add(fbx.scene);
    man = fbx.scene.children[0];
    man.scale.set(0.5,0.5,0.5);
    scene.add(fbx.scene);
  })
  //  undefined, function ( error ) {
  //   console.error( error );
  //  }
  function animate() {
    camera.lookAt(scene.position);
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
  }

//   function render() {
    

// }

// render();
animate();
}
main()


  // document.body.appendChild( renderer.domElement );
  // scene.background = new THREE.Color(0xdddddd);
  // const renderer = new THREE.WebGLRenderer({canvas: viewer});

  // Создаём управление камерой
  // const controls = new OrbitControls(camera, renderer.domElement);
  // camera.position.set(0, 20, 100);
  // controls.update();


// let controls = new OrbitControls( camera, renderer.domElement );

// let loader = new THREE.FBXLoader()
//     loader.load('house.fbx', function(fbx){
//         car = gltf.scene.children[0]
//         car.scale.set(0.5, 0.5, 0.5)
//         scene.add(gltf.scene)
//         animate();

//     })
// };
