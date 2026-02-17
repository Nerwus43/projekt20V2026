/**
 * Mathematical Extensions for Quantum Computing
 * Complex numbers, matrices, and vectors for quantum operations
 */

/**
 * Complex number implementation
 */
export class Complex {
    public real: number;
    public imag: number;

    constructor(real: number, imag: number) {
        this.real = real;
        this.imag = imag;
    }

    /**
     * Add two complex numbers
     */
    add(other: Complex): Complex {
        return new Complex(this.real + other.real, this.imag + other.imag);
    }

    /**
     * Multiply two complex numbers
     */
    multiply(other: Complex): Complex {
        return new Complex(
            this.real * other.real - this.imag * other.imag,
            this.real * other.imag + this.imag * other.real
        );
    }

    /**
     * Get the complex conjugate
     */
    conjugate(): Complex {
        return new Complex(this.real, -this.imag);
    }

    /**
     * Get the magnitude squared
     */
    magnitudeSquared(): number {
        return this.real * this.real + this.imag * this.imag;
    }

    /**
     * Get the magnitude
     */
    magnitude(): number {
        return Math.sqrt(this.magnitudeSquared());
    }

    /**
     * Clone the complex number
     */
    clone(): Complex {
        return new Complex(this.real, this.imag);
    }

    /**
     * String representation
     */
    toString(): string {
        if (this.imag === 0) {
            return `${this.real}`;
        } else if (this.real === 0) {
            return `${this.imag}i`;
        } else if (this.imag > 0) {
            return `${this.real} + ${this.imag}i`;
        } else {
            return `${this.real} - ${Math.abs(this.imag)}i`;
        }
    }
}

/**
 * Matrix implementation for quantum operations
 */
export class Matrix {
    public data: Complex[][];

    constructor(data: Complex[][]) {
        this.data = data;
    }

    /**
     * Create an identity matrix
     */
    static identity(size: number): Matrix {
        const data: Complex[][] = [];
        for (let i = 0; i < size; i++) {
            data[i] = [];
            for (let j = 0; j < size; j++) {
                data[i][j] = i === j ? new Complex(1, 0) : new Complex(0, 0);
            }
        }
        return new Matrix(data);
    }

    /**
     * Get matrix dimensions
     */
    getDimensions(): { rows: number; cols: number } {
        const rows = this.data.length;
        const cols = rows > 0 ? this.data[0].length : 0;
        return {
            rows,
            cols
        };
    }

    /**
     * Multiply matrix by vector
     */
    multiplyVector(vector: Complex[]): Complex[] {
        const { rows, cols } = this.getDimensions();
        if (vector.length !== cols) {
            throw new Error('Matrix and vector dimensions do not match');
        }

        const result: Complex[] = new Array(rows).fill(new Complex(0, 0));
        
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const matrixElement = this.data[i][j]!;
                const vectorElement = vector[j];
                result[i] = result[i].add(matrixElement.multiply(vectorElement));
            }
        }
        
        return result;
    }

    /**
     * Tensor product with another matrix
     */
    tensorProduct(other: Matrix): Matrix {
        const { rows: r1, cols: c1 } = this.getDimensions();
        const { rows: r2, cols: c2 } = other.getDimensions();
        
        const resultData: Complex[][] = [];
        const resultRows = r1 * r2;
        const resultCols = c1 * c2;
        
        for (let i = 0; i < resultRows; i++) {
            resultData[i] = new Array(resultCols).fill(new Complex(0, 0));
        }
        
        for (let i = 0; i < r1; i++) {
            for (let j = 0; j < c1; j++) {
                for (let k = 0; k < r2; k++) {
                    for (let l = 0; l < c2; l++) {
                        const row = i * r2 + k;
                        const col = j * c2 + l;
                        const thisElement = this.data[i][j]!;
                        const otherElement = other.data[k][l]!;
                        resultData[row][col] = thisElement.multiply(otherElement);
                    }
                }
            }
        }
        
        return new Matrix(resultData);
    }

    /**
     * Clone the matrix
     */
    clone(): Matrix {
        const { rows, cols } = this.getDimensions();
        const newData: Complex[][] = [];
        
        for (let i = 0; i < rows; i++) {
            newData[i] = [];
            for (let j = 0; j < cols; j++) {
                const element = this.data[i][j]!;
                newData[i][j] = element.clone();
            }
        }
        
        return new Matrix(newData);
    }
}

/**
 * Vector implementation (alias for Complex array)
 */
export type Vector = Complex[];
