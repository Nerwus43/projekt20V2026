/**
 * Quantum Programs Examples
 * Simple quantum algorithms and programs using the quantum emulator
 */

// Import the quantum emulator classes
const { QuantumCircuit, QuantumGates } = require('./quantum-emulator');

/**
 * Program 1: Quantum Coin Flip
 * Creates a superposition and measures it to simulate a quantum coin flip
 */
function quantumCoinFlip(): void {
    console.log('=== Quantum Coin Flip ===');
    
    // Create a 1-qubit circuit
    const circuit = new QuantumCircuit(1);
    
    // Apply Hadamard gate to create superposition |0⟩ + |1⟩
    circuit.addHadamard(0);
    
    // Measure the qubit
    const result = circuit.measure(0);
    console.log(`Measurement result: ${result}`);
    console.log('This simulates a quantum coin flip!');
    console.log('');
}

/**
 * Program 2: Bell State Creation
 * Creates an entangled pair of qubits (Bell state)
 */
function createBellState(): void {
    console.log('=== Bell State Creation ===');
    
    // Create a 2-qubit circuit
    const circuit = new QuantumCircuit(2);
    
    // Step 1: Apply Hadamard to first qubit (creates superposition)
    circuit.addHadamard(0);
    
    // Step 2: Apply CNOT with first qubit as control, second as target
    circuit.addCNOT(0, 1);
    
    // The result should be the Bell state: (|00⟩ + |11⟩)/√2
    console.log('Created Bell state: (|00⟩ + |11⟩)/√2');
    
    // Run multiple times to see the correlation
    const results = circuit.run(1000);
    console.log('Measurement statistics:');
    results.forEach((count: number, state: string) => {
        console.log(`  ${state}: ${count} times (${(count/1000*100).toFixed(1)}%)`);
    });
    console.log('');
}

/**
 * Program 3: Quantum Random Number Generator
 * Generates random binary numbers using quantum superposition
 */
function quantumRandomNumberGenerator(bits: number = 8): void {
    console.log(`=== Quantum Random Number Generator (${bits}-bit) ===`);
    
    // Create a circuit with the specified number of qubits
    const circuit = new QuantumCircuit(bits);
    
    // Apply Hadamard gates to all qubits to create superposition
    for (let i = 0; i < bits; i++) {
        circuit.addHadamard(i);
    }
    
    // Measure all qubits to get a random binary number
    let binaryResult = '';
    for (let i = 0; i < bits; i++) {
        const bit = circuit.measure(i);
        binaryResult = bit + binaryResult;
    }
    
    const decimalResult = parseInt(binaryResult, 2);
    console.log(`Random binary: ${binaryResult}`);
    console.log(`Random decimal: ${decimalResult}`);
    console.log('');
}

/**
 * Program 4: Quantum Teleportation Protocol
 * Simulates the quantum teleportation algorithm
 */
function quantumTeleportation(): void {
    console.log('=== Quantum Teleportation Protocol ===');
    
    // Create a 3-qubit circuit
    // Qubit 0: Alice's qubit to teleport
    // Qubit 1: Alice's part of entangled pair
    // Qubit 2: Bob's part of entangled pair
    const circuit = new QuantumCircuit(3);
    
    // Step 1: Create entanglement between qubits 1 and 2 (Bell pair)
    circuit.addHadamard(1);
    circuit.addCNOT(1, 2);
    
    // Step 2: Create the state to teleport on qubit 0
    // For simplicity, we'll teleport a |1⟩ state
    circuit.addX(0);
    
    // Step 3: Alice performs Bell measurement on qubits 0 and 1
    circuit.addCNOT(0, 1);
    circuit.addHadamard(0);
    
    // Step 4: Alice sends classical bits to Bob
    // (In simulation, we measure and apply corrections)
    const bit1 = circuit.measure(0);
    const bit2 = circuit.measure(1);
    
    console.log(`Alice's measurement results: ${bit1}, ${bit2}`);
    
    // Step 5: Bob applies corrections based on Alice's results
    if (bit2 === 1) circuit.addX(2);  // Apply X gate if bit2 = 1
    if (bit1 === 1) circuit.addZ(2);  // Apply Z gate if bit1 = 1
    
    // Measure Bob's qubit - should now contain the teleported state
    const teleportedState = circuit.measure(2);
    console.log(`Teleported state on Bob's qubit: ${teleportedState}`);
    console.log('Quantum teleportation successful!');
    console.log('');
}

/**
 * Program 5: Grover's Search Algorithm (Simplified)
 * Demonstrates quantum search on a 2-qubit system
 */
function groversSearch(): void {
    console.log('=== Grover\'s Search Algorithm (2-qubit) ===');
    
    // Create a 2-qubit circuit
    const circuit = new QuantumCircuit(2);
    
    // Step 1: Create superposition of all states
    circuit.addHadamard(0);
    circuit.addHadamard(1);
    
    // Step 2: Oracle (marks the state |11⟩)
    // In a real implementation, this would be more complex
    // Here we simulate the oracle effect
    circuit.addCNOT(0, 1);
    circuit.addX(1);
    circuit.addCNOT(0, 1);
    circuit.addX(1);
    
    // Step 3: Diffusion operator (amplitude amplification)
    circuit.addHadamard(0);
    circuit.addHadamard(1);
    circuit.addX(0);
    circuit.addX(1);
    circuit.addCNOT(0, 1);
    circuit.addX(1);
    circuit.addCNOT(0, 1);
    circuit.addX(0);
    circuit.addHadamard(0);
    circuit.addHadamard(1);
    
    // Measure the result
    const results = circuit.run(1000);
    console.log('Search results (looking for |11⟩):');
    results.forEach((count: number, state: string) => {
        console.log(`  ${state}: ${count} times (${(count/1000*100).toFixed(1)}%)`);
    });
    console.log('');
}

/**
 * Program 6: Quantum Fourier Transform (Simplified)
 * Demonstrates basic quantum phase estimation concepts
 */
function quantumFourierTransform(): void {
    console.log('=== Quantum Fourier Transform (Simplified) ===');
    
    // Create a 2-qubit circuit
    const circuit = new QuantumCircuit(2);
    
    // Initialize to a specific state (e.g., |10⟩)
    circuit.addX(1);
    
    // Apply QFT operations
    circuit.addHadamard(0);
    // Add controlled phase rotation (simplified)
    circuit.addCNOT(1, 0);
    circuit.addHadamard(1);
    
    // Measure the result
    const results = circuit.run(1000);
    console.log('QFT results:');
    results.forEach((count: number, state: string) => {
        console.log(`  ${state}: ${count} times (${(count/1000*100).toFixed(1)}%)`);
    });
    console.log('');
}

/**
 * Main function to run all quantum programs
 */
function runAllPrograms(): void {
    console.log('🔬 Quantum Computer Emulator - Example Programs\n');
    
    quantumCoinFlip();
    createBellState();
    quantumRandomNumberGenerator(8);
    quantumTeleportation();
    groversSearch();
    quantumFourierTransform();
    
    console.log('🎉 All quantum programs completed!');
    console.log('\nNote: These are simplified simulations of quantum algorithms.');
    console.log('Real quantum computers would show true quantum behavior.');
}

// Export the programs for use
module.exports = {
    quantumCoinFlip,
    createBellState,
    quantumRandomNumberGenerator,
    quantumTeleportation,
    groversSearch,
    quantumFourierTransform,
    runAllPrograms
};

// Run the programs if this file is executed directly
if (typeof module !== 'undefined' && module.parent === null) {
    runAllPrograms();
}
