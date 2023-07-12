import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Shoe from "./components/Shoe";
import Picker from "./components/Picker";
import { CustomizationProvider } from "./contexts/Customization";

function App() {
  return (
    <CustomizationProvider>
      <div className="relative w-full h-screen overflow-hidden">
        <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <Shoe />
        </Canvas>
        {/* <Picker /> */}
      </div>
    </CustomizationProvider>
  );
}

export default App;
