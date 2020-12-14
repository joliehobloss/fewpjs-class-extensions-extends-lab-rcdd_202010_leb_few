// Your code here
class Polygon{
  constructor(array=[]){
    this.array=array;
  }
  
<<<<<<< HEAD
 get countSides(){
  return this.array.length;
}

get perimeter(){
  let c=0;
  for(let i=0;i<this.array.length;i++){
    c+=this.array[i];
  }
  return c;
}
}

class Triangle extends Polygon{
  get isValid(){
    if(this.array[0]<this.array[1]+this.array[2]){
      return true;
   }else{
      return false;
   }
  }
}

class Square extends Polygon{
  get isValid(){
if(this.array[0]===this.array[1] && this.array[0]===this.array[2] && this.array[0]===this.array[3]){
  return true;
  }else{
  return false;
  }
  }
  
  get area(){
    return this.array[0]**2;
  }
}


=======
 countSides(){
    let c=0;
 for(let i=0;i<this.array.length;i++){
   c=c+i;
  }
  return c;
}


}

/*let circle;
let triangle;
let square;



describe( "Polygon", () => {
  beforeEach( () => {
    polygon = new Polygon( [ 5, 5, 5 ] )
  } )

  it( "has a Polygon class", () => {
    expect( Polygon ).to.exist
  } )

  it( "Polygon has a countSides getter method that returns the number of sides of the polygon", () => {
    expect( polygon.countSides ).to.eq( 3 )
  } )

  it( "Polygon has a perimeter getter that calculates perimeter", () => {
    expect( polygon.perimeter ).to.eq( 15 )
  } )
} )

describe( "Triangle", () => {
  let triangle
  let triangle2
  it( "has a Triangle class", () => {
    expect( Triangle ).to.exist
  } )

  it( "checks for valid triangle", () => {
    triangle = new Triangle( [ 5, 5, 5 ] )
    triangle2 = new Triangle( [ 15, 10, 1 ] )

    expect( triangle.countSides ).to.eq( 3 )

    expect( triangle.isValid ).to.be.true
    expect( triangle2.isValid ).to.be.false
  } )

  it( "has a perimeter getter inherited from Polygon", () => {
    expect( triangle.perimeter ).to.eq( 15 )
    expect( triangle2.perimeter ).to.eq( 26 )
  } )
} )


describe( "Square", () => {
  it( "has a Square class", () => {
    expect( Square ).to.exist
  } )

  it( "has a perimeter getter inherited from Polygon", () => {
    let square = new Square( [ 5, 5, 5, 5 ] )

    expect( square.perimeter ).to.eq( 20 )
  } )

  it( "calculates the area", () => {
    let square = new Square( [ 5, 5, 5, 5 ] )

    expect( square.area ).to.eq( 25 )
  } )

  it( "checks for valid square", () => {
    let square = new Square( [ 5, 5, 5, 5 ] )
    let square2 = new Square( [ 5, 4, 3, 2 ] )

    expect( square.countSides ).to.eq( 4 )
    expect( square.isValid ).to.be.true
    expect( square2.isValid ).to.be.false
  } )
} )*/
>>>>>>> 7b9f1083b3c87c870ee52ef312c851e69b16ffe0
