function printCoord(pt: { x?: number; y?: number }) {
  console.log("The coordinate's x value is " + (pt.x || 0));
  console.log("The coordinate's y value is " + (pt.y || 0));
}

printCoord({ x: 3, y: 7 });
printCoord({ x: 3 });
printCoord({});