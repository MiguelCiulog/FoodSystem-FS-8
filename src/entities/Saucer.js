import { PreparedProduct } from "./PreparedProduct.js"

export class Saucer extends PreparedProduct{
    constructor(name, basePrice, cost, availability, ingredients, taxes, stock){
        super(name, basePrice, cost, availability, ingredients, taxes, stock)
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value == undefined || typeof value !== "string"){
            throw Error ("Invalid name producto")
        }else{
            this._name = value;
        }
    }

    get basePrice(){
        return this._basePrice;
    }

    set basePrice(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Invalid basePrice producto")
        }else{
            this._basePrice = value;
        }
    }

    get cost(){
        return this._cost;
    }

    set cost(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Invalid cost producto")
        }else{
            this._cost = value;
        }
    }

    get availability(){
        return this._availability;
    }

    set availability(value){
        if(value == undefined || typeof value !== "boolean"){
            throw Error ("Invalid availability producto")
        }else{
            this._availability = value;
        }
    }

    get ingredients(){
        return this._ingredients;
    }

    set ingredients(value){
        if(value == undefined || typeof value !== "object"){
            throw Error ("Invalid ingredients producto")
        }else{
            this._ingredients = value;
        }
    }

    get taxes(){
        return this._taxes;
    }

    set taxes(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Invalid taxes producto")
        }else{
            this._taxes = value;
        }
    }

    toPersistenceObject(){
        return {
            name: this._name,
            basePrice: this._basePrice,
            cost: this._cost,   
            availability: this._availability,
            taxes: this._taxes,
            stock: this._stock
        }
    }
}