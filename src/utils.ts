// src/utils.ts
export function funcA(input: string): string {
  // This is a simple, clean change.
  return `Processed A: ${input}`;
}

export function funcB(input: string): string {
  // This function should NOT be changed.
  return `Processed B: ${input}`;
}