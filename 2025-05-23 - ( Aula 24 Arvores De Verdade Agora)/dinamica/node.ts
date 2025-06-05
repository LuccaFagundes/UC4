import { Pessoa } from "./pessoa";

export class Node <T>{
    protected value: T
    protected children: Node <T>[] = []

    constructor(valueConstruct: T){
        this.value = valueConstruct
    }

    addChildren(pai: Pessoa, filho: Pessoa): void{}

    getChildren(): Node<T>[]{
        return this.children
    }
}