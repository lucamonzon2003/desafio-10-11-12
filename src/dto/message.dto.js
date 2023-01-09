import _ from 'lodash'

export class MessageCreateDTO {
    constructor(message) {
        this.nombre = message.nombre
        this.apellido = message.price
        this.edad = message.edad
        this.alias = message.alias
        this.avatar = message.avatar
        this.mensaje = message.mensaje
    }
    build(){
        if(_.isNil(this.nombre)) throw new Error('nombre is required');
        if(_.isNil(this.apellido)) throw new Error('apellido is required');
        if(_.isNil(this.edad)) throw new Error('edad is required');
        if(_.isNil(this.alias)) throw new Error('alias is required');
        if(_.isNil(this.avatar)) throw new Error('avatar is required');
        if(_.isNil(this.mensaje)) throw new Error('mensaje is required');
        return this
    }
}

export class MessageResponseDTO {
    constructor(message){
        this.alias = message.alias
        this.avatar = message.avatar
        this.mensaje = message.mensaje
    }
    build(){
        return this
    }
}