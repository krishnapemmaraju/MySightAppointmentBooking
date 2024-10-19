const fs = require('fs-extra');
const path = require('path');

export default class JSONUtils{

    private filePath:string;
    private data:string;

    constructor(filePath:string){
         this.filePath = filePath;
         this.data = fs.readFileSync(path.join(filePath));
    }

    async getJsonObject(){
        let getJsonObjectData = JSON.parse(this.data);
        return getJsonObjectData;
    }

}