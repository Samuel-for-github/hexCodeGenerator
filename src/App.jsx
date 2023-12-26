import React, { useState, useRef, useCallback } from 'react';

function App() {



  const [redA, setRedA] = useState(0);
  const [greenA, setGreenA] = useState(0);
  const [blueA, setBlueA] = useState(0);
  const [redB, setRedB] = useState(0);
  const [greenB, setGreenB] = useState(0);
  const [blueB, setBlueB] = useState(0)

  const hexRef = useRef(null)

  const hexCodeGenerator = () => {
    const hexRedA = redA.toString(16)
    const hexGreenA = greenA.toString(16)
    const hexBlueA = blueA.toString(16)
    const hexRedB = redB.toString(16)
    const hexGreenB = greenB.toString(16)
    const hexBlueB = blueB.toString(16)
    const hex = `#${hexRedA}${hexRedB}${hexGreenA}${hexGreenB}${hexBlueA}${hexBlueB}`
    return hex;
  };

  const copyColorToClipBoard = useCallback(()=>{
    hexRef.current?.select()
    window.navigator.clipboard.writeText(hexCodeGenerator())
  }, [hexCodeGenerator()])

  return (
    <>

<div className='flex h-screen flex-col items-center justify-center'>
  <h1>RRGGBB to HEX code</h1>
<div className="flex h-[145px] w-screen text-center justify-center bg-white text-black" style={{backgroundColor: hexCodeGenerator()}}>

<input type="range"
  id="redA"
  value={redA}
  className="cursor-pointer"
  min={0}
  max={15}
  onChange={(e) => {
    setRedA(parseInt(e.target.value, 10));
   
  }}
    
/>
<label htmlFor="redA">R: {redA}</label>

<input
  type="range"
  id="redB"
  value={redB}
  className="cursor-pointer"
  min={0}
  max={15}
  onChange={(e) => {
    setRedB(parseInt(e.target.value, 10));
  }}
/>
<label htmlFor="redB">R: {redB}</label>



<input
  type="range"
  id="greenA"
  value={greenA}
  className="cursor-pointer"
  min={0}
  max={15}
  onChange={(e) => {
    setGreenA(parseInt(e.target.value, 10));
  }}
/>
<label htmlFor="greenA">G: {greenA}</label>


<input
  type="range"
  id="greenB"
  value={greenB}
  className="cursor-pointer"
  min={0}
  max={15}
  onChange={(e) => {
    setGreenB(parseInt(e.target.value, 10));
  }}
/>
<label htmlFor="greenB">G: {greenB}</label>



<input
  type="range"
  id="blueA"
  value={blueA}
  className="cursor-pointer"
  min={0}
  max={15}
  onChange={(e) => {
    setBlueA(parseInt(e.target.value, 10));
  }}
/>
<label htmlFor="blueA">B: {blueA}</label>


<input
  type="range"
  id="blueB"
  value={blueB}
  className="cursor-pointer"
  min={0}
  max={15}
  onChange={(e) => {
    setBlueB(parseInt(e.target.value, 10));
  }}
/>
<label htmlFor="blueB">B: {blueB}</label>


</div>

<div style={{ marginTop: '20px'}} ref={hexRef}>
  Hex Code: {hexCodeGenerator()}
  <button
  onClick={copyColorToClipBoard}
type="button"
class="rounded-full mx-5 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
>
Copy
</button>

</div>
</div>


    </>
  );
}

export default App;
