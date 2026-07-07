// src/utils.ts
export function funcA(input: string): string {
  // This is the function we plan to change.
  return `Processed A (final test change): ${input}`; // <-- ALLOWED
}

export function funcB(input: string): string {
  // This function should NOT be changed.
  return `Processed B (final rogue edit): ${input}`; // <-- ROGUE
}