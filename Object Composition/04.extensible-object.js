function extend(template){
    let obj = {
        extend: function(templateObj){
            for (const templateProp of Object.keys(templateObj)) {
                if (typeof templateObj[templateProp] === "function") {
                    Object.getPrototypeOf(obj)[templateProp] = templateObj[templateProp];
                } else {
                    obj[templateProp] = templateObj[templateProp];
                }
            }
        }
    };

    return obj;
}