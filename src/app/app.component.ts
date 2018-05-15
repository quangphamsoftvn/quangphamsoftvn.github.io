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

  selectedObject: any = null;
  numberseat: any = 4;

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
      'object:selected': (evn) => {
        console.log('selected ');
        this.selectedObject = evn.target;
        console.log('this.selectedObject : ', this.selectedObject);
      },
      'object:moving': function (e) {

        console.log('object:moving :', e);

        e.target.opacity = 0.5;

      },

      'object:modified': function (e) {

        console.log('object:modified :', e);

      },

      'mouse:up': function (e) {

        console.log('mouse:up :', e);

      },

      'mouse:down': function (e) {

        console.log('mouse:down :', e);

      },

      'mouse:move': function (e) {

        console.log('mouse:move :', e);

      },

      'mouse:dblclick': function (e) {

        console.log('mouse:dblclick :', e);

      }

    });
    var previous_scaleY, previous_scaleX, previous_left, previous_top, lockScalingX;
    this.canvas.on('object:scaling', function (event) {
      var el = event.target;
      if (el && (el.height * el.scaleX) > 10 && (el.left + (el.width * el.scaleX)) < this.canvas.width && (el.top + (el.height * el.scaleY)) < this.canvas.height) {
        previous_scaleY = el.scaleY;
        previous_scaleX = el.scaleX;
        previous_left = el.left;
        previous_top = el.top;
      }
      if (el && (el.height * el.scaleX) < 10) {
        el.left = previous_left;
        el.top = previous_top;
        el.scaleX = previous_scaleX;
        el.scaleY = previous_scaleY;
        //  el.lockScalingX = true;
        el.lockScalingY = true;
        this.canvas.renderAll();
      }
      if (el && (el.left + (el.width * el.scaleX)) > this.canvas.width || (el.top + (el.height * el.scaleY)) > this.canvas.height) {
        console.log('mOVINGGGGGGGGGGGGG');
        el.left = previous_left;
        el.top = previous_top;
        console.log('Scale X:' + el.scaleX);
        console.log('Scale Y:' + el.scaleY);
        console.log('width:' + el.width);
        console.log('Height:' + el.height);

        console.log('Previous Y: ' + previous_scaleY);  // PREVIOUS SCALE X & Y WILL COME FROM MOUSE DOWN EVENT
        el.scaleX = previous_scaleX;
        el.scaleY = previous_scaleY;
        this.canvas.renderAll();

      }

    });

    // this.canvas.observe('mouse:up', function (e) {
    //   // var activeObject = e.target;
    //   // activeObject.lockScalingX = false;  // this will connect with object scalling event
    //   // activeObject.lockScalingY = false;
    // });

    // this.canvas.getObjects()[0].selectable = true;
    // this.canvas.renderAll();

    this.canvas.backgroundcolor = '#c2c7cf';


    this.addShape();

  }







  addShape() {

    var circle = new fabric.Circle({

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

    let listItem = [circle, text,



    ];

    var items = this.numberseat;

    for (var i = 0; i < items; i++) {

      var x0 = -25, y0 = -25, r = 100;

      var x = x0 + r * Math.cos(2 * Math.PI * i / items);

      var y = y0 + r * Math.sin(2 * Math.PI * i / items);

      var child1 = new fabric.Circle({
        id: i,
        left: x,

        top: y,

        strokeWidth: 5,

        radius: 25,

        fill: '#fff',

        stroke: '#666'

      });

      let ix = i + 1 + '';



      var text1 = new fabric.Text(ix, {

        fontSize: 30,

        left: x + 15,

        top: y + 15

      });



      listItem.push(child1);

      listItem.push(text1);

    }



    var group = new fabric.Group(listItem, {

      left: 150,

      top: 100,

      angle: 0

    });





    this.canvas.add(group);

  }



  save() {

    let data = JSON.stringify(this.canvas);

    console.log('json data : ', data);

    localStorage.setItem('data', data);

  }

  load() {

    let data = JSON.parse(localStorage.getItem('data'));

    this.canvas.loadFromJSON(data);

  }


  Delete() {
    this.canvas.remove(this.selectedObject);
  }


  SelectItem() {
    this.canvas.getObjects().forEach((item) => {
      item._objects.forEach((itemObj) => {
        if (itemObj.id === 1) {
          console.log('o : ', item);
          this.canvas.setActiveObject(itemObj);
        }
      });

    });
  }


  // circleTablePositionGenerator(_ref) {



  //   var id = 1,
  //     table_r = 2,
  //     unitCount = 3,
  //     chairWidth = 2;

  //   var angularSeparation = 360 / unitCount;
  //   var tableWithPadding = table_r + chairWidth / 2;

  //   return _.times(unitCount, function (index) {
  //     var seatAngle = angularSeparation * index * Math.PI / 180;

  //     return {
  //       id: id + ':' + (index + 1),
  //       x: tableWithPadding * Math.sin(seatAngle),
  //       y: -tableWithPadding * Math.cos(seatAngle)
  //     };
  //   });
  // }

  ZoomIn() {
    this.canvas.setZoom(this.canvas.getZoom() * 1.1);
    this.canvas.renderAll();
  }
  ZoomOut() {
    this.canvas.setZoom(this.canvas.getZoom() * 0.9);
    this.canvas.renderAll();
  }
  ZoomReset() {
    this.canvas.setZoom(1);
    this.canvas.renderAll();
  }

  changeWidth() {
    this.canvas.setWidth(400);
    this.canvas.renderAll();
    this.resizeCanvas(800, 1000);
  }

  resizeCanvas(width, height) {
    this.canvas.backgroundImage.scaleToWidth(width);
    this.canvas.backgroundImage.scaleToHeight(height);
    this.canvas.setDimensions({ width: width, height: height });
    this.canvas.renderAll();
  }
}

