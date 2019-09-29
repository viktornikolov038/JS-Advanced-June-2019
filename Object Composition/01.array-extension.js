(function solve() {
    Array.prototype.last = function(){
        return this[this.length - 1];
    };

    Array.prototype.skip = function(n){
        let resultArr = [];

        for (let index = n; index < this.length; index++) {
            const element = this[index];
            resultArr.push(element);
        }

        return resultArr;
    };

    Array.prototype.take = function(n){
        let resultArray = [];
        for (let index = 0; index < n; index++) {
            resultArray.push(this[index]);
        }

        return resultArray;
    };

    Array.prototype.sum = function(){
        return this.reduce((acc, currenNumber) => +acc + +currenNumber, 0);
    };

    Array.prototype.average = function(){
        return this.sum() / this.length;
    };
})();