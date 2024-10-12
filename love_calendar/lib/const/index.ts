export type Obj<K extends keyof any, V> = {
    [P in K]: V
};

export type ObjUn<K extends keyof any, V> = {
    [P in K]?: V
};