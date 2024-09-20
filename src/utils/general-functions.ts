
export const APP_CONSTANTS = {
  STR_EMPTY: ''
}

export function isEmpty(value: string): boolean {
  if (value === undefined || value === null) {
    return true;
  }

  return value?.trim() === APP_CONSTANTS.STR_EMPTY;
}

export function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/-/g, '&&');
};
