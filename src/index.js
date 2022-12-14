import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

(async ()=>{

const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine


const createScene = async function () {

    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

	var BoomBox = await BABYLON.SceneLoader.ImportMeshAsync("","./assets/","BoomBox.glb",scene);
	BoomBox.meshes[0].scaling = new BABYLON.Vector3(100,100,100);

	const BoomBoxMesh = BoomBox.meshes[0];
	
	var sixDofDragBehavior = new BABYLON.SixDofDragBehavior();
	BoomBoxMesh.addBehavior(sixDofDragBehavior);

	try{
        const xrHelper = await scene.createDefaultXRExperienceAsync();
        const featuresManager = xrHelper.baseExperience.featuresManager;
        // ハンドトラッキングの実装
        featuresManager.enableFeature(BABYLON.WebXRFeatureName.HAND_TRACKING,
            "latest",
            {
                xrInput: xrHelper.input,
            });
    }catch (e) {
        console.log(e);
    }
    return scene;

}

const scene = await createScene();

// show inspector
//scene.debugLayer.show(); 

engine.runRenderLoop(function () {
    scene.render();
});
// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});

})()