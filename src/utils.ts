// src/utils.ts
export function funcA(input: string): string {
  // This is the function we plan to change.
  return `Processed A: ${input}`;
  //right change
}

export function funcB(input: string): string {
  // This function should NOT be changed.
  return `Processed B: ${input}`;
  // outside change
}