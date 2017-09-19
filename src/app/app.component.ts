import { Component } from '@angular/core';



declare var fabric: any;



@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {

  title = 'app';

  __canvas: any = null;

  canvas: any = null;

  add() {

    var red = new fabric.Rect({

      top: 100, left: 0, width: 80, height: 50, fill: 'red'

    });

    var blue = new fabric.Rect({

      top: 0, left: 100, width: 50, height: 70, fill: 'blue'

    });

    var green = new fabric.Rect({

      top: 100, left: 100, width: 60, height: 60, fill: 'green'

    });

    this.canvas.add(red, blue, green);

  }







  constructor() {



    setTimeout(() => {

      this.init();

    }, 500);



  }



  init() {



     this.canvas = this.__canvas = new fabric.Canvas('c');

    // var red = new fabric.Rect({

    //   top: 100, left: 0, width: 80, height: 50, fill: 'red'

    // });

    // var blue = new fabric.Rect({

    //   top: 0, left: 100, width: 50, height: 70, fill: 'blue'

    // });

    // var green = new fabric.Rect({

    //   top: 100, left: 100, width: 60, height: 60, fill: 'green'

    // });

    fabric.Object.prototype.transparentCorners = false;

  //  this.canvas.add(red, blue, green);



// lam mo`

  this.canvas.on({

    'object:moving': function(e) {

      console.log('object:moving :', e);

      e.target.opacity = 0.5;

    },

    'object:modified': function(e) {

      console.log('object:modified :', e);

    },

    'mouse:up': function(e) {

      console.log('mouse:up :', e);

    },

    'mouse:down': function(e) {

      console.log('mouse:down :', e);

    },

    'mouse:move': function(e) {

      console.log('mouse:move :', e);

    },

    'mouse:dblclick': function(e) {

      console.log('mouse:dblclick :', e);

    } 

  });







    this.addShape();

  }







  addShape() {

    var circle =   new fabric.Circle({

      // left: 80,

      // top: 50,

      strokeWidth: 5,

      radius: 50,

      fill: '#fff',

      stroke: '#666',

      originX: 'center',

      originY: 'center'

    });



    var text = new fabric.Text('9', {

      fontSize: 30,

      originX: 'center',

      originY: 'center'

    }); 

    let listItem = [ circle, text,

    

      ];

    var items = 6;

    for(var i = 0; i < items; i++) {

        var x0 = -25, y0 =-25, r = 100;

        var x = x0 + r * Math.cos(2 * Math.PI * i / items);

        var y = y0 + r * Math.sin(2 * Math.PI * i / items);    

        var child1 =   new fabric.Circle({

          left: x,

          top: y,

          strokeWidth: 5,

          radius: 25,

          fill: '#fff',

          stroke: '#666'

        });

        let ix = i+1+'';



        var text1 = new fabric.Text(ix, {

          fontSize: 30,

          left: x+15,

          top: y+15

        }); 



        listItem.push(child1);

        listItem.push(text1);

    }

   

    var group = new fabric.Group(listItem, {

      left: 150,

      top: 100,

      angle: -10

    });





    this.canvas.add(group);

  }



  save() {

    let data =  JSON.stringify(this.canvas);

    console.log('json data : ', data);

    localStorage.setItem('data',data);

  }

  load () {

    let data = JSON.parse(localStorage.getItem('data'));

    this.canvas.loadFromJSON(data);

  }

}

