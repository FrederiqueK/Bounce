
class nummer extends Bal {
    nummer;
    constructor(_x, _y, _speedX, _speedY, _nummer) {
        super(_x, _y, _speedX, _speedY);
        this.nummer = _nummer;
      }
      

    show() {
        fill(100, 200, 300);
        ellipse(this._x, this._y, 50, 50);
        fill(0,0,0);
        text("4", this.x, this.y);
    }
    
}