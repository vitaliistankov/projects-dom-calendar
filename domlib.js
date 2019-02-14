var DOMat = {
    get: function(id) {
        return document.getElementById(id);
    },

    text: function(id, text) {

        var innerElement = this.get(id);
        var textNode = document.createTextNode(text);
        innerElement.appendChild(textNode);
    },
    
    textElement: function(element, text) {

        var textNode = document.createTextNode(text);
        element.appendChild(textNode);
    },

    attribute: function (element, attributeProperty, attributeValue) {

        element.setAttribute(attributeProperty, attributeValue);

    }

      
};






// var DOMat = {
//     style: function(selector, styleProperty, styleValue) {
//         var element = document.getElementById();
//         element.style[styleProperty] = styleValue;
//     }
// }


