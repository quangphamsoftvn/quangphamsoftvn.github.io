import { Component } from '@angular/core';
declare var fabric: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  canvas: any;
  constructor() {

    setTimeout(() => {
      this.int();
    }, 500);
  }

  addTable() {
    // var red = new fabric.Rect({
    //   top: 100, left: 0, width: 80, height: 50, fill: 'red' });
    //   var red = new fabric.Circle({ top: 140, left: 230, radius: 75, fill: 'green' });
    // this.canvas.add(red);


    this.addCenter();
  //  this.addClient();


  }

  addClient() {

    var green =new fabric.Circle({ radius: 40, fill: '#f55', top: 125, left: 125, scaleY: 0.5, flipY: true });
    var group = new fabric.Group([green], {
      left: 100,
      top: 50,
      angle: -10
    });

    this.canvas.add(group);

  }

  addCenter() {
    var circle = new fabric.Circle({
      radius: 100,
      fill: '#c2c7cf',
      originX: 'center',
      originY: 'center'
    });

    var circle1 = new fabric.Circle({
      radius: 95,
      fill: '#ffffff',
      originX: 'center',
      originY: 'center'
    });

    var text = new fabric.Text('5', {
      fontSize: 30,
      originX: 'center',
      originY: 'center'
    });
    var client1 =new fabric.Circle({ radius: 40, fill: '#f55', top: 120, left: 120, });

    var client2 =new fabric.Circle({ radius: 40, fill: '#f55', top: 0, left: 0, });

    var group = new fabric.Group([circle, circle1, text,client1, client2], {
      left: 150,
      top: 100,
      angle: -10
    });

    this.canvas.add(group);

  }
  int(): void {
    this.canvas = new fabric.Canvas('c');

    // let rect = new fabric.Rect({
    //   width: 50,
    //   height: 50,
    //   left: 100,
    //   top: 100,
    //   stroke: '#aaf',
    //   strokeWidth: 5,
    //   fill: '#faa',
    //   selectable: false
    // });
    // this.canvas.add(rect);
  }

}
