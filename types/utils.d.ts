import { DataLayerObject } from './types';
export declare const gtmCode: (gtmId: string, defer: boolean, domain: string) => string, hasKey: <T extends object>(obj: T, key: PropertyKey) => key is keyof T, isServer: () => boolean, resetDataLayer: (obj: DataLayerObject) => boolean, sanitize: (str: string) => string, sanitizeObject: (obj: object) => void, useId: (prefix?: string) => string;
