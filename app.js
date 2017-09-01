
let resultDiv = document.getElementById("result");

function calc () {

    let uno     = Number(document.getElementById("app1").value);
    let dos     = Number(document.getElementById("app2").value);
    let tres    = Number(document.getElementById("app3").value);
    let four    = Number(document.getElementById("app4").value);

    let typeConn = document.getElementById("conn-type").value;

    switch (typeConn) {

        case "series":

            // do the math for series connection
            let seriesRes = uno + dos + tres + four;
            console.log("series, yo", seriesRes);

            // display in the <div id="result">
            resultDiv.innerHTML = seriesRes;

            break;

        case "parallel":

            // break if all the fields are zero, no calc done
            if (uno == 0 && dos == 0 && tres == 0 && four == 0) break;

            // to avoid division by 0
            if (uno <= 0)   uno   =   1;
            if (dos <= 0)   dos   =   1;
            if (tres <= 0)  tres  =   1;
            if (four <= 0)  four  =   1; 

            // do the math for parralel connection
            let parallelRes = 1 / ((1/uno) + (1/dos) + (1/tres) + (1/four));
            console.log("parallel, yo", parallelRes);

            // display in the <div id="result">
            resultDiv.innerHTML = parallelRes;
            
            break;

        default:
            console.log("something else is there");
    }

};