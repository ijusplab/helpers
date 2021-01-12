export type cell = string | number | Date | null | undefined | boolean;

export type table<T extends cell> = T[][];
