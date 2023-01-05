import _ from 'lodash'

export class ProductCreateDTO {
    constructor(message) {
        this.title = message.title
        this.price = message.price
        this.thumbnail = message.thumbnail
    }
    build(){
        if(_.isNil(this.title)) throw new Error('title is required');
        if(_.isNil(this.price)) throw new Error('price is required');
        if(_.isNil(this.thumbnail)) throw new Error('thumbnail is required');
        return this
    }
}

export class ProductResponseDTO {
    constructor(message){
        this.title = message.title
        this.price = message.price
        this.thumbnail = message.thumbnail
    }
    build(){
        return this
    }
}