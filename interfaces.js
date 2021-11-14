var object = {
    id: '25',
    size: {
        width: 25,
        height: 30
    }
};
var objectSecond = {
    id: '12312',
    size: {
        width: 45,
        height: 30
    }
};
objectSecond.color = '#fff';
var objectThree = {};
var objectFour = {};
objectThree.color = '#fff';
objectFour.color = '#fff';
var objectFive = {
    size: {
        width: 25,
        height: 30
    },
    id: '234',
    getArea: function (width, height) {
        return " \u041F\u043B\u043E\u0449\u0430\u0434\u044C \u0440\u0430\u0432\u043D\u0430:" + width * height;
    }
};
console.log(objectFive.getArea(objectFive.size.width, objectFive.size.height));
