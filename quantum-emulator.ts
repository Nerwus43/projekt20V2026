/**
 * Quantum Computer Emulator
 * A TypeScript implementation of a quantum computer simulator
 */

// Import required mathematical functions
const { Complex, Matrix } = require('./math-extensions');

// Type declarations for the imported classes
type Complex = InstanceType<typeof Complex>;
type Matrix = InstanceType<typeof Matrix>;

/**
 * Quantum State representation
 * Represents the state of a quantum system as a vector of complex amplitudes
 */
class QuantumState {
    private amplitudes: Complex[];

    constructor(size: number) {
        this.amplitudes = new Array(size).fill(new Complex(0, 0));
        // Initialize to |0⟩ state (first amplitude = 1, rest = 0)
        this.amplitudes[0] = new Complex(1, 0);
    }

    /**
     * Get the probability of measuring a specific state
     */
    getProbability(index: number): number {
        return this.amplitudes[index].magnitudeSquared();
    }

    /**
     * Get the amplitude of a specific state
     */
    getAmplitude(index: number): Complex {
        return this.amplitudes[index];
    }

    /**
     * Apply a unitary transformation (quantum gate)
     */
    applyGate(matrix: Matrix): void {
        this.amplitudes = matrix.multiplyVector(this.amplitudes);
    }

    /**
     * Measure the quantum state (collapse to classical state)
     */
    measure(): number {
        // Calculate probabilities
        const probabilities = this.amplitudes.map(a => a.magnitudeSquared());
        
        // Generate random number for measurement
        const random = Math.random();
        let cumulative = 0;

        for (let i = 0; i < probabilities.length; i++) {
            cumulative += probabilities[i];
            if (random <= cumulative) {
                // Collapse to measured state
                this.amplitudes = new Array(this.amplitudes.length).fill(new Complex(0, 0));
                this.amplitudes[i] = new Complex(1, 0);
                return i;
            }
        }
        
        // Fallback (shouldn't happen)
        return 0;
    }

    /**
     * Get the number of qubits
     */
    getQubitCount(): number {
        return Math.log2(this.amplitudes.length);
    }

    /**
     * Clone the quantum state
     */
    clone(): QuantumState {
        const newState = new QuantumState(this.amplitudes.length);
        for (let i = 0; i < this.amplitudes.length; i++) {
            newState.amplitudes[i] = this.amplitudes[i].clone();
        }
        return newState;
    }
}

/**
 * Quantum Register
 * Manages multiple qubits and their operations
 */
class QuantumRegister {
    private state: QuantumState;
    private qubitCount: number;

    constructor(qubitCount: number) {
        this.qubitCount = qubitCount;
        this.state = new QuantumState(1 << qubitCount); // 2^n states
    }

    /**
     * Apply a single-qubit gate to a specific qubit
     */
    applySingleQubitGate(gate: Matrix, qubitIndex: number): void {
        const fullGate = this.expandSingleQubitGate(gate, qubitIndex);
        this.state.applyGate(fullGate);
    }

    /**
     * Apply a two-qubit gate (CNOT)
     */
    applyCNOT(controlQubit: number, targetQubit: number): void {
        const cnot = this.createCNOT(controlQubit, targetQubit);
        this.state.applyGate(cnot);
    }

    /**
     * Measure a specific qubit
     */
    measureQubit(qubitIndex: number): number {
        // For simplicity, measure the entire register and extract the qubit
        const result = this.state.measure();
        return (result >> qubitIndex) & 1;
    }

    /**
     * Get the current state vector
     */
    getState(): QuantumState {
        return this.state.clone();
    }

    /**
     * Reset the register to |000...0⟩ state
     */
    reset(): void {
        this.state = new QuantumState(1 << this.qubitCount);
    }

    private expandSingleQubitGate(gate: Matrix, qubitIndex: number): Matrix {
        let result = Matrix.identity(2);
        
        for (let i = 0; i < this.qubitCount; i++) {
            if (i === qubitIndex) {
                result = result.tensorProduct(gate);
            } else {
                result = result.tensorProduct(Matrix.identity(2));
            }
        }
        
        return result;
    }

    private createCNOT(control: number, target: number): Matrix {
        const size = 1 << this.qubitCount;
        const matrix = Matrix.identity(size);
        
        for (let i = 0; i < size; i++) {
            if ((i >> control) & 1) { // Control qubit is |1⟩
                const flipped = i ^ (1 << target); // Flip target qubit
                if (i !== flipped) {
                    // Swap the rows corresponding to |i⟩ and |flipped⟩
                    for (let j = 0; j < size; j++) {
                        const temp = matrix.data[i][j];
                        matrix.data[i][j] = matrix.data[flipped][j];
                        matrix.data[flipped][j] = temp;
                    }
                }
            }
        }
        
        return matrix;
    }
}

/**
 * Quantum Gates Library
 * Common quantum gates and operations
 */
class QuantumGates {
    // Pauli-X gate (NOT gate)
    static X(): Matrix {
        return new Matrix([
            [new Complex(0, 0), new Complex(1, 0)],
            [new Complex(1, 0), new Complex(0, 0)]
        ]);
    }

    // Pauli-Y gate
    static Y(): Matrix {
        return new Matrix([
            [new Complex(0, 0), new Complex(0, -1)],
            [new Complex(0, 1), new Complex(0, 0)]
        ]);
    }

    // Pauli-Z gate
    static Z(): Matrix {
        return new Matrix([
            [new Complex(1, 0), new Complex(0, 0)],
            [new Complex(0, 0), new Complex(-1, 0)]
        ]);
    }

    // Hadamard gate (creates superposition)
    static H(): Matrix {
        const val = 1 / Math.sqrt(2);
        return new Matrix([
            [new Complex(val, 0), new Complex(val, 0)],
            [new Complex(val, 0), new Complex(-val, 0)]
        ]);
    }

    // Phase gate
    static S(): Matrix {
        return new Matrix([
            [new Complex(1, 0), new Complex(0, 0)],
            [new Complex(0, 0), new Complex(0, 1)]
        ]);
    }

    // T gate
    static T(): Matrix {
        return new Matrix([
            [new Complex(1, 0), new Complex(0, 0)],
            [new Complex(0, 0), new Complex(Math.cos(Math.PI/4), Math.sin(Math.PI/4))]
        ]);
    }

    // Identity gate
    static I(): Matrix {
        return Matrix.identity(2);
    }
}

/**
 * Quantum Circuit
 * High-level interface for building quantum algorithms
 */
class QuantumCircuit {
    private register: QuantumRegister;
    private gates: { gate: Matrix; qubits: number[] }[] = [];

    constructor(qubitCount: number) {
        this.register = new QuantumRegister(qubitCount);
    }

    /**
     * Add a Hadamard gate to create superposition
     */
    addHadamard(qubitIndex: number): void {
        this.register.applySingleQubitGate(QuantumGates.H(), qubitIndex);
        this.gates.push({ gate: QuantumGates.H(), qubits: [qubitIndex] });
    }

    /**
     * Add a Pauli-X gate (NOT)
     */
    addX(qubitIndex: number): void {
        this.register.applySingleQubitGate(QuantumGates.X(), qubitIndex);
        this.gates.push({ gate: QuantumGates.X(), qubits: [qubitIndex] });
    }

    /**
     * Add a CNOT gate
     */
    addCNOT(controlQubit: number, targetQubit: number): void {
        this.register.applyCNOT(controlQubit, targetQubit);
        this.gates.push({ gate: this.createCNOTMatrix(), qubits: [controlQubit, targetQubit] });
    }

    /**
     * Measure a qubit
     */
    measure(qubitIndex: number): number {
        return this.register.measureQubit(qubitIndex);
    }

    /**
     * Get the current quantum state
     */
    getState(): QuantumState {
        return this.register.getState();
    }

    /**
     * Reset the circuit
     */
    reset(): void {
        this.register.reset();
        this.gates = [];
    }

    /**
     * Run the circuit multiple times to get measurement statistics
     */
    run(trials: number = 1000): Map<string, number> {
        const results = new Map<string, number>();
        
        for (let i = 0; i < trials; i++) {
            // Reset to initial state
            this.reset();
            
            // Re-apply all gates
            for (const { gate, qubits } of this.gates) {
                if (qubits.length === 1) {
                    this.register.applySingleQubitGate(gate, qubits[0]!);
                } else if (qubits.length === 2) {
                    this.register.applyCNOT(qubits[0]!, qubits[1]!);
                }
            }
            
            // Measure all qubits
            let result = '';
            const qubitCount = this.register.getState().getQubitCount();
            for (let j = 0; j < qubitCount; j++) {
                result = this.register.measureQubit(j) + result;
            }
            
            results.set(result, (results.get(result) || 0) + 1);
        }
        
        return results;
    }

    private createCNOTMatrix(): Matrix {
        return new Matrix([
            [new Complex(1, 0), new Complex(0, 0), new Complex(0, 0), new Complex(0, 0)],
            [new Complex(0, 0), new Complex(1, 0), new Complex(0, 0), new Complex(0, 0)],
            [new Complex(0, 0), new Complex(0, 0), new Complex(0, 0), new Complex(1, 0)],
            [new Complex(0, 0), new Complex(0, 0), new Complex(1, 0), new Complex(0, 0)]
        ]);
    }
}

// Export classes for use
module.exports = {
    QuantumState,
    QuantumRegister, 
    QuantumGates,
    QuantumCircuit
};
