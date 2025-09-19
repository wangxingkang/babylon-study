import { Engine, MeshBuilder, Scene } from '@babylonjs/core';
import React from 'react';
import styles from './index.module.less';

function Dashboard() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(
    () => {
      const canvas = canvasRef.current;

      if (canvas) {
        const engine = new Engine(canvas);

        function createScene() {
          const scene = new Scene(engine);
          MeshBuilder.CreateBox('box', {});
          scene.createDefaultCameraOrLight(true, true, true);
          scene.createDefaultEnvironment();

          return scene;
        }

        const scene = createScene();

        engine.runRenderLoop(() => {
          scene.render();
        });

        window.addEventListener('resize', () => {
          engine.resize();
        });

        return () => {
          scene.dispose();
          engine.dispose();
        };
      }
    },
    [],
  );

  return (
    <canvas className={styles.canvas} ref={canvasRef} />
  );
}

export default Dashboard;
