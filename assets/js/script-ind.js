//  Distance is as the crow flies, aerial route.
/*
const dist_data = [{ "source": "AMD", "dest": "PNQ", "dist": 517 }, { "source": "AMD", "dest": "GOI", "dist": 865 }, { "source": "BLR", "dest": "HYD", "dist": 455 }, { "source": "BLR", "dest": "COK", "dist": 367 }, { "source": "BLR", "dest": "TRV", "dist": 531 }, { "source": "BLR", "dest": "AMD", "dist": 1222 }, { "source": "BLR", "dest": "PNQ", "dist": 723 }, { "source": "BLR", "dest": "GAU", "dist": 2039 }, { "source": "BLR", "dest": "CCJ", "dist": 298 }, { "source": "BLR", "dest": "GOI", "dist": 483 }, { "source": "BLR", "dest": "LKO", "dist": 1544 }, { "source": "BLR", "dest": "VTZ", "dist": 776 }, { "source": "BLR", "dest": "JAI", "dist": 1528 }, { "source": "BLR", "dest": "CJB", "dist": 252 }, { "source": "BLR", "dest": "IDR", "dist": 1078 }, { "source": "BLR", "dest": "NAG", "dist": 889 }, { "source": "BLR", "dest": "IXE", "dist": 306 }, { "source": "BOM", "dest": "MAA", "dist": 1033 }, { "source": "BOM", "dest": "CCU", "dist": 1665 }, { "source": "BOM", "dest": "BLR", "dist": 834 }, { "source": "BOM", "dest": "HYD", "dist": 623 }, { "source": "BOM", "dest": "COK", "dist": 1064 }, { "source": "BOM", "dest": "TRV", "dist": 1258 }, { "source": "BOM", "dest": "AMD", "dist": 444 }, { "source": "BOM", "dest": "PNQ", "dist": 124 }, { "source": "BOM", "dest": "GAU", "dist": 2071 }, { "source": "BOM", "dest": "CCJ", "dist": 944 }, { "source": "BOM", "dest": "GOI", "dist": 425 }, { "source": "BOM", "dest": "LKO", "dist": 1184 }, { "source": "BOM", "dest": "VTZ", "dist": 1103 }, { "source": "BOM", "dest": "CJB", "dist": 1002 }, { "source": "BOM", "dest": "JAI", "dist": 911 }, { "source": "BOM", "dest": "IDR", "dist": 506 }, { "source": "BOM", "dest": "IXE", "dist": 715 }, { "source": "BOM", "dest": "NAG", "dist": 683 }, { "source": "BOM", "dest": "SXR", "dist": 1667 }, { "source": "BOM", "dest": "PAT", "dist": 1449 }, { "source": "BOM", "dest": "IXJ", "dist": 1525 }, { "source": "BOM", "dest": "RPR", "dist": 955 }, { "source": "BOM", "dest": "VNS", "dist": 1247 }, { "source": "BOM", "dest": "ATQ", "dist": 1417 }, { "source": "BOM", "dest": "BBI", "dist": 1362 }, { "source": "BOM", "dest": "IXC", "dist": 1347 }, { "source": "BOM", "dest": "UDR", "dist": 624 }, { "source": "CCU", "dest": "HYD", "dist": 1208 }, { "source": "CCU", "dest": "AMD", "dist": 1620 }, { "source": "CCU", "dest": "PNQ", "dist": 1577 }, { "source": "CCU", "dest": "GAU", "dist": 498 }, { "source": "CCU", "dest": "VTZ", "dist": 773 }, { "source": "CCU", "dest": "JAI", "dist": 1357 }, { "source": "CCU", "dest": "IXB", "dist": 448 }, { "source": "CCU", "dest": "NAG", "dist": 985 }, { "source": "COK", "dest": "TRV", "dist": 194 }, { "source": "COK", "dest": "PNQ", "dist": 975 }, { "source": "COK", "dest": "CCJ", "dist": 120 }, { "source": "DEL", "dest": "BOM", "dist": 1138 }, { "source": "DEL", "dest": "MAA", "dist": 1761 }, { "source": "DEL", "dest": "BLR", "dist": 1710 }, { "source": "DEL", "dest": "CCU", "dist": 1313 }, { "source": "DEL", "dest": "HYD", "dist": 1268 }, { "source": "DEL", "dest": "COK", "dist": 2049 }, { "source": "DEL", "dest": "AMD", "dist": 756 }, { "source": "DEL", "dest": "PNQ", "dist": 1156 }, { "source": "DEL", "dest": "GAU", "dist": 1455 }, { "source": "DEL", "dest": "GOI", "dist": 1504 }, { "source": "DEL", "dest": "LKO", "dist": 423 }, { "source": "DEL", "dest": "VTZ", "dist": 1358 }, { "source": "DEL", "dest": "JAI", "dist": 232 }, { "source": "DEL", "dest": "CJB", "dist": 1950 }, { "source": "DEL", "dest": "IXB", "dist": 1125 }, { "source": "DEL", "dest": "IDR", "dist": 663 }, { "source": "DEL", "dest": "NAG", "dist": 854 }, { "source": "DEL", "dest": "SXR", "dist": 642 }, { "source": "DEL", "dest": "IXJ", "dist": 507 }, { "source": "DEL", "dest": "RPR", "dist": 945 }, { "source": "DEL", "dest": "PAT", "dist": 857 }, { "source": "DEL", "dest": "IXR", "dist": 1008 }, { "source": "DEL", "dest": "VNS", "dist": 667 }, { "source": "DEL", "dest": "BBI", "dist": 1278 }, { "source": "DEL", "dest": "ATQ", "dist": 414 }, { "source": "DEL", "dest": "IXC", "dist": 236 }, { "source": "DEL", "dest": "UDR", "dist": 543 }, { "source": "DEL", "dest": "BHO", "dist": 587 }, { "source": "HYD", "dest": "COK", "dist": 817 }, { "source": "HYD", "dest": "AMD", "dist": 888 }, { "source": "HYD", "dest": "PNQ", "dist": 500 }, { "source": "HYD", "dest": "GOI", "dist": 532 }, { "source": "HYD", "dest": "VTZ", "dist": 511 }, { "source": "MAA", "dest": "BLR", "dist": 268 }, { "source": "MAA", "dest": "CCU", "dist": 1386 }, { "source": "MAA", "dest": "HYD", "dist": 507 }, { "source": "MAA", "dest": "COK", "dist": 518 }, { "source": "MAA", "dest": "TRV", "dist": 614 }, { "source": "MAA", "dest": "AMD", "dist": 1375 }, { "source": "MAA", "dest": "PNQ", "dist": 913 }, { "source": "MAA", "dest": "CCJ", "dist": 502 }, { "source": "MAA", "dest": "GOI", "dist": 733 }, { "source": "MAA", "dest": "VTZ", "dist": 620 }, { "source": "MAA", "dest": "CJB", "dist": 404 }, { "source": "PNQ", "dest": "GOI", "dist": 356 }]

    //  Type: 2:Intl 1:Dom 0:Mil
const priority = { "DEL": { "DEL": -1, "BOM": 2, "BLR": 2, "CCU": 2, "HYD": 2, "AMD": 2, "PNQ": 2, "JAI": 2, "VTZ": 2, "LKO": 2, "GAU": 2, "BDQ": 1, "SXR": 1, "IXC": 1, "IXR": 1, "MYQ": 1, "GWL": 1, "VNS": 1, "AGR": 0, "IXS": -1, "IXJ": 0, "DED": 0, "UDP": 1 }, "BOM": { "DEL": 2, "BOM": -1, "BLR": 2, "CCU": 2, "HYD": 2, "AMD": 2, "PNQ": 2, "JAI": 2, "VTZ": 2, "LKO": 2, "GAU": 2, "BDQ": 1, "SXR": 1, "IXC": 1, "IXR": 1, "MYQ": 1, "GWL": 1, "VNS": 1, "AGR": -1, "IXS": -1, "IXJ": 0, "DED": -1, "UDP": 1 }, "BLR": { "DEL": 2, "BOM": 2, "BLR": -1, "CCU": 2, "HYD": 2, "AMD": 2, "PNQ": 1, "JAI": 1, "VTZ": 1, "LKO": 1, "GAU": 1, "BDQ": 0, "SXR": -1, "IXC": 0, "IXR": 0, "MYQ": -1, "GWL": 0, "VNS": 0, "AGR": -1, "IXS": -1, "IXJ": -1, "DED": -1, "UDP": 0 }, "CCU": { "DEL": 2, "BOM": 2, "BLR": 2, "CCU": -1, "HYD": 2, "AMD": 2, "PNQ": 1, "JAI": 1, "VTZ": 1, "LKO": 1, "GAU": 1, "BDQ": 0, "SXR": -1, "IXC": 0, "IXR": 0, "MYQ": -1, "GWL": 0, "VNS": 0, "AGR": -1, "IXS": 0, "IXJ": -1, "DED": -1, "UDP": -1 }, "HYD": { "DEL": 2, "BOM": 2, "BLR": 2, "CCU": 2, "HYD": -1, "AMD": 2, "PNQ": 1, "JAI": 1, "VTZ": 1, "LKO": 1, "GAU": 1, "BDQ": 0, "SXR": -1, "IXC": 0, "IXR": 0, "MYQ": -1, "GWL": 0, "VNS": 0, "AGR": -1, "IXS": -1, "IXJ": -1, "DED": -1, "UDP": -1 }, "AMD": { "DEL": 2, "BOM": 2, "BLR": 2, "CCU": 2, "HYD": 2, "AMD": -1, "PNQ": 1, "JAI": 1, "VTZ": 1, "LKO": 1, "GAU": 1, "BDQ": -1, "SXR": 0, "IXC": 0, "IXR": -1, "MYQ": -1, "GWL": -1, "VNS": 0, "AGR": -1, "IXS": -1, "IXJ": -1, "DED": 1, "UDP": 0 }, "PNQ": { "DEL": 2, "BOM": 2, "BLR": 1, "CCU": 1, "HYD": 1, "AMD": 1, "PNQ": -1, "JAI": 0, "VTZ": 0, "LKO": 0, "GAU": 0, "BDQ": -1, "SXR": -1, "IXC": 0, "IXR": -1, "MYQ": -1, "GWL": -1, "VNS": -1, "AGR": -1, "IXS": -1, "IXJ": -1, "DED": -1, "UDP": -1 }, "JAI": { "DEL": 2, "BOM": 2, "BLR": 1, "CCU": 1, "HYD": 1, "AMD": 1, "PNQ": 0, "JAI": -1, "VTZ": 0, "LKO": 0, "GAU": 0, "BDQ": 0, "SXR": -1, "IXC": 0, "IXR": -1, "MYQ": -1, "GWL": -1, "VNS": -1, "AGR": -1, "IXS": -1, "IXJ": -1, "DED": -1, "UDP": 0 }, "VTZ": { "DEL": 2, "BOM": 2, "BLR": 1, "CCU": 1, "HYD": 1, "AMD": 1, "PNQ": 0, "JAI": 0, "VTZ": -1, "LKO": -1, "GAU": 1, "BDQ": -1, "SXR": -1, "IXC": -1, "IXR": -1, "MYQ": -1, "GWL": -1, "VNS": -1, "AGR": -1, "IXS": -1, "IXJ": -1, "DED": -1, "UDP": -1 }, "LKO": { "DEL": 2, "BOM": 2, "BLR": 1, "CCU": 1, "HYD": 1, "AMD": 1, "PNQ": 0, "JAI": 0, "VTZ": -1, "LKO": -1, "GAU": -1, "BDQ": -1, "SXR": -1, "IXC": 0, "IXR": -1, "MYQ": -1, "GWL": -1, "VNS": -1, "AGR": -1, "IXS": -1, "IXJ": -1, "DED": 1, "UDP": -1 }, "GAU": { "DEL": 2, "BOM": 2, "BLR": 1, "CCU": 1, "HYD": 1, "AMD": 1, "PNQ": 0, "JAI": 0, "VTZ": 1, "LKO": -1, "GAU": -1, "BDQ": -1, "SXR": -1, "IXC": -1, "IXR": -1, "MYQ": -1, "GWL": -1, "VNS": -1, "AGR": -1, "IXS": 0, "IXJ": -1, "DED": -1, "UDP": -1 }, "BDQ": { "DEL": 1, "BOM": 1, "BLR": 0, "CCU": 0, "HYD": 0, "AMD": -1, "PNQ": -1, "JAI": 0, "VTZ": -1, "LKO": -1, "GAU": -1, "BDQ": -1, "SXR": -1, "IXC": -1, "IXR": -1, "MYQ": -1, "GWL": -1, "VNS": -1, "AGR": -1, "IXS": -1, "IXJ": -1, "DED": -1, "UDP": -1 }, "SXR": { "DEL": 1, "BOM": 1, "BLR": -1, "CCU": -1, "HYD": -1, "AMD": 0, "PNQ": -1, "JAI": -1, "VTZ": -1, "LKO": -1, "GAU": -1, "BDQ": -1, "SXR": -1, "IXC": -1, "IXR": -1, "MYQ": -1, "GWL": -1, "VNS": -1, "AGR": -1, "IXS": -1, "IXJ": 0, "DED": -1, "UDP": -1 }, "IXC": { "DEL": 1, "BOM": 1, "BLR": 0, "CCU": 0, "HYD": 0, "AMD": 0, "PNQ": 0, "JAI": 0, "VTZ": -1, "LKO": 0, "GAU": -1, "BDQ": -1, "SXR": -1, "IXC": -1, "IXR": -1, "MYQ": -1, "GWL": -1, "VNS": -1, "AGR": -1, "IXS": -1, "IXJ": -1, "DED": -1, "UDP": -1 }, "IXR": { "DEL": 1, "BOM": 1, "BLR": 0, "CCU": 0, "HYD": 0, "AMD": -1, "PNQ": -1, "JAI": -1, "VTZ": -1, "LKO": -1, "GAU": -1, "BDQ": -1, "SXR": -1, "IXC": -1, "IXR": -1, "MYQ": -1, "GWL": -1, "VNS": -1, "AGR": -1, "IXS": -1, "IXJ": -1, "DED": 1, "UDP": -1 }, "MYQ": { "DEL": 1, "BOM": 1, "BLR": -1, "CCU": -1, "HYD": -1, "AMD": -1, "PNQ": -1, "JAI": -1, "VTZ": -1, "LKO": -1, "GAU": -1, "BDQ": -1, "SXR": -1, "IXC": -1, "IXR": -1, "MYQ": -1, "GWL": -1, "VNS": -1, "AGR": -1, "IXS": -1, "IXJ": -1, "DED": -1, "UDP": -1 }, "GWL": { "DEL": 1, "BOM": 1, "BLR": 0, "CCU": 0, "HYD": 0, "AMD": -1, "PNQ": -1, "JAI": -1, "VTZ": -1, "LKO": -1, "GAU": -1, "BDQ": -1, "SXR": -1, "IXC": -1, "IXR": -1, "MYQ": -1, "GWL": -1, "VNS": -1, "AGR": -1, "IXS": -1, "IXJ": -1, "DED": -1, "UDP": -1 }, "VNS": { "DEL": 1, "BOM": 1, "BLR": 0, "CCU": 0, "HYD": 0, "AMD": 0, "PNQ": -1, "JAI": -1, "VTZ": -1, "LKO": -1, "GAU": -1, "BDQ": -1, "SXR": -1, "IXC": -1, "IXR": -1, "MYQ": -1, "GWL": -1, "VNS": -1, "AGR": 0, "IXS": -1, "IXJ": -1, "DED": -1, "UDP": -1 }, "AGR": { "DEL": 0, "BOM": -1, "BLR": -1, "CCU": -1, "HYD": -1, "AMD": -1, "PNQ": -1, "JAI": -1, "VTZ": -1, "LKO": -1, "GAU": -1, "BDQ": -1, "SXR": -1, "IXC": -1, "IXR": -1, "MYQ": -1, "GWL": -1, "VNS": 0, "AGR": -1, "IXS": -1, "IXJ": -1, "DED": -1, "UDP": -1 }, "IXS": { "DEL": -1, "BOM": -1, "BLR": -1, "CCU": 0, "HYD": -1, "AMD": -1, "PNQ": -1, "JAI": -1, "VTZ": -1, "LKO": -1, "GAU": 0, "BDQ": -1, "SXR": -1, "IXC": -1, "IXR": -1, "MYQ": -1, "GWL": -1, "VNS": -1, "AGR": -1, "IXS": -1, "IXJ": -1, "DED": -1, "UDP": -1 }, "IXJ": { "DEL": 0, "BOM": 0, "BLR": -1, "CCU": -1, "HYD": -1, "AMD": -1, "PNQ": -1, "JAI": -1, "VTZ": -1, "LKO": -1, "GAU": -1, "BDQ": -1, "SXR": 0, "IXC": -1, "IXR": -1, "MYQ": -1, "GWL": -1, "VNS": -1, "AGR": -1, "IXS": -1, "IXJ": -1, "DED": -1, "UDP": -1 }, "DED": { "DEL": 0, "BOM": -1, "BLR": -1, "CCU": -1, "HYD": -1, "AMD": 1, "PNQ": -1, "JAI": -1, "VTZ": -1, "LKO": 1, "GAU": -1, "BDQ": -1, "SXR": -1, "IXC": -1, "IXR": 1, "MYQ": -1, "GWL": -1, "VNS": -1, "AGR": -1, "IXS": -1, "IXJ": -1, "DED": -1, "UDP": -1 }, "UDP": { "DEL": 1, "BOM": 1, "BLR": 0, "CCU": -1, "HYD": -1, "AMD": 0, "PNQ": -1, "JAI": 0, "VTZ": -1, "LKO": -1, "GAU": -1, "BDQ": -1, "SXR": -1, "IXC": -1, "IXR": -1, "MYQ": -1, "GWL": -1, "VNS": -1, "AGR": -1, "IXS": -1, "IXJ": -1, "DED": -1, "UDP": -1 } }

*/
const type = { "DEL": 2, "BLR": 2, "BOM": 2, "HYD": 2, "CCU": 2, "MAA": 2, "AMD": 2, "GOI": 2, "GAU": 2, "JAI": 2, "COK": 2, "SXR": 1, "PNQ": 1, "LKO": 1, "PNY": 1, "IXB": 1, "IDR": 1, "BBI": 1, "STV": 1, "VNS": 1, "VTZ": 1, "IXC": 1, "CJB": 1, "DED": 1, "IXR": 1, "PAT": 1, "NAG": 1, "RPR": 1, "IXE": 1, "ATQ": 1, "VGA": 1, "UDR": 1, "BDQ": 1, "TRV": 1, "PBD": 0, "IXJ": 0, "IXA": 0, "IXM": 0, "IXZ": 0, "TIR": 0, "CNN": 0, "IMF": 0, "BHO": 0, "JLR": 0, "IXL": 0, "GOP": 0, "GWL": 0, "SAG": 0, "JDH": 0, "JRG": 0, "RAJ": 0, "CCJ": 0, "TRZ": 0, "IXD": 0, "DBR": 0, "HBX": 0, "IXG": 0, "IXS": 0, "DHM": 0, "RDP": 0, "RJA": 0, "ISK": 0, "DIB": 0, "KQH": 0, "AJL": 0, "MYQ": 0, "IXU": 0, "KNU": 0, "TCR": 0, "DMU": 0, "IXY": 0, "KLH": 0, "JSA": 0, "BHU": 0, "GBI": 0, "JRH": 0, "RAI": 0, "AGX": 0, "GAY": 0, "JGB": 0, "KUU": 0, "NDC": 0, "PAB": 0, "PGH": 0, "PYG": 0, "AGR": 0, "BEK": 0, "BKB": 0, "IXI": 0, "IXP": 0, "IXT": 0, "JGA": 0, "LUH": 0, "TEZ": 0 }

/*
            ALGORITM

            First, find out the type of airport. Intl are hubs, Dom and Mil are points. Two Doms/Mil in different territory must go through 
            an Intl.
            Second, Priority of Source and Dest. 
            Third, Route
             Fourth, Distance and Fare
        */
function initvar() {
    /* Variables for reading the input by the users */
    var srcvar = document.getElementById("source")
    var source = srcvar.value
    var sourcestr = srcvar.options[srcvar.selectedIndex].text;

    var destvar = document.getElementById("dest")
    var dest = destvar.value
    var deststr = destvar.options[destvar.selectedIndex].text;

    //Declaring variables

    document.getElementById("op_source").innerHTML = sourcestr + " <b>(" + source + ")</b>"
    document.getElementById("op_dest").innerHTML = deststr + " <b>(" + dest + ")</b>"

    //  Fetch the type of Airport by getting the value from key
    var typeS = type[source];
    var typeD = type[dest];


    //End and start node
    var nodes = [source, dest];
    var node = [];

    //Temp nodes for storing common stations between two airports
    var tempnode1 = [];
    var tempnode2 = [];


    function getNode(from, to) {
        value = priority[from][to];
        return value;
    }

    //  Function to find common airports and generate a route
    function findRoute(source, dest) {
        startArr = priority[source];
        finArr = priority[dest];

        //  Those airports who have a priority for operation at source
        for (var key of Object.keys(startArr)) {
            if (startArr[key] >= typeS) {
                tempnode1.push(key)

            }
        }
        //Those airports who have a priority for operation at destination
        for (var key of Object.keys(finArr)) {

            if (finArr[key] >= typeD) {
                tempnode2.push(key)

            }
        }
        /* The two above loops find out the (n-1) deep airports in the connection */

        //If there exists a direct flight b/w Destination and Source 

        if (startArr[dest] !== -1) {
            node.push(null); //FLAG
            //node = tempnode1.filter(value => tempnode2.includes(value));


        } else {
            //If there exists jumping flights

            //assign common airports here: Find common airports in tempnode1[] and tempnode2[]
            node = tempnode1.filter(value => tempnode2.includes(value));

            if (node.length == 0) { //If there are no common aiports found
                node.push(0); //FLAG
                // Connect one of the values in startarr[] to finArr[] using an existing intermediate value, ie. an International (type 2) flight 
                for (k = 0; k < tempnode1.length; k++) {
                    for (l = 0; l < tempnode2.length; l++) {
                        if (getNode(tempnode1[k], tempnode2[l]) !== -1) {
                            node.push(tempnode1[k], tempnode2[l])
                        }
                    }
                }
            }

        }

        return nodes;
    }

    findRoute(source, dest)

    //  Turnkey function to return absolute distance value from dist_data[] 

    /*function findDist(start, end) {
        dist = dist_data[start][end]; //[start] and [key] are accessing the indice within dist_data[]
        return dist;
    }

    findDist(source, dest)
    
*/
    function findDist(source, dest) {
        /*
        key_dist = dist[source] + dist[dest] - 2;
        return (749*key_dist + 550)*/

        var sdc = dist_code[source]
        var ddc = dist_code[dest]
        return (dist[sdc][ddc]) * 1000

    }

    //  Turnkey function to return fare of a route
    function findFare(dist) {
        const flight = 8; // per km charge
        const miscFee = 750; // miscellaneous aviation fee
        var tax = dist * 0.1; // 5% tax levied on state and central territory
        distCost = (flight * dist + miscFee + tax) //Total fare = 1.1*[(per km charge)*distance] + misc fee
        return distCost;
    }

    //  Turnkey function to return fare of a route without inputting distance
    function fare(start, end) {
        dist = dist_data[start][end];
        const flight = 5;
        const miscFee = 450;
        var tax = dist * 0.1;
        totalCost = (flight * dist + miscFee + tax)
        return totalCost;
    }

    function getAirline(source, dest) {
        search = source + "-" + dest;
        var result = airlines[search]
        return result
    }

    //Generate Flight Number as a random number for *time being*

    //  Output of the stored arrays into HTML via DOM rendering

    html = "";
    /* Flag 1 : having no node flights, ie. direct fligts  */
    if (node[0] === null) {
        msg = "We found Direct Flights for you.";
        for (i = 0; i < nodes.length - 1; i++) {

            html += "<div class='card'><div class='card-body py-3'><div class='row'>"
            html += "<span class='col text-left'><i class='fa fa-plane'></i> " + getAirline(nodes[i], nodes[i + 1]) + "</span>"
            html += "<span class='col text-center'><i class='fa fa-map-marker'></i> " + nodes[i] + " &mdash; " + nodes[i + 1] + "</span>"
            html += "<span class='col text-right'>₹ " + findDist(nodes[i], nodes[i + 1]) + "</span>"
            html += "</div></div></div>"

        }
        /* Flag 2 : having more than one node flights, ie. multi-stop flights  */
    } else if (node[0] === 0) {
        msg = "We found multi-stop Flights for you.";
        for (i = 1; i < node.length - 1; i += 2) { // Loop jumped by 2 to avoid re-occurance of already destination entity
            html += "<div class='card'><div class='card-body py-3'><div class='row'>"
            html += "<span class='col text-left'><i class='fa fa-plane'></i> " + getAirline(nodes[0], node[i]) + "<br><i class='fa fa-plane'></i> " + getAirline(node[i], node[i + 1]) + "<br><i class='fa fa-plane'></i> " + getAirline(node[i + 1], nodes[1]) + "<br>" + "</span>"
            html += "<span class='col text-center'><i class='fa fa-map-marker'></i> " + nodes[0] + " &mdash; " + node[i] + "<br><i class='fa fa-map-marker'></i> " + node[i] + " &mdash; " + node[i + 1] + "<br><i class='fa fa-map-marker'></i> " + node[i + 1] + " &mdash; " + nodes[1] + "</span>"
            html += "<span class='col text-right'> ₹" + findDist(source, node[i]) + "<br> ₹" + findDist(node[i], node[i + 1]) + "<br>₹" + findDist(node[i + 1], dest) + "</span>"
            html += "</div></div></div>"
        }
    } else if (node.length !== 0) {
        /* Flag 3 (none): having  one node flights, ie. one-stop flights  */
        msg = "We found one stop Flights for you.";
        for (i = 0; i < node.length; i++) {
            html += "<div class='card'><div class='card-body py-3'><div class='row'>"
            html += "<span class='col text-left'><i class='fa fa-plane'></i> " + getAirline(nodes[0], node[i]) + "<br><i class='fa fa-plane'></i> " + getAirline(node[i], nodes[1]) + "</span>"
            html += "<span class='col text-center'><i class='fa fa-map-marker'></i> " + nodes[0] + " &mdash; " + node[i] + "<br><i class='fa fa-map-marker'></i> " + node[i] + " &mdash; " + nodes[1] + "</span>"
            html += "<span class='col text-right'> ₹" + findDist(source, node[i]) + "<br> ₹" + findDist(node[i], dest) + "</span>"
            html += "</div></div></div>"
        }
    } else {
        msg = "No Flights found from the airports selected";
    }
    html += "";
    //DoM rendering
    document.getElementById("msg").innerHTML = msg;
    document.getElementById("result").innerHTML = html;
}


// ----------------------------------------------------------


// Find type of airport, priority and then the distance for fare calc