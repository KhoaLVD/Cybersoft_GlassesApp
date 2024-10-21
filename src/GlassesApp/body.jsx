import { useState } from "react";
export default function Body() {
    const [glasses, setGlasses] = useState([""]);
    const changeGlasses = (url) =>{
        setGlasses(url);
    }
  return (
    <div className="mt-8 flex justify-center">
        <div className="w-1/4 relative">
            <img src="./glassesImage/model.jpg"  />
            <img className="absolute bottom-56 right-12 w-52 opacity-85" src={glasses}  />
        </div>
        <div className="w-3/4 ml-8">
            <h1 className="mt-12 text-4xl font-bold text-fuchsia-400">
                Choose your own glasses
            </h1>
            <div className="grid grid-cols-5 mt-4">
                <a className="w-32 focus:ring" onClick={() =>changeGlasses("./glassesImage/v1.png")}>
                    <img  src="./glassesImage/g1.jpg" />
                </a>
                <a className="w-32 h-16" onClick={() =>changeGlasses("./glassesImage/v2.png")}>
                    <img src="./glassesImage/g2.jpg" />
                </a>
                <a className="w-32" onClick={() =>changeGlasses("./glassesImage/v3.png")}>
                    <img className="mt-8 h-16" src="./glassesImage/g3.jpg" />
                </a>
                <a className="w-32" onClick={() =>changeGlasses("./glassesImage/v4.png")}>
                    <img className="mt-8 h-16" src="./glassesImage/g4.jpg" />
                </a>
                <a className="w-32" onClick={() =>changeGlasses("./glassesImage/v5.png")}>
                    <img className="mt-4" src="./glassesImage/g5.jpg" />
                </a>
                <a className="w-32" onClick={() =>changeGlasses("./glassesImage/v6.png")}>
                    <img className="mt-8" src="./glassesImage/g6.jpg" />
                </a>
                <a className="w-32" onClick={() =>changeGlasses("./glassesImage/v7.png")}>
                    <img src="./glassesImage/g7.jpg" />
                </a>
                <a className="w-32" onClick={() =>changeGlasses("./glassesImage/v8.png")}>
                    <img className="mt-6" src="./glassesImage/g8.jpg" />
                </a>
                <a className="w-32" onClick={() =>changeGlasses("./glassesImage/v9.png")}>
                    <img className="mt-8" src="./glassesImage/g9.jpg" />
                </a>
            </div>
            
        </div>
    </div>
  )
}
