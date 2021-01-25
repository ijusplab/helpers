export type value = boolean | string | number | Date;
export type cell = value | null | undefined;
export type table<T extends cell> = T[][];
