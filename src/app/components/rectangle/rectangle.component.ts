import { Component, Input, OnInit } from '@angular/core';
import { Point } from '../../classes/Point';
import { Shape } from '../../classes/Shape';
import { FillColor, StrokeColor } from '../../classes/Style';
import { IShape } from '../../interfaces/IShape'
import { ShapeManagerService } from '../../services/ShapeManager/shape-manager.service';

@Component({
  selector: '[shape=rectangle]',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit{
  @Input() rectangle!: Shape; 
  manager: ShapeManagerService;
  initialClick!: Point;
  dragging: boolean = false; 
  // styles = {
  //   'fill': this.rectangle.fill.toString(),
  //   'stroke' : this.rectangle.stroke.toString()
  // }
  constructor(manager: ShapeManagerService) { 
    this.manager = manager;
  }

  ngOnInit(): void {
    console.log(this.rectangle.style.toString());
  }

  clicked(): void {
    if(!this.dragging){
      this.rectangle.isSelected = !this.rectangle.isSelected;
      if(this.rectangle.isSelected){
        this.manager.select(this.rectangle);
      }else{
        this.manager.deselect(this.rectangle.id);
      }
    }
    this.rectangle.setFill(new FillColor(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255), 0.25));
    this.rectangle.setStroke(new StrokeColor(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255), 0.25));
    console.log(this.manager);

  }
  mouseDown(e: MouseEvent):void {
    if(e.button == 0){
      this.dragging = true;

      this.initialClick = new Point(e.clientX, e.clientY);
      console.log(this.initialClick);
    }
  }
  move(e: MouseEvent): void {
    if(e.button == 0 && this.rectangle.isSelected && this.dragging){
      let offset: Point = new Point(e.clientX - this.initialClick.x, e.clientY - this.initialClick.y);
      console.log(offset);
      this.initialClick = new Point(e.clientX, e.clientY);
      this.manager.move(offset);
    }
  }
  mouseUp(e: MouseEvent): void{
    if(this.dragging){
      this.dragging = false;
    }
  }
  // fillColor(){
  //   return `fill: ${this.rectangle.fill.toString()}`;
  // }

  // strokeColor(){
  //   return `stroke: ${this.rectangle.fill.toString()}`;
  // }
}
