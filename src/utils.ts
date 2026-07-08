// src/utils.ts
export function funcA(input: string): string {
  // This is the function we plan to change.
  return `Processed A (v12 test change): ${input}`; // <-- ALLOWED
}

export function funcB(input: string): string {
  // This function should NOT be changed.
  return `Processed B (v12 rogue edit): ${input}`; // <-- ROGUE
}