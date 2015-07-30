
var yourself = {
    fibonacci : function(n) {
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        else {
            var n1=0, n2=1, c;

            for(var i=2; i<=n; i++){
                c = n1+n2;
                n1 = n2;
                n2 = c;
            }

            return n2;
        }
    }
};
