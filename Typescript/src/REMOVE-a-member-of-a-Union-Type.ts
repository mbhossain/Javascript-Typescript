export type Latters = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
// type RemoveMember<T> = T extends 'C' ? never : T;
// type RemoveMember<T> = T extends 'C' ? 'Z' : T;
// type RemoveMember<T, K> = T extends K ? never : T;
type RemoveMember<T, K> = T extends K ? 'W' : T;
type WithLatterK = RemoveMember<Latters, 'C'>;