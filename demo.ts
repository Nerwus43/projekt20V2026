/**
 * Demo Script for Quantum Computer Emulator
 * This file demonstrates how to use the quantum emulator
 */

// Import the quantum emulator classes
const { QuantumCircuit } = require('./quantum-emulator');

console.log('🔬 Quantum Computer Emulator Demo\n');

// Demo 1: Simple Quantum Coin Flip
console.log('=== Demo 1: Quantum Coin Flip ===');
const coinCircuit = new QuantumCircuit(1);
coinCircuit.addHadamard(0);
const coinResult = coinCircuit.measure(0);
console.log(`Coin flip result: ${coinResult}`);
console.log('This demonstrates quantum superposition!\n');

// Demo 2: Bell State (Quantum Entanglement)
console.log('=== Demo 2: Bell State Creation ===');
const bellCircuit = new QuantumCircuit(2);
bellCircuit.addHadamard(0);
bellCircuit.addCNOT(0, 1);
console.log('Created entangled Bell state: (|00⟩ + |11⟩)/√2');

// Run multiple times to show correlation
const bellResults = bellCircuit.run(100);
console.log('Measurement results:');
bellResults.forEach((count: number, state: string) => {
    console.log(`  ${state}: ${count} times`);
});
console.log('Notice how only |00⟩ and |11⟩ appear - this is quantum entanglement!\n');

// Demo 3: Quantum Random Number Generator
console.log('=== Demo 3: 4-bit Quantum Random Number ===');
const rngCircuit = new QuantumCircuit(4);
for (let i = 0; i < 4; i++) {
    rngCircuit.addHadamard(i);
}

let randomNumber = '';
for (let i = 0; i < 4; i++) {
    const bit = rngCircuit.measure(i);
    randomNumber = bit + randomNumber;
}

const decimalNumber = parseInt(randomNumber, 2);
console.log(`Random binary: ${randomNumber}`);
console.log(`Random decimal: ${decimalNumber} (0-15)\n`);

// Demo 4: Simple Quantum Algorithm
console.log('=== Demo 4: Simple Quantum Algorithm ===');
const algoCircuit = new QuantumCircuit(2);

// Create superposition
algoCircuit.addHadamard(0);
algoCircuit.addHadamard(1);

// Apply some quantum gates
algoCircuit.addCNOT(0, 1);
algoCircuit.addHadamard(0);

// Measure
const algoResults = algoCircuit.run(1000);
console.log('Algorithm results:');
algoResults.forEach((count: number, state: string) => {
    console.log(`  ${state}: ${count} times (${(count/1000*100).toFixed(1)}%)`);
});

console.log('\n🎉 Demo completed!');
console.log('\nThis emulator demonstrates:');
console.log('• Quantum superposition (Hadamard gates)');
console.log('• Quantum entanglement (CNOT gates)');
console.log('• Quantum measurement and probability');
console.log('• Basic quantum algorithms');
console.log('\nNote: This is a classical simulation of quantum behavior.');
console.log('Real quantum computers would exhibit true quantum effects.');