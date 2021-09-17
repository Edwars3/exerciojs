
const class1 = ['yasmin', 'isadora', 'benedita', 'brenda', 'luiza', 'fatima', 'caio', 'teresinha', 'hugo', 'zeca', 'catarina', 'emanuel', 'marcelo', 'claudio', 'marina', 'isabela', 'anthony', 'rebeca', 'filipe', 'laís', 'vinicius', 'helena', 'elisa', 'rodrigo', 'geraldo', 'yuri', 'marcio']
const class2 = ['benedita', 'elisa', 'emanuel', 'rodrigo', 'filipe', 'marcio', 'teresinha', 'laís', 'vinicius', 'marina', 'catarina', 'luiza', 'marcelo', 'rebeca', 'hugo', 'geraldo', 'zeca', 'caio', 'anthony', 'yasmin', 'claudio']
const class3 = ['isadora', 'isabela', 'laís', 'claudio', 'catarina', 'zeca', 'teresinha', 'emanuel', 'marcio', 'fatima', 'rodrigo', 'luiza', 'brenda', 'marina', 'marcelo', 'benedita', 'rebeca', 'filipe', 'helena', 'elisa', 'hugo', 'geraldo']

for(var i = 0; i < class1.length; i++) {
    for(var j=0; j < class1.length; j++) {
        if(class1[i] > class1[j]) {
            var temp = class1[i];
            class1[i] = class1[j];
            class1[j] = temp;        
        }
    }
}

for(var i = 0; i < class2.length; i++) {
    for(var j=0; j < class2.length; j++) {
        if(class2[i] > class2[j]) {
            var temp = class2[i];
            class2[i] = class2[j];
            class2[j] = temp;        
        }
    }
}

for(var i = 0; i < class3.length; i++) {
    for(var j=0; j < class3.length; j++) {
        if(class3[i] > class3[j]) {
            var temp = class3[i];
            class3[i] = class3[j];
            class3[j] = temp;        
        }
    }
}


console.log("Array:: ", class1);
console.log("Array:: ", class2);
console.log("Array:: ", class3);




