
function calc () {

    var uno     =  parseInt(document.getElementById("app1")) || 0;
    var dos     =  parseInt(document.getElementById("app2")) || 0;
    var tres    =  parseInt(document.getElementById("app3")) || 0;
    var four    =  parseInt(document.getElementById("app4")) || 0;

    console.log(typeof(dos));

    let typeConn = document.getElementById("conn-type").value;

    switch (typeConn) {

        case "series":
            let seriesRes = uno + dos + tres + four; 
            console.log(uno);
            console.log("series, yo", seriesRes);
            return seriesRes;

        case "parallel":
            let parallelRes = uno * dos * tres * four;
            console.log("parallel, yo", parallelRes);
            return parallelRes;

        default:
            console.log("something else is there");
    }


    alert (uno);

};