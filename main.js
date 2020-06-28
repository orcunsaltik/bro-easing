import $ from 'Bro';

$.easing = {
    linear(n) {
        return n;
    },
    swing(n) {
        return 0.5 - Math.cos(n * Math.PI) / 2;
    },
    easeInQuad(n) {
        return n * n;
    },
    easeOutQuad(n) {
        return n * (2 - n);
    },
    easeInOutQuad(n) {
        n *= 2;
        if (n < 1) {
            return 0.5 * n * n;
        }
        n -= 1;
        return -0.5 * (n * (n - 2) - 1);
    },
    easeInCube(n) {
        return n * n * n;
    },
    easeOutCube(n) {
        n -= 1;
        return  n * n * n + 1;
    },
    easeInOutCube(n) {
        n *= 2;
        if (n < 1) {
            return 0.5 * n * n * n;
        }
        n -= 2;
        return 0.5 * (n * n * n + 2);
    },
    easeInQuart(n) {
        return n * n * n * n;
    },
    easeOutQuart(n) {
        n -= 1;
        return 1 - (n * n * n * n);
    },
    easeInOutQuart(n) {
        n *= 2;
        if (n < 1) {
            return 0.5 * n * n * n * n;
        }
        n -= 2;
        return -0.5 * (n * n * n * n - 2);
    },
    easeInQuint(n) {
        return n * n * n * n * n;
    },
    easeOutQuint(n) {
        n -= 1;
        return n * n * n * n * n + 1;
    },
    easeInOutQuint(n) {
        n *= 2;
        if (n < 1) {
            return 0.5 * n * n * n * n * n;
        }
        n -= 2;
        return 0.5 * (n * n * n * n * n + 2);
    },
    easeInSine(n) {
        return 1 - Math.cos((n * Math.PI) / 2);
    },
    easeOutSine(n) {
        return Math.sin((n * Math.PI) / 2);
    },
    easeInOutSine(n) {
        return 0.5 * (1 - Math.cos(Math.PI * n));
    },
    easeInExpo(n) {
        return n === 0 ? 0 : 1024 ** (n - 1);
    },
    easeOutExpo(n) {
        return n === 1 ? n : 1 - 2 ** (-10 * n);
    },
    easeInOutExpo(n) {
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        if ((n *= 2) < 1) {
            return 0.5 * (1024 ** (n - 1));
        }
        return 0.5 * (-(2 ** (-10 * (n - 1))) + 2);
    },
    easeInCirc(n) {
        return 1 - Math.sqrt(1 - n * n);
    },
    easeOutCirc(n) {
        n -= 1;
        return Math.sqrt(1 - (n * n));
    },
    easeInOutCirc(n) {
        n *= 2;
        if (n < 1) {
            return -0.5 * (Math.sqrt(1 - n * n) - 1);
        }
        n -= 2;
        return 0.5 * (Math.sqrt(1 - n * n) + 1);
    },
    easeInBack(n) {
        const s = 1.70158;
        return n * n * ((s + 1) * n - s);
    },
    easeOutBack(n) {
        const s = 1.70158;
        n -= 1;
        return n * n * ((s + 1) * n + s) + 1;
    },
    easeInOutBack(n) {
        const s = 1.70158 * 1.525;
        n *= 2;
        if (n < 1) {
            return 0.5 * (n * n * ((s + 1) * n - s));
        }
        n -= 2;
        return 0.5 * (n * n * ((s + 1) * n + s) + 2);
    },
    easeInBounce(n) {
        return 1 - this.easeOutBounce(1 - n);
    },
    easeOutBounce(n) {
        if (n < (1 / 2.75)) {
            return 7.5625 * n * n;
        }
        if (n < (2 / 2.75)) {
            n -= (1.5 / 2.75);
            return 7.5625 * n * n + 0.75;
        }
        if (n < (2.5 / 2.75)) {
            n -= (2.25 / 2.75);
            return 7.5625 * n * n + 0.9375;
        }
        n -= (2.625 / 2.75);
        return 7.5625 * n * n + 0.984375;
    },
    easeInOutBounce(n) {
        if (n < 0.5) {
            return this.easeInBounce(n * 2) * 0.5;
        }   return this.easeOutBounce(n * 2 - 1) * 0.5 + 0.5;
    },
    easeInElastic(n) {
        let s;
        let a = 0.1;
        const p = 0.4;
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        if (!a || a < 1) {
            a = 1;
            s = p / 4;
        } else {
            s = (p * Math.asin(1 / a)) / (2 * Math.PI);
        }
        n -= 1;
        return -(a * (2 ** (10 * n)) * Math.sin(((n - s) * (2 * Math.PI)) / p));
    },
    easeOutElastic(n) {
        let s;
        let a = 0.1;
        const p = 0.4;
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        if (!a || a < 1) {
            a = 1;
            s = p / 4;
        } else {
            s = (p * Math.asin(1 / a)) / (2 * Math.PI);
        }
        return a * (2 ** (-10 * n)) * Math.sin(((n - s) * (2 * Math.PI)) / p) + 1;
    },
    easeInOutElastic(n) {
        let s;
        let a = 0.1;
        const p = 0.4;
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        if (!a || a < 1) {
            a = 1;
            s = p / 4;
        } else
            s = (p * Math.asin(1 / a)) / (2 * Math.PI);
        if ((n *= 2) < 1) {
            n -= 1;
            return -0.5 * (a * (2 ** (10 * n)) * Math.sin(((n - s) * (2 * Math.PI)) / p));
        }
        n -= 1;
        return a * (2 ** (-10 * n)) * Math.sin(((n - s) * (2 * Math.PI)) / p) * 0.5 + 1;
    }
};
