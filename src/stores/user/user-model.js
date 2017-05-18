// Dependencies
import { extendObservable } from 'mobx'
import BaseModel from '../base/base-model'

// Model
class User extends BaseModel {
  constructor (stores) {
    super(stores)

    extendObservable(this, {
      name: '',
      email: ''
    })
  }
}

// Exports
export default User
