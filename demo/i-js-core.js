//
//  i.js 
//  Write JS as you'd speak
//
//
//  i.js is a fun project.
//  It came out of the idea that I decided it is time to learn more
//  about JavaScript and Scope and in general how to set up Functions, etc. 
//
//  Have fun, do whatever you want.
//  License: http://kevingimbel.com/license/

// The _match function is used to find out what kind of element we're dealing with.
// 
// If it gets a Tag name (e.g. "pre", "h1") it will see that var a and var b are null
// but c is defined (or not undefined) so it returns the element via getElementByTagNames
// Notice: it always returns the FIRST element via getElementsByTagName!
// If a is not null it will return a querySelector (in this case a class)
// If b is not null it will return an ID. 
//
// that's it. 
var _match = function(el) {
    a = document.querySelector("."+el);
    b = document.getElementById(el);
    c = document.getElementsByTagName(el);
    if(a != null) {
        return a;
    }
    if(b != null) {
        return b;
    }
    if(c != undefined) {
        return c[0];
    }
};
// the I Object holds all function and is named I because 
// the functions are build like sentences. 
// 
// For example: You may think "Man, I want a Classname" so
// you write I.WantA.classname("thename") - that's it.
var I = {
    WantA: {
        // returns the first tag on the page
        tag: function(tagname) {
            var tag = document.getElementsByTagName(tagname);
            return tag[0];
        },
        
        // returns an element with matching ID
        ID: function(id) {
            var id = document.getElementById(id);
            return id;
        },

        // returns an element with a matching class
        classname: function(c) {
            var classname = document.querySelector("."+c);
            return classname;
        }
    },

    WantTo: {
        // update the text of an element
        update: function(el,content) {
            _match(el).innerText = content;
        },

        // add a Class to an existing element.
        addClass: function(el,c) {
            _match(el).className += " " + c;
        },

        // function to remove a class. Taken from: http://stackoverflow.com/a/2155755/2777153
        removeClass: function(el, c) {
            var reg = new RegExp('(\\s|^)'+c+'(\\s|$)');
            elm = _match(el);
            elm.className = elm.className.replace(reg,'');
        },

        // add an event. Yay!
        addEvent: function(type,el,f) {
                _match(el).addEventListener(type,f);
        }
    }
};

