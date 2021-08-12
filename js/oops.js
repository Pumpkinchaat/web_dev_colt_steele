const body = document.querySelector('body');
const div = document.querySelector('div');

// function hex(r, g, b) {
//     if (r < 16) r = '0' + r.toString(16);
//     else r = r.toString(16);
//     if (g < 16) g = '0' + g.toString(16);
//     else g = g.toString(16);
//     if (b < 16) b = '0' + b.toString(16);
//     else b = b.toString(16);
//     return '#' + r + g + b;
// }

// function hsl(r, g, b) {
//     r /= 255;
//     g /= 255;
//     b /= 255;
//     let cmin = Math.min(r, g, b),
//         cmax = Math.max(r, g, b),
//         delta = cmax - cmin,
//         h = 0,
//         s = 0,
//         l = 0;
//     if (delta == 0)
//         h = 0;
//     else if (cmax == r)
//         h = ((g - b) / delta) % 6;
//     else if (cmax == g)
//         h = (b - r) / delta + 2;
//     else
//         h = (r - g) / delta + 4;
//     h = Math.round(h * 60);
//     if (h < 0)
//         h += 360;
//     l = (cmax + cmin) / 2;
//     s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
//     s = +(s * 100).toFixed(1);
//     l = +(l * 100).toFixed(1);
//     return "hsl(" + h + "," + s + "%," + l + "%)";
// }

class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.hsl();
    }

    rgb() {
        let { r, g, b } = this;
        return `rgb(${r} , ${g} , ${b})`;
    }

    hex() {
        let { r, g, b } = this;
        if (r < 16) r = '0' + r.toString(16);
        else r = r.toString(16);
        if (g < 16) g = '0' + g.toString(16);
        else g = g.toString(16);
        if (b < 16) b = '0' + b.toString(16);
        else b = b.toString(16);
        return '#' + r + g + b;
    }

    rgba(a) {
        let { r, g, b } = this;
        return `rgba(${r} , ${g} , ${b} , ${a})`
    }

    hsl() {
        let { r, g, b } = this;
        r /= 255;
        g /= 255;
        b /= 255;
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        if (delta == 0)
            h = 0;
        else if (cmax == r)
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            h = (b - r) / delta + 2;
        else
            h = (r - g) / delta + 4;
        h = Math.round(h * 60);
        if (h < 0)
            h += 360;
        l = (cmax + cmin) / 2;
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        s = +(s * 100).toFixed(1);
        N
        l = +(l * 100).toFixed(1);
        this.h = h;
        this.l = l;
        this.s = s;
        return "hsl(" + h + "," + s + "%," + l + "%)";
    }

    opposite() {
        let hTemp = (this.h + 180) % 360;
        return `hsl(${hTemp} , ${this.s}% , ${this.l}%)`
    }
}

class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return `${this.name} says meow!`;
    }
}

class Dog extends Pet {
    bhow() {
        return `${this.name} says bhow!`;
    }
}