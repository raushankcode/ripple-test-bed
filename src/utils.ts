// src/utils.ts
export function funcA(input: string): string {
  // This change is ALLOWED by our narrow boundary
  return `Processed A (definitive success): ${input}`;
}

export function funcB(input: string): string {
  // This change is FORBIDDEN by our narrow boundary
  return `Processed B (definitive rogue): ${input}`;
}