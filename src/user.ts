import { Brand } from 'ts-brand'

export type UserId = Brand<string, 'UserId'> | 'system' | 'guest'
export type Email = Brand<string, 'Email'>
export type PhoneNumber = Brand<string, 'PhoneNumber'>
