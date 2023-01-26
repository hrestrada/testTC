
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
                            tcParam.programId = 'CDW1';
                            
                    //needleParam.categoryId = cdwTagManagementData.page_name;
                    tcParam.categoryId = '/Amplified/i';
                    
                    
       var mktNumbers = mktNumbers || {};
        (function(N) {
  
          var mktNum = "MKT52869wadu52481P26482";
          
             if (tcParam.categoryId && tcParam.categoryId.match(/Amplified/i)) {
             mktNum = "MKT59280wadu159267P00000";
             } //else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/acer/i)) {
//             mktNum = "MKT52869wadu52436P26437";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/apc/i)) {
//             mktNum = "MKT52869wadu52437P26438";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/apple/i)) {
//           mktNum = "MKT52869wadu52438P26439";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/aruba/i)) {
//             mktNum = "MKT52869wadu52439P26440";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/asus/i)) {
//           mktNum = "MKT52869wadu52440P26441";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/axis communications/i)) {
//           mktNum = "MKT52869wadu52441P26442";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/belkin/i)) {
//           mktNum = "MKT52869wadu52442P26443";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/blackbox/i)) {
//           mktNum = "MKT52869wadu52478P26479";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/brother/i)) {
//           mktNum = "MKT52869wadu52443P26444";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/canon/i)) {
//           mktNum = "MKT52869wadu52444P26445";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/cisco/i)) {
//           mktNum = "MKT52869wadu52445P26446";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/corsair/i)) {
//           mktNum = "MKT52869wadu52446P26447";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/dell/i)) {
//           mktNum = "MKT52869wadu52447P26448";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/ergotron/i)) {
//           mktNum = "MKT52869wadu52450P26451";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/fortinet/i)) {
//           mktNum = "MKT52869wadu52479P26480";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/hewlett-packard-enterprise/i)) {
//           mktNum = "MKT52869wadu52480P26481";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/honeywell/i)) {
//           mktNum = "MKT52869wadu52451P26452";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/jabra/i)) {
//           mktNum = "MKT52869wadu52454P26455";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/kensington/i)) {
//           mktNum = "MKT52869wadu52455P26456";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/kingston/i)) {
//           mktNum = "MKT52869wadu52456P26457";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/lenovo/i)) {
//           mktNum = "MKT52869wadu52457P26458";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/lexmark/i)) {
//           mktNum = "MKT52869wadu52458P26459";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/lg/i)) {
//           mktNum = "MKT52869wadu52459P26460";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/linksys/i)) {
//           mktNum = "MKT52869wadu52460P26461";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/logitech/i)) {
//           mktNum = "MKT52869wadu52461P26462";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/msi/i)) {
//           mktNum = "MKT52869wadu52462P26463";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/micron/i)) {
//           mktNum = "MKT52869wadu52463P26464";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/nec/i)) {
//           mktNum = "MKT52869wadu52466P26467";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/netgear/i)) {
//           mktNum = "MKT52869wadu52467P26468";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/panasonic/i)) {
//           mktNum = "MKT52869wadu52468P26469";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/plantronics/i)) {
//           mktNum = "MKT52869wadu52470P26471";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/pny/i)) {
//           mktNum = "MKT52869wadu52469P26470";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/poly/i)) {
//           mktNum = "MKT52869wadu52470P26471";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/polycom/i)) {
//           mktNum = "MKT52869wadu52470P26471";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/samsung/i)) {
//           mktNum = "MKT52869wadu52471P26472";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/startech/i)) {
//           mktNum = "MKT52869wadu52472P26473";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/Total Micro/i)) {
//           mktNum = "MKT52869wadu52476P26477";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/tripp/i)) {
//           mktNum = "MKT52869wadu52473P26474";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/viewsonic/i)) {
//           mktNum = "MKT52869wadu52474P26475";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/xerox/i)) {
//           mktNum = "MKT52869wadu52475P26476";
//           } else if (mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/zebra/i)) {
//           mktNum = "MKT52869wadu52477P26478";
//           } else if ((mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/hp/i)) && (mktNumbersParam.categoryId && mktNumbersParam.categoryId.match(/printer/i))) {
//           mktNum = "MKT52869wadu52453P26454";
//           } else if ((mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/hp/i)) && (mktNumbersParam.categoryId && mktNumbersParam.categoryId.match(/notebook|desktop/i))) {
//           mktNum = "MKT52869wadu52452P26453";
//           } else if ((mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/microsoft/i)) && (mktNumbersParam.categoryId && mktNumbersParam.categoryId.match(/accessories/i)) && !document.title.match(/surface/i)) {
//           mktNum = "MKT52869wadu52464P26465";
//           } else if ((mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/microsoft/i)) && (mktNumbersParam.categoryId && mktNumbersParam.categoryId.match(/tablet|accessories|computers/i)) && document.title.match(/surface/i)) {
//           mktNum = "MKT52869wadu52465P26466";
//           } else if ((mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/epson/i)) && (mktNumbersParam.categoryId && mktNumbersParam.categoryId.match(/projectors/i))) {
//           mktNum = "MKT52869wadu52449P26450";
//           } else if ((mktNumbersParam.setBrand && mktNumbersParam.setBrand.match(/epson/i)) && (mktNumbersParam.categoryId && mktNumbersParam.categoryId.match(/printers/i))) {
//           mktNum = "MKT52869wadu52448P26449";
//           }
          
          N.mktNum = mktNum;
        
        }(MktNumbers));
        console.log('MktNumbers ==> ', JSON.stringify(MktNumbers));
                    
                    
                                
        }(tcParam));
        console.log('tcParam ==> ', JSON.stringify(tcParam));

