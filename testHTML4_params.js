//var SFChatParamJS = SFChatParamJS || (function () {

    
    //CDWneedleParam.txt

        var needleParam = needleParam || (function(NP) {

                            console.log('needleParam 3 ==> ');
                            window.needleParam = window.needleParam || {};
                            needleParam.ExternalNetwork = (cdwTagManagementData.extranet !== undefined) ? cdwTagManagementData.extranet : "Not Defined on this page";
                            needleParam.productId = '1148029' //cdwTagManagementData.product_id;
                            needleParam.categoryId = cdwTagManagementData.webclasscode_level1name + '|' + cdwTagManagementData.webclasscode_level2name + '|' + (cdwTagManagementData.webclasscode_level3name ? cdwTagManagementData.webclasscode_level3name : "N/A");
                            needleParam.productPrice = '99.01' //cdwTagManagementData.product_price;
                            needleParam.inviteContext = cdwTagManagementData.product_category;
                            if (cdwTagManagementData.page_type.toLowerCase().indexOf("product_") > -1 && location.pathname.indexOf('compare') < 0) {
                                needleParam.setBrand = cdwTagManagementData.product_root_brand_name ? cdwTagManagementData.product_root_brand_name : "";

                            if (JSON.parse(localStorage._act_p) !== null) {
                                needleParam.CustomerSeq = (JSON.parse(localStorage._act_p).CustomerSeq !== undefined) ? JSON.parse(localStorage._act_p).CustomerSeq : "";
                                needleParam.EAccountUserEmailAddressSeq = (JSON.parse(localStorage._act_p).EAccountUserEmailAddressSeq !== undefined) ? JSON.parse(localStorage._act_p).EAccountUserEmailAddressSeq : "";
                                needleParam.ContactSeq = (JSON.parse(localStorage._act_p).ContactSeq !== undefined) ? JSON.parse(localStorage._act_p).ContactSeq : "";
                                needleParam.CustomerType = (JSON.parse(localStorage._act_p).CustomerType !== undefined) ? JSON.parse(localStorage._act_p).CustomerType : "";
                                needleParam.EAccountUserSeq = (JSON.parse(localStorage._act_p).EAccountUserSeq !== undefined) ? JSON.parse(localStorage._act_p).EAccountUserSeq : "";
                                needleParam.RecentOrderFlag = (JSON.parse(localStorage._act_p).RecentOrderFlag !== undefined) ? JSON.parse(localStorage._act_p).RecentOrderFlag : "";
                                needleParam.MSEnrolled = (JSON.parse(localStorage._act_p).MSEnrolled !== undefined) ? JSON.parse(localStorage._act_p).MSEnrolled : "";
                                needleParam.BrandDescription = (JSON.parse(localStorage._act_p).BrandDescription !== undefined) ? JSON.parse(localStorage._act_p).BrandDescription : "";
                                needleParam.MembershipPrintingSolution = (JSON.parse(localStorage._act_p).MPS !== undefined) ? JSON.parse(localStorage._act_p).MPS : "";
                                needleParam.MembershipShippingQualifier = (JSON.parse(localStorage._act_p).FreeShipping !== undefined) ? JSON.parse(localStorage._act_p).FreeShipping : "";
                                needleParam.MarketingEntitySegmentLevel3Description = (JSON.parse(localStorage._act_p).MarketingEntitySegmentLevel3Description !== undefined) ? JSON.parse(localStorage._act_p).MarketingEntitySegmentLevel3Description : "";
                                needleParam.MarketingEntitySegmentLevel2Description = (JSON.parse(localStorage._act_p).MarketingEntitySegmentLevel2Description !== undefined) ? JSON.parse(localStorage._act_p).MarketingEntitySegmentLevel2Description : "";
                            }
                            if (location.pathname.indexOf('/content/brands/') > -1 || location.pathname.indexOf('/content/cdw/en/brand/') > -1) {
                                needleParam.setBrand = location.pathname.match(/(!?brands\/)(.*)\//i) !== null ? location.pathname.match(/(!?brands\/)(.*)\//i)[2] : location.pathname.match(/en\/brand\/(.*)(.html)/) !== null ? location.pathname.match(/en\/brand\/(.*)(.html)/)[1] : '';
                            }
                            if (window.location.href.indexOf('https') > -1 && window.location.href.indexOf('m.cdw.com') < 0 && window.location.href.indexOf('/search/') > -1) {
                                needleParam.categoryId = cdwTagManagementData.page_name;
                                needleParam.inviteContext = cdwTagManagementData.page_type;
                                needleParam.WcCodeL1Name = cdwTagManagementData.webclasscode_level1name;
                                needleParam.WcCodeL2Name = cdwTagManagementData.webclasscode_level2name;
                            }
                            if (window.location.href.indexOf("/checkout/confirmation") > -1) {
                                needleParam.events = 'purchase';
                                needleParam.orderId = cdwTagManagementData.levordref;
                                var products = typeof cdwTagManagementData.product_id != 'undefined' ? cdwTagManagementData.product_id.split('|') : "";
                                var units = typeof cdwTagManagementData.product_quantity != 'undefined' ? cdwTagManagementData.product_quantity.split('|') : " ";
                                var prices = typeof cdwTagManagementData.product_price != 'undefined' ? cdwTagManagementData.product_price.split('|') : " ";
                                var product_price = typeof cdwTagManagementData.product_price != 'undefined' ? cdwTagManagementData.product_price.split('|') : " ";
                                var productString = '';
                                for (var i = 0; i < products.length; i++) {
                                    if (i === 0) {
                                        productString += products[i] + ':' + units[i] + ':' + prices[i] * units[i];
                                    } else {
                                        productString += ',' + products[i] + ':' + units[i] + ':' + prices[i] * units[i];
                                    }
                                }
                                needleParam.orderItems = productString;
                            }
                            needleParam.categoryId = cdwTagManagementData.webclasscode_level1name + '|' + cdwTagManagementData.webclasscode_level2name + '|' + (cdwTagManagementData.webclasscode_level3name ? cdwTagManagementData.webclasscode_level3name : "N/A");
                            if (needleParam.categoryId === "||N/A") {
                                needleParam.categoryId = cdwTagManagementData.page_name + "|" + cdwTagManagementData.page_type;
                            }
                            if (utag.data['dom.pathname'].indexOf('services/amplified-services.html') != -1) {
                                needleParam.categoryId = cdwTagManagementData.page_name + "|" + cdwTagManagementData.page_type;
                            }
                            if (b['page_type'] == 'SEARCH_BROWSE') {
                                needleParam.productId = "";
                            }
                                
            NP.productId = needleParam.productId;
                                
        }(needleParam));

            
            
        //cdwMKTnumbInvite.txt
/*        var Needle = Needle || {};
        (function(N) {
  
          var mktNum = "MKT52869wadu52481P26482";
          
          if (needleParam.categoryId && needleParam.categoryId.match(/Amplified/i)) {
            mktNum = "MKT59280wadu159267P00000";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/acer/i)) {
            mktNum = "MKT52869wadu52436P26437";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/apc/i)) {
            mktNum = "MKT52869wadu52437P26438";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/apple/i)) {
          mktNum = "MKT52869wadu52438P26439";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/aruba/i)) {
            mktNum = "MKT52869wadu52439P26440";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/asus/i)) {
          mktNum = "MKT52869wadu52440P26441";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/axis communications/i)) {
          mktNum = "MKT52869wadu52441P26442";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/belkin/i)) {
          mktNum = "MKT52869wadu52442P26443";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/blackbox/i)) {
          mktNum = "MKT52869wadu52478P26479";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/brother/i)) {
          mktNum = "MKT52869wadu52443P26444";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/canon/i)) {
          mktNum = "MKT52869wadu52444P26445";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/cisco/i)) {
          mktNum = "MKT52869wadu52445P26446";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/corsair/i)) {
          mktNum = "MKT52869wadu52446P26447";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/dell/i)) {
          mktNum = "MKT52869wadu52447P26448";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/ergotron/i)) {
          mktNum = "MKT52869wadu52450P26451";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/fortinet/i)) {
          mktNum = "MKT52869wadu52479P26480";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/hewlett-packard-enterprise/i)) {
          mktNum = "MKT52869wadu52480P26481";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/honeywell/i)) {
          mktNum = "MKT52869wadu52451P26452";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/jabra/i)) {
          mktNum = "MKT52869wadu52454P26455";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/kensington/i)) {
          mktNum = "MKT52869wadu52455P26456";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/kingston/i)) {
          mktNum = "MKT52869wadu52456P26457";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/lenovo/i)) {
          mktNum = "MKT52869wadu52457P26458";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/lexmark/i)) {
          mktNum = "MKT52869wadu52458P26459";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/lg/i)) {
          mktNum = "MKT52869wadu52459P26460";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/linksys/i)) {
          mktNum = "MKT52869wadu52460P26461";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/logitech/i)) {
          mktNum = "MKT52869wadu52461P26462";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/msi/i)) {
          mktNum = "MKT52869wadu52462P26463";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/micron/i)) {
          mktNum = "MKT52869wadu52463P26464";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/nec/i)) {
          mktNum = "MKT52869wadu52466P26467";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/netgear/i)) {
          mktNum = "MKT52869wadu52467P26468";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/panasonic/i)) {
          mktNum = "MKT52869wadu52468P26469";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/plantronics/i)) {
          mktNum = "MKT52869wadu52470P26471";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/pny/i)) {
          mktNum = "MKT52869wadu52469P26470";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/poly/i)) {
          mktNum = "MKT52869wadu52470P26471";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/polycom/i)) {
          mktNum = "MKT52869wadu52470P26471";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/samsung/i)) {
          mktNum = "MKT52869wadu52471P26472";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/startech/i)) {
          mktNum = "MKT52869wadu52472P26473";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/Total Micro/i)) {
          mktNum = "MKT52869wadu52476P26477";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/tripp/i)) {
          mktNum = "MKT52869wadu52473P26474";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/viewsonic/i)) {
          mktNum = "MKT52869wadu52474P26475";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/xerox/i)) {
          mktNum = "MKT52869wadu52475P26476";
          } else if (needleParam.setBrand && needleParam.setBrand.match(/zebra/i)) {
          mktNum = "MKT52869wadu52477P26478";
          } else if ((needleParam.setBrand && needleParam.setBrand.match(/hp/i)) && (needleParam.categoryId && needleParam.categoryId.match(/printer/i))) {
          mktNum = "MKT52869wadu52453P26454";
          } else if ((needleParam.setBrand && needleParam.setBrand.match(/hp/i)) && (needleParam.categoryId && needleParam.categoryId.match(/notebook|desktop/i))) {
          mktNum = "MKT52869wadu52452P26453";
          } else if ((needleParam.setBrand && needleParam.setBrand.match(/microsoft/i)) && (needleParam.categoryId && needleParam.categoryId.match(/accessories/i)) && !document.title.match(/surface/i)) {
          mktNum = "MKT52869wadu52464P26465";
          } else if ((needleParam.setBrand && needleParam.setBrand.match(/microsoft/i)) && (needleParam.categoryId && needleParam.categoryId.match(/tablet|accessories|computers/i)) && document.title.match(/surface/i)) {
          mktNum = "MKT52869wadu52465P26466";
          } else if ((needleParam.setBrand && needleParam.setBrand.match(/epson/i)) && (needleParam.categoryId && needleParam.categoryId.match(/projectors/i))) {
          mktNum = "MKT52869wadu52449P26450";
          } else if ((needleParam.setBrand && needleParam.setBrand.match(/epson/i)) && (needleParam.categoryId && needleParam.categoryId.match(/printers/i))) {
          mktNum = "MKT52869wadu52448P26449";
          }
          
          N.mktNum = mktNum;
        
        }(Needle));


        console.log('Needle ==> ', JSON.stringify(Needle));
    
            NP.productId = needleParam.productId;

                                
        }(needleParam)); */
        console.log('needleParam ==> ', JSON.stringify(needleParam));
//}();
