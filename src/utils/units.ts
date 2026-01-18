import type { TemperatureUnit, UnitsSetting } from '../types/Units';

export function unitsToTemperatureUnit(units: UnitsSetting): TemperatureUnit {
  if (units === 'imperial') return 'F';
  if (units === 'metric') return 'C';
  // fallback for "standard" and any unknown value
  return 'K';
}
