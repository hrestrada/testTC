
        var tcParam = tcParam || {};
            (function(TCP) {

                            window.tcParam = window.tcParam || {};
                            tcParam.productId = '1148029'; //cdwTagManagementData.product_id;
                            tcParam.productPrice = '99.01'; //cdwTagManagementData.product_price;
                            tcParam.setBrand = '/apple/i';
                            tcParam.events = 'purchase';
                            tcParam.orderId = '222233331';//cdwTagManagementData.levordref;
                            tcParam.currencyCode = 'USD';
                            tcParam.orderItems = 'Product1:2:400.00,Product2:1:200.00';//productString;
                            //tcParam.programId = 'CDW1';
                            
                    //needleParam.categoryId = cdwTagManagementData.page_name;
                    tcParam.categoryId = '/Amplified/i';
                    
                    
       var Needle = Needle || {};
        (function(N) {
  
          var mktNum = "MKT52869wadu52481P26482";
          
             if (tcParam.categoryId && tcParam.categoryId.match(/Amplified/i)) {
             mktNum = "MKT59280wadu159267P00000";
           } //else if (needleParam.setBrand && needleParam.setBrand.match(/acer/i)) {
//             mktNum = "MKT52869wadu52436P26437";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/apc/i)) {
//             mktNum = "MKT52869wadu52437P26438";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/apple/i)) {
//           mktNum = "MKT52869wadu52438P26439";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/aruba/i)) {
//             mktNum = "MKT52869wadu52439P26440";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/asus/i)) {
//           mktNum = "MKT52869wadu52440P26441";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/axis communications/i)) {
//           mktNum = "MKT52869wadu52441P26442";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/belkin/i)) {
//           mktNum = "MKT52869wadu52442P26443";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/blackbox/i)) {
//           mktNum = "MKT52869wadu52478P26479";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/brother/i)) {
//           mktNum = "MKT52869wadu52443P26444";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/canon/i)) {
//           mktNum = "MKT52869wadu52444P26445";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/cisco/i)) {
//           mktNum = "MKT52869wadu52445P26446";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/corsair/i)) {
//           mktNum = "MKT52869wadu52446P26447";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/dell/i)) {
//           mktNum = "MKT52869wadu52447P26448";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/ergotron/i)) {
//           mktNum = "MKT52869wadu52450P26451";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/fortinet/i)) {
//           mktNum = "MKT52869wadu52479P26480";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/hewlett-packard-enterprise/i)) {
//           mktNum = "MKT52869wadu52480P26481";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/honeywell/i)) {
//           mktNum = "MKT52869wadu52451P26452";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/jabra/i)) {
//           mktNum = "MKT52869wadu52454P26455";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/kensington/i)) {
//           mktNum = "MKT52869wadu52455P26456";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/kingston/i)) {
//           mktNum = "MKT52869wadu52456P26457";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/lenovo/i)) {
//           mktNum = "MKT52869wadu52457P26458";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/lexmark/i)) {
//           mktNum = "MKT52869wadu52458P26459";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/lg/i)) {
//           mktNum = "MKT52869wadu52459P26460";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/linksys/i)) {
//           mktNum = "MKT52869wadu52460P26461";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/logitech/i)) {
//           mktNum = "MKT52869wadu52461P26462";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/msi/i)) {
//           mktNum = "MKT52869wadu52462P26463";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/micron/i)) {
//           mktNum = "MKT52869wadu52463P26464";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/nec/i)) {
//           mktNum = "MKT52869wadu52466P26467";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/netgear/i)) {
//           mktNum = "MKT52869wadu52467P26468";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/panasonic/i)) {
//           mktNum = "MKT52869wadu52468P26469";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/plantronics/i)) {
//           mktNum = "MKT52869wadu52470P26471";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/pny/i)) {
//           mktNum = "MKT52869wadu52469P26470";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/poly/i)) {
//           mktNum = "MKT52869wadu52470P26471";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/polycom/i)) {
//           mktNum = "MKT52869wadu52470P26471";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/samsung/i)) {
//           mktNum = "MKT52869wadu52471P26472";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/startech/i)) {
//           mktNum = "MKT52869wadu52472P26473";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/Total Micro/i)) {
//           mktNum = "MKT52869wadu52476P26477";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/tripp/i)) {
//           mktNum = "MKT52869wadu52473P26474";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/viewsonic/i)) {
//           mktNum = "MKT52869wadu52474P26475";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/xerox/i)) {
//           mktNum = "MKT52869wadu52475P26476";
//           } else if (needleParam.setBrand && needleParam.setBrand.match(/zebra/i)) {
//           mktNum = "MKT52869wadu52477P26478";
//           } else if ((needleParam.setBrand && needleParam.setBrand.match(/hp/i)) && (needleParam.categoryId && needleParam.categoryId.match(/printer/i))) {
//           mktNum = "MKT52869wadu52453P26454";
//           } else if ((needleParam.setBrand && needleParam.setBrand.match(/hp/i)) && (needleParam.categoryId && needleParam.categoryId.match(/notebook|desktop/i))) {
//           mktNum = "MKT52869wadu52452P26453";
//           } else if ((needleParam.setBrand && needleParam.setBrand.match(/microsoft/i)) && (needleParam.categoryId && needleParam.categoryId.match(/accessories/i)) && !document.title.match(/surface/i)) {
//           mktNum = "MKT52869wadu52464P26465";
//           } else if ((needleParam.setBrand && needleParam.setBrand.match(/microsoft/i)) && (needleParam.categoryId && needleParam.categoryId.match(/tablet|accessories|computers/i)) && document.title.match(/surface/i)) {
//           mktNum = "MKT52869wadu52465P26466";
//           } else if ((needleParam.setBrand && needleParam.setBrand.match(/epson/i)) && (needleParam.categoryId && needleParam.categoryId.match(/projectors/i))) {
//           mktNum = "MKT52869wadu52449P26450";
//           } else if ((needleParam.setBrand && needleParam.setBrand.match(/epson/i)) && (needleParam.categoryId && needleParam.categoryId.match(/printers/i))) {
//           mktNum = "MKT52869wadu52448P26449";
//           }
          
          N.mktNum = mktNum;
        
        }(Needle));
        console.log('Needle ==> ', JSON.stringify(Needle));
                    
                    
                                
        }(tcParam));
        console.log('tcParam ==> ', JSON.stringify(tcParam));
