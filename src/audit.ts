import { UserId } from './user'

export type Audit = {
    createdAt: Date
    updatedAt: Date
    createdBy: UserId
    updatedBy: UserId
}
