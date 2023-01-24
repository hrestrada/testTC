
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
                            
                                
        }(tcParam));
        console.log('tcParam ==> ', JSON.stringify(tcParam));
