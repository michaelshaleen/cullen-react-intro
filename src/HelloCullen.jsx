/*
HelloCullen is a component

components are functions that return JSX
JSX("HTML-ish code")

Conventions:
-components are PascalCase
-One component per file
*/ function HelloCullen() {
  return (
    //JSX FRAGMENT
    //AN ELEMENT W/ NO NAME
    <>
      <h1>Hello Cullen</h1>
      <h1>How you Doing</h1>
    </>
    //runs jsx in the return makes it a component
  );
}
//in node:
//module.exports = HelloCullen;

//Client side (REACT) we do this instead:
export default HelloCullen;
