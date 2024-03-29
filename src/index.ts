export * from './crypto'
export * from './date'
export * from './i18n'
export * from './money'
export * from './user'
export * from './web'
export * from './audit'
export * from './ai'
export * from './number'

export type Parameter<T extends (...args: any) => any> = Parameters<T>[0]
export type PartialEntity<T extends { id: any }> = Partial<T> & Pick<T, 'id'>
export type Environment = 'production' | 'staging' | 'development' | 'test'
