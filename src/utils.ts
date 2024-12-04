import { Guid } from 'guid-typescript';

export function createId(): string {
  return Guid.raw();
}
