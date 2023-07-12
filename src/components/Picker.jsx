import React from "react";
import { HexColorPicker } from "react-colorful";
import { proxy, useSnapshot } from "valtio";

const state = proxy({
  current: null,
  items: {
    laces: "#ffffff",
    mesh: "#ffffff",
    caps: "#ffffff",
    inner: "#ffffff",
    sole: "#ffffff",
    stripes: "#ffffff",
    band: "#ffffff",
    patch: "#ffffff",
  },
});

const Picker = () => {
  const snap = useSnapshot(state);
  return (
    <div
      className="absolute top-[74px] left-[70px] w-[90px] h-[90px]"
      onChange={(color) => (state.items[snap.current] = color)}
    >
      <HexColorPicker color={snap.items[snap.current]} />
      <h1 className="text-black font-bold text-6xl">{snap.current}</h1>
    </div>
  );
};

export default Picker;
