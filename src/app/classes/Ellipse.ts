import { IShape } from '../interfaces/IShape';
import { Point } from './Point';
import {Shape} from './Shape'


export class Ellipse extends Shape {
    constructor(id: number, center: Point){
        super("ellipse", id, center);
    }

    draw(p: Point): void {
        throw new Error('Method not implemented.');
    }
    // resize(newCenter: Point, newDimensions: Array<number>): void {
    //     throw new Error('Method not implemented.');
    // }
    copy(): IShape {
        throw new Error('Method not implemented.');
    }
    delete(): void {
        throw new Error('Method not implemented.');
    }
    
}