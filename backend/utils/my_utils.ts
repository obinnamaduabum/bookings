const psl = require('psl');

export class MyUtils {

    static indexOfArray(array: string[], origin: any) {
        // console.log('origin were searching for: ' + origin);
        // // origin = 'http://185.177.59.79:8090/';
        const exactHostname = MyUtils.extractHostname(origin);
        // console.log('exactHostname: ' + exactHostname);
        const foundIndex = array.indexOf(exactHostname);
        // console.log('found index: '+ foundIndex);
        return foundIndex;
    }


    static extractHostname(url: string) {
        let hostname;
        //find & remove protocol (http, ftp, etc.) and get hostname

        if (url.indexOf("//") > -1) {
            hostname = url.split('/')[2];
        }
        else {
            hostname = url.split('/')[0];
        }

        //find & remove port number
        const hostNameOrIpOnlyNoPort = hostname.split(':')[0];

        console.log(hostname);

        if(hostname.includes('localhost')){
            return hostname;
        }

        const isIp = MyUtils.validateIPaddress(hostNameOrIpOnlyNoPort);

        // console.log(isIp);

        if(isIp) {
            console.log(' hostname : ' + hostname);
            return hostname;

        } else {
            //find & remove "?"
            hostname = hostname.split('?')[0];
            return psl.get(hostname);
        }
    }


    static validateIPaddress(ipaddress: string) {
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
            return true;
        }
        // alert("You have entered an invalid IP address!");
        return false;
    }
}
