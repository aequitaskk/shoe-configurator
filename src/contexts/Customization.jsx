import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext();

export const CustomizationProvider = ({ children }) => {
  const [laces, setLaces] = useState("#ffffff");
  const [mesh, setMesh] = useState("red");
  const [caps, setCaps] = useState("#ffffff");
  const [inner, setInner] = useState("#ffffff");
  const [sole, setSole] = useState("#ffffff");
  const [stripes, setStripes] = useState("#ffffff");
  const [band, setBand] = useState("#ffffff");
  const [patch, setPatch] = useState("#ffffff");

  return (
    <CustomizationContext.Provider
      value={{
        laces,
        setLaces,
        mesh,
        setMesh,
        caps,
        setCaps,
        inner,
        setInner,
        sole,
        setSole,
        stripes,
        setStripes,
        band,
        setBand,
        patch,
        setPatch,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
}
