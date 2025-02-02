export type TLinesConfig = { id: number, timing: number, trains: number }[];

export const LINES_CONFIG: TLinesConfig = [
    { id: 1, timing: 6000, trains: 12},
    { id: 2, timing: 12000, trains: 16},
    { id: 3, timing: 11500, trains: 14},
    { id: 4, timing: 8000, trains: 10},
    { id: 5, timing: 5500, trains: 8},
    { id: 6, timing: 8000, trains: 10},
    { id: 7, timing: 9000, trains: 12},
    //{ id: 8, timing: 000, trains: 0},
    { id: 9, timing: 7500 * 2, trains: 8}
] as const;