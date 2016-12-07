var com = require("./com");

function UserManager() {
    this.html = "<ul></ul>";

    this.load = function(option) {
        try {
            var datas = com.getData() || [];
            this.html = "<ul>";
            for (var i = 0; i < datas.length; ++i) {
                this.html += `<li id="user${datas[i].id}" class="username">${datas[i].name}</li>`
            }
            this.html += "</ul>";
            return this;
        }
        catch(ex) {
            throw new Err({
                code: 1001,
                msg: ex
            })
        }
    };

    this.update = function(data) {
        // return null if success
        try {
            if (!data) {
                data = {
                    id: 0,//default
                    name: "yamada taro"
                }
            }

            if (com.setData(data)) {
                return null;
            }
            else {
                return new Err({
                    code: 2001,
                    msg: `fail to update of ${JSON.stringify(data)}`
                })
            }
        }
        catch(ex) {
            return new Err({
                code: 2001,
                msg: ex
            })
        }
    }
}

function Err(errData) {
    if (!errData) {
        errData = {
            code: -1,
            msg: "unknown error"
        }
    }

    this.obj = errData;
    
    this.getStatus = function() {
        return this.obj.code;
    }

    this.getMessage = function() {
        var msg = `${this.obj.msg} (${this.obj.code})`;
        console.log(msg);
        return msg;
    };

    this.toString = function() {
        return this.getMessage();
    }
}

module.exports = {
    User: UserManager,
    Err: Err
}