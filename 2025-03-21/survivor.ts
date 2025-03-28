import { Level } from "./level";

export class Survivor{
    protected level:Level;

    constructor(levelConst:Level = Level.blue){
        this.level = levelConst;
    };

    getLevel():Level{
        return this.level;
    };
};