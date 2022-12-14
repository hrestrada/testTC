var SFChatJS = SFChatJS || (function () {
    // params for init embedded_svc
    var siteUrl;
    var instanceUrl;
    var baseLiveAgentContentURL;
    var deploymentId;
    var buttonId;
    var baseLiveAgentURL;
    var eswLiveAgentDevName;
    var companyId;
    // end params for init embedded_svc
    //var varProductID   = '020806'; //Needs to be gather from the URL
    var varProjectID = '';
    var varSkill1 = '';
    var varSkill2 = '';
    var varSkill3 = '';
    var varSkill4 = '';
    var varSkill5 = '';
    var varSkill6 = '';
    var varSkill7 = '';
    var varSkill8 = '';
    var varSkill9 = '';
    var varSkill10 = '';
    var varVisitorID = setVisitorID();
    var varVisitorURL = window.location.href;
    var varSegment = '';
    var varSegmentParam = '';
    //UxUi Variables      
    var prechatBackgroundImgURL = '';
    var smallCompanyLogoImgURL = '';
    var avatarImgURL = '';
    var waitingStateBackgroundImgURL = '';
    var chatbotAvatarImgURL = '';
    var defaultMinimizedText = '';
    var disabledMinimizedText = '';
    var offlineSupportMinimizedText = '';
    var loadingText = '';
    var widgetWidth = '';
    var widgetHeight = '';
    var widgetFontSize = '';
    var qualifiedChat = '';
    var qualifiedChat = "false";

    console.log('varVisitorID Value: ' + varVisitorID);
    console.log('varVisitorURL Value: ' + varVisitorURL);

    //embedded_svc.settings.displayHelpButton = false;


    var initESW = function (gslbBaseURL) {
        //embedded_svc.settings.displayHelpButton = qualifiedChat; //Or false
        embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'

        //Setting UXUI custom variables

        embedded_svc.settings.prechatBackgroundImgURL = prechatBackgroundImgURL;
        embedded_svc.settings.smallCompanyLogoImgURL = smallCompanyLogoImgURL;
        embedded_svc.settings.avatarImgURL = avatarImgURL;
        embedded_svc.settings.waitingStateBackgroundImgURL = waitingStateBackgroundImgURL;
        embedded_svc.settings.chatbotAvatarImgURL = chatbotAvatarImgURL;
        embedded_svc.settings.defaultMinimizedText = defaultMinimizedText;
        embedded_svc.settings.disabledMinimizedText = disabledMinimizedText;
        embedded_svc.settings.offlineSupportMinimizedText = offlineSupportMinimizedText;
        embedded_svc.settings.loadingText = loadingText;
        embedded_svc.settings.widgetWidth = widgetWidth;
        embedded_svc.settings.widgetHeight = widgetHeight;
        embedded_svc.settings.widgetFontSize = widgetFontSize;

        //Hide button if no agent is available




        //embedded_svc.settings.storageDomain = 'yourdomain.com'; 
        //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

        // Settings for Chat
        //embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
        // Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
        // Returns a valid button ID.
        //};
        embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields
        embedded_svc.settings.extraPrechatFormDetails = [
            //{"label":"First Name", "transcriptFields": ["First_Name__c"]},
            //{"label":"Last Name", "transcriptFields": ["Last_Name__c"]},
            //{"label":"Email", "transcriptFields": ["Email__c"]},
            //{"label":"Company", "transcriptFields": ["Company__c"]},
            //{"label":"Product External ID", "value": varProductID,  "transcriptFields": ["Product_External_ID__c"]},
            { "label": "Skill 1", "value": varSkill1, "transcriptFields": ["Skill_1__c"] },
            { "label": "Skill 2", "value": varSkill2, "transcriptFields": ["Skill_2__c"] },
            { "label": "Skill 3", "value": varSkill3, "transcriptFields": ["Skill_3__c"] },
            { "label": "Skill 4", "value": varSkill4, "transcriptFields": ["Skill_4__c"] },
            { "label": "Skill 5", "value": varSkill5, "transcriptFields": ["Skill_5__c"] },
            { "label": "Skill 6", "value": varSkill6, "transcriptFields": ["Skill_6__c"] },
            { "label": "Skill 7", "value": varSkill7, "transcriptFields": ["Skill_7__c"] },
            { "label": "Skill 8", "value": varSkill8, "transcriptFields": ["Skill_8__c"] },
            { "label": "Skill 9", "value": varSkill9, "transcriptFields": ["Skill_9__c"] },
            { "label": "Skill 10", "value": varSkill10, "transcriptFields": ["Skill_10__c"] },
            { "label": "Project ID", "value": varProjectID, "transcriptFields": ["Project_ID__c"] },
            { "label": "Visitor ID", "value": varVisitorID, "transcriptFields": ["Visitor_ID__c"] },
            { "label": "VisitorURL", "value": varVisitorURL, "transcriptFields": ["VisitorURL__c"] }
        ];
        //embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
        embedded_svc.snippetSettingsFile.externalStyles = ['CLWCP__ChatStyle']; //Chat LWC AppExchange

        embedded_svc.settings.enabledFeatures = ['LiveAgent'];
        embedded_svc.settings.entryFeature = 'LiveAgent';

        embedded_svc.init(
            instanceUrl,
            siteUrl,
            gslbBaseURL,
            companyId,
            eswLiveAgentDevName,
            {
                baseLiveAgentContentURL: baseLiveAgentContentURL,
                deploymentId: deploymentId,//'57202000000CaX0',//'57202000000CaY3',
                buttonId: buttonId,
                baseLiveAgentURL: baseLiveAgentURL,
                eswLiveAgentDevName: eswLiveAgentDevName,
                isOfflineSupportEnabled: true
            }
        );
    };




    function makeRequest1() {

        const params = {
            "fromUrl": varVisitorURL,
            "userId": varVisitorID, 
            "globalParams":window.needleParam
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(params)
        };

        fetch(siteUrl + '/services/apexrest/TcChat/', options)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                const obj = JSON.stringify(result);
                console.log('RETURN DATA ==> ' + obj);
                var parseObj = JSON.parse(obj);
                varProjectID = parseObj.projectId;
                varSkill1 = parseObj.skill1;
                varSkill2 = parseObj.skill2;
                varSkill3 = parseObj.skill3;
                varSkill4 = parseObj.skill4;
                varSkill5 = parseObj.skill5;
                varSkill6 = parseObj.skill6;
                varSkill7 = parseObj.skill7;
                varSkill8 = parseObj.skill8;
                varSkill9 = parseObj.skill9;
                varSkill10 = parseObj.skill10;
                varSegment = parseObj.segment;
                //varSegment = 'Test Segment';
                varSegmentParam = parseObj.segmentParam;
                prechatBackgroundImgURL = parseObj.prechatBackgroundImgURL;
                smallCompanyLogoImgURL = parseObj.smallCompanyLogoImgURL;
                avatarImgURL = parseObj.avatarImgURL;
                waitingStateBackgroundImgURL = parseObj.waitingStateBackgroundImgURL;
                chatbotAvatarImgURL = parseObj.chatbotAvatarImgURL;
                defaultMinimizedText = parseObj.defaultMinimizedText;
                disabledMinimizedText = parseObj.disabledMinimizedText;
                offlineSupportMinimizedText = parseObj.offlineSupportMinimizedText;
                loadingText = parseObj.loadingText;
                widgetWidth = parseObj.widgetWidth;
                widgetHeight = parseObj.widgetHeight;
                widgetFontSize = parseObj.widgetFontSize;
                if (parseObj.qualify == "true") {
                    embedded_svc.settings.displayHelpButton = true;
                } else if (parseObj.qualify == "false") {
                    embedded_svc.settings.displayHelpButton = false;
                }
                console.log('varProjectID Value: ' + varProjectID);
            
              if(window.needleParam.events=='purchase'){
                console.log("API 3");
                console.log("SITE URL ==> " + siteUrl + "/services/apexrest/Purchase/" + varProjectID);
                var params1={
                    visitorId:varVisitorID,
                    currencyCode:window.needleParam.currencyCode,
                    orderId:window.needleParam.orderId,
                    orderItems:window.needleParam.orderItems};
                var options1={method:"POST",body:JSON.stringify(params1)};
                fetch(siteUrl+"/services/apexrest/Purchase/" + varProjectID,options1)                                        
                console.log("API 4");}  
            
                if (varSegmentParam !== '') {
                    var varTime = varSegmentParam * 1000;
                    setTimeout(makeRequest2, varTime);
                    //alert('timer fired-- ' + varTime);
                }

                if (!window.embedded_svc) {
                    var s = document.createElement('script');
                    s.setAttribute('src', instanceUrl + '/embeddedservice/5.0/esw.min.js');
                    s.onload = function () {
                        var sLiveChatCSS = document.createElement('link');
                        sLiveChatCSS.setAttribute("rel", "stylesheet");
                        sLiveChatCSS.setAttribute('type', 'text/css');
                        sLiveChatCSS.setAttribute('href', urlSite + '/resource/CHAT_CSS_CDW?id=' + d);
                        sLiveChatCSS.onload = function () {
                            console.log('INIT 1');
                            initESW(null);
                        };
                        document.body.appendChild(sLiveChatCSS);
                    };
                    // s.onload = function() {
                    //     console.log('INIT 1');
                    //     initESW(null);
                    // };
                    document.body.appendChild(s);
                } else {
                    console.log('INIT 2');
                    //initChat('https://service.force.com');   
                    initESW('https://service.force.com');
                }


            });
    }


    function makeRequest2() {
        console.log('API 1');
        const params = {
            "userSegment": varSegment,
            "userUrl": varVisitorURL,
            "userId": varVisitorID
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(params)
        };

        fetch(siteUrl + '/services/apexrest/TcSegment/', options)
        //.then((response) => {
        //  return response.json();
        //})
        console.log('API 2');
    }


    function setVisitorID() {

        var myCookie = getCookie("apex__tcVisitorID");
        //console.log('myCookie', myCookie);
        if (myCookie == null) {

            expiry = new Date(2147483647 * 1000);
            //expiry = new Date();
            //expiry.setTime(expiry.getTime()+(60 * 60 * 24 * 30 * 1000 )); 
            //60 seconds to a minute, 60 minutes to an hour, 24 hours to a day, and 30 days. * 1000 Taken to milliseconds
            var visitorID = CreateGuid();
            document.cookie = "apex__tcVisitorID=" + visitorID + "; SameSite=None; Secure; expires=" + expiry.toUTCString();

            return visitorID;
        } else {
            return myCookie;
        }
    }


    function CreateGuid() {
        function _p8(s) {
            var p = (Math.random().toString(16) + "000000000").substr(2, 8);
            return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
        }
        return _p8() + _p8(true) + _p8(true) + _p8();
    }


    function getCookie(cookieName) {
        let cookie = {};
        document.cookie.split(';').forEach(function (el) {
            let [key, value] = el.split('=');
            cookie[key.trim()] = value;
        })
        return cookie[cookieName];
    }

    return {
        init: function (embeddedSvcParams) {
            if (!!embeddedSvcParams.siteUrl) {
                siteUrl = embeddedSvcParams.siteUrl;
            }
            if (!!embeddedSvcParams.instanceUrl) {
                instanceUrl = embeddedSvcParams.instanceUrl;
            }
            if (!!embeddedSvcParams.baseLiveAgentContentURL) {
                baseLiveAgentContentURL = embeddedSvcParams.baseLiveAgentContentURL;
            }
            if (!!embeddedSvcParams.deploymentId) {
                deploymentId = embeddedSvcParams.deploymentId;
            }
            if (!!embeddedSvcParams.buttonId) {
                buttonId = embeddedSvcParams.buttonId;
            }
            if (!!embeddedSvcParams.baseLiveAgentURL) {
                baseLiveAgentURL = embeddedSvcParams.baseLiveAgentURL;
            }
            if (!!embeddedSvcParams.eswLiveAgentDevName) {
                eswLiveAgentDevName = embeddedSvcParams.eswLiveAgentDevName;
            }
            if (!!embeddedSvcParams.companyId) {
                companyId = embeddedSvcParams.companyId;
            }
        },
        start: function () {
            makeRequest1();
        }
    }


}());

