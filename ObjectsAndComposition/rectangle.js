function rectangle(width, height, color){
    class Rectangle {
        constructor(width, height, color){
            this.width = Number(width);
            this.height = Number(height);
            this.color = color[0].toUpperCase() + color.slice(1);
        }

        calcArea(){
            return this.width * this.height;
        }
    }

    return new Rectangle(width, height, color);
}

rectangle(4, 5, 'red');