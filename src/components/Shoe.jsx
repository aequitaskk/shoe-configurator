import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useCustomization } from "../contexts/Customization";


const Shoe = () => {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/shoe-draco.glb");
  const { laces, mesh, caps, inner, sole, stripes, band, patch } = useCustomization();
  // console.log(nodes, materials);


  return (
    <group ref={ref}>
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={laces}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={mesh}
        
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={caps}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={inner}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={sole}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={stripes}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={band}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={patch}
      />
    </group>
  );
};

export default Shoe;
