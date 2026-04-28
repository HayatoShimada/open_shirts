import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class OpenSourceShirtViewer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.initScene();
    this.loadBaseModel();
  }

  // 1. シーンの初期化
  initScene() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    // ...レンダラーの設定やライトの配置...
  }

  // 2. ベースモデル（Brooks Brothersベース）の読み込み
  loadBaseModel() {
    const loader = new GLTFLoader();
    loader.load('/models/base_shirt.glb', (gltf) => {
      this.shirtMesh = gltf.scene.children.find(child => child.name === 'Shirt_Mesh');
      this.scene.add(gltf.scene);
      this.applySpecs(initialSpecs); // 読み込み時に初期スペックを反映
    });
  }

  // 3. specs.jsonを解析してモデルに変形を適用
  applySpecs(specs) {
    if (!this.shirtMesh) return;

    const { geometry, materials } = specs;

    // --- 形状の変形 (Morph Targets) ---
    // JSONの数値(cm)を、モデルの変形係数(0.0 - 1.0)に変換
    // 例: 胸囲 58cm をベース(56cm)からの差分として計算
    const chestMorph = (geometry.body.chest_width - 56.0) / 10.0; 
    this.setMorphTarget('Chest_Width', chestMorph);

    const collarMorph = (geometry.collar.point_length - 7.5) / 2.0;
    this.setMorphTarget('Collar_Length', collarMorph);

    // --- スケーリング (単純な長さ調整) ---
    const sleeveScale = geometry.body.sleeve_length / 84.0;
    this.shirtMesh.getObjectByName('Sleeve_L').scale.y = sleeveScale;

    // --- マテリアルの更新 ---
    this.updateMaterial(materials.fabric_id);
  }

  setMorphTarget(name, value) {
    const index = this.shirtMesh.morphTargetDictionary[name];
    if (index !== undefined) {
      this.shirtMesh.morphTargetInfluences[index] = THREE.MathUtils.clamp(value, 0, 1);
    }
  }

  updateMaterial(fabricId) {
    // 85-Storeの生地ライブラリからテクスチャをロード
    const texture = new THREE.TextureLoader().load(`/textures/${fabricId}_diffuse.jpg`);
    this.shirtMesh.material.map = texture;
    this.shirtMesh.material.needsUpdate = true;
  }
}
