export enum AccessibilityEnum {
  HIGH_CONTRAST_LIGHT = 'HIGH_CONTRAST_LIGHT',
  HIGH_CONTRAST_DARK = 'HIGH_CONTRAST_DARK',
  LETTER_SPACING = 'LETTER_SPACING',
  HIGHLIGHT_LINKS = 'HIGHLIGHT_LINKS',
  BIG_CURSOR = 'BIG_CURSOR',
}

export type AccessibilityOptions = {
  [K in AccessibilityEnum]: boolean
}
