


function calc () {

    let uno     = Number(document.getElementById("app1").value);
    let dos     = Number(document.getElementById("app2").value);
    let tres    = Number(document.getElementById("app3").value);
    let four    = Number(document.getElementById("app4").value);

    console.log("uno is", uno, "dos is", dos);

    let typeConn = document.getElementById("conn-type").value;

    switch (typeConn) {

        case "series":
            let seriesRes = uno + dos + tres + four;
            console.log("series, yo", seriesRes);
            return seriesRes;

        case "parallel":
            let parallelRes = 1 / ((1/uno) + (1/dos) + (1/tres) + (1/four));
            console.log("parallel, yo", parallelRes);
            return parallelRes;

        default:
            console.log("something else is there");
    }

};