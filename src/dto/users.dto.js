import _ from 'lodash'

export class UserCreateDTO {
    constructor(user) {
        this.name = user.name
        this.mail = user.mail
        this.password = user.password
        this.lastName = user.lastName
        this.age = user.age
        this.alias = user.alias
        this.avatar = user.avatar
    }
    build(){
        if(_.isNil(this.name)) throw new Error('name is required');
        if(_.isNil(this.mail)) throw new Error('mail is required');
        if(_.isNil(this.password)) throw new Error('password is required');
        if(_.isNil(this.lastName)) throw new Error('lastName is required');
        return this;
    }
}

export class UserResponseDTO {
    constructor(user){
        this.name = user.name
        this.lastName = user.lastName
        this.alias = user.alias
        this.avatar = user.avatar
    }
    build(){
        return this
    }
}