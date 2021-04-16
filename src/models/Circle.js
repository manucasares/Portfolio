


export class Circle {

    constructor( x, y, dx, dy, radius, color ) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;

    }

    draw( context ) {
        context.beginPath();
        context.arc( this.x, this.y, this.radius, 0, Math.PI * 2, false );
        context.fillStyle = this.color;
        context.fill();
    }

    update( context, canvasHeight ) {
        if ( this.x + this.radius > window.innerWidth || this.x - this.radius < 0 ) {
            this.dx = -this.dx;
        }

        if ( this.y + this.radius > canvasHeight || this.y - this.radius < 0 ) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw( context );

    }


}