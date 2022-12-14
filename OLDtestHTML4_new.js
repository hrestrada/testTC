var SFChatJS=SFChatJS||function(){
  console.log('Global ==> ' + JSON.stringify(window.needleParam));
  var siteUrl,instanceUrl,baseLiveAgentContentURL,deploymentId,buttonId,baseLiveAgentURL,eswLiveAgentDevName,
      companyId,varProjectID="",varSkill1="",varSkill2="",varSkill3="",varSkill4="",varSkill5="",varSkill6="",
      varSkill7="",varSkill8="",varSkill9="",varSkill10="",varVisitorID=setVisitorID(),varVisitorURL=window.location.href,
      varSegment="",varSegmentParam="",prechatBackgroundImgURL="",smallCompanyLogoImgURL="",avatarImgURL="",
      waitingStateBackgroundImgURL="",chatbotAvatarImgURL="",defaultMinimizedText="",disabledMinimizedText="",
      offlineSupportMinimizedText="",loadingText="",widgetWidth="",widgetHeight="",widgetFontSize="",
      qualifiedChat="",qualifiedChat="false";
  
  console.log("varVisitorID Value: "+varVisitorID),console.log("varVisitorURL Value: "+varVisitorURL);
  
  var initESW=function(gslbBaseURL){embedded_svc.settings.language="",embedded_svc.settings.prechatBackgroundImgURL=prechatBackgroundImgURL,embedded_svc.settings.smallCompanyLogoImgURL=smallCompanyLogoImgURL,embedded_svc.settings.avatarImgURL=avatarImgURL,embedded_svc.settings.waitingStateBackgroundImgURL=waitingStateBackgroundImgURL,embedded_svc.settings.chatbotAvatarImgURL=chatbotAvatarImgURL,embedded_svc.settings.defaultMinimizedText=defaultMinimizedText,embedded_svc.settings.disabledMinimizedText=disabledMinimizedText,embedded_svc.settings.offlineSupportMinimizedText=offlineSupportMinimizedText,embedded_svc.settings.loadingText=loadingText,embedded_svc.settings.widgetWidth=widgetWidth,embedded_svc.settings.widgetHeight=widgetHeight,embedded_svc.settings.widgetFontSize=widgetFontSize,embedded_svc.settings.prepopulatedPrechatFields={},embedded_svc.settings.extraPrechatFormDetails=[{label:"Skill 1",value:varSkill1,transcriptFields:["Skill_1__c"]},{label:"Skill 2",value:varSkill2,transcriptFields:["Skill_2__c"]},{label:"Skill 3",value:varSkill3,transcriptFields:["Skill_3__c"]},{label:"Skill 4",value:varSkill4,transcriptFields:["Skill_4__c"]},{label:"Skill 5",value:varSkill5,transcriptFields:["Skill_5__c"]},{label:"Skill 6",value:varSkill6,transcriptFields:["Skill_6__c"]},{label:"Skill 7",value:varSkill7,transcriptFields:["Skill_7__c"]},{label:"Skill 8",value:varSkill8,transcriptFields:["Skill_8__c"]},{label:"Skill 9",value:varSkill9,transcriptFields:["Skill_9__c"]},{label:"Skill 10",value:varSkill10,transcriptFields:["Skill_10__c"]},{label:"Project ID",value:varProjectID,transcriptFields:["Project_ID__c"]},{label:"Visitor ID",value:varVisitorID,transcriptFields:["Visitor_ID__c"]},{label:"VisitorURL",value:varVisitorURL,transcriptFields:["VisitorURL__c"]}],embedded_svc.snippetSettingsFile.externalStyles=["CLWCP__ChatStyle"],embedded_svc.settings.enabledFeatures=["LiveAgent"],embedded_svc.settings.entryFeature="LiveAgent",embedded_svc.init(instanceUrl,siteUrl,gslbBaseURL,companyId,eswLiveAgentDevName,{baseLiveAgentContentURL:baseLiveAgentContentURL,deploymentId:deploymentId,buttonId:buttonId,baseLiveAgentURL:baseLiveAgentURL,eswLiveAgentDevName:eswLiveAgentDevName,isOfflineSupportEnabled:!0})};
  
  function makeRequest1(){
    var params={fromUrl:varVisitorURL,userId:varVisitorID,globalParams:window.needleParam},options={method:"POST",body:JSON.stringify(params)};
    console.log('PARAMS ==> ' + JSON.stringify(params));
    
    fetch(siteUrl+"/services/apexrest/TcChat/",options)
      .then(response=>response.json())
      .then(result=>{var obj=JSON.stringify(result);
      console.log("RETURN DATA ==> "+obj);
      var parseObj=JSON.parse(obj),varTime;(varProjectID=parseObj.projectId,varSkill1=parseObj.skill1,varSkill2=parseObj.skill2,
          varSkill3=parseObj.skill3,varSkill4=parseObj.skill4,varSkill5=parseObj.skill5,varSkill6=parseObj.skill6,
          varSkill7=parseObj.skill7,varSkill8=parseObj.skill8,varSkill9=parseObj.skill9,varSkill10=parseObj.skill10,
          varSegment=parseObj.segment,varSegmentParam=parseObj.segmentParam,prechatBackgroundImgURL=parseObj.prechatBackgroundImgURL,
          smallCompanyLogoImgURL=parseObj.smallCompanyLogoImgURL,avatarImgURL=parseObj.avatarImgURL,
          waitingStateBackgroundImgURL=parseObj.waitingStateBackgroundImgURL,chatbotAvatarImgURL=parseObj.chatbotAvatarImgURL,
          defaultMinimizedText=parseObj.defaultMinimizedText,disabledMinimizedText=parseObj.disabledMinimizedText,
          offlineSupportMinimizedText=parseObj.offlineSupportMinimizedText,loadingText=parseObj.loadingText,
          widgetWidth=parseObj.widgetWidth,widgetHeight=parseObj.widgetHeight,widgetFontSize=parseObj.widgetFontSize,"true"==parseObj.qualify?embedded_svc.settings.displayHelpButton=!0:"false"==parseObj.qualify&&(embedded_svc.settings.displayHelpButton=!1),console.log("varProjectID Value: "+varProjectID),""!==varSegmentParam)&&setTimeout(makeRequest2,1e3*varSegmentParam);if(window.embedded_svc)console.log("INIT 2"),initESW("https://service.force.com");else{var s=document.createElement("script");s.setAttribute("src",instanceUrl+"/embeddedservice/5.0/esw.min.js"),s.onload=function(){var sLiveChatCSS=document.createElement("link");sLiveChatCSS.setAttribute("rel","stylesheet"),sLiveChatCSS.setAttribute("type","text/css"),sLiveChatCSS.setAttribute("href",urlSite+"/resource/CHAT_CSS_CDW?id="+d),sLiveChatCSS.onload=function(){console.log("INIT 1"),initESW(null)},document.body.appendChild(sLiveChatCSS)},document.body.appendChild(s)}})}
  
  function makeRequest2(){
    console.log("API 1");
    var params={userSegment:varSegment,userUrl:varVisitorURL,userId:varVisitorID},options={method:"POST",body:JSON.stringify(params)};
    
    fetch(siteUrl+"/services/apexrest/TcSegment/",options),console.log("API 2")}
  
    function setVisitorID(){var myCookie=getCookie("apex__tcVisitorID");if(null==myCookie){expiry=new Date(2147483647e3);var visitorID=CreateGuid();return document.cookie="apex__tcVisitorID="+visitorID+"; SameSite=None; Secure; expires="+expiry.toUTCString(),visitorID}return myCookie}

    function CreateGuid(){function _p8(s){var p=(Math.random().toString(16)+"000000000").substr(2,8);return s?"-"+p.substr(0,4)+"-"+p.substr(4,4):p}return _p8()+_p8(!0)+_p8(!0)+_p8()}
  
    function getCookie(cookieName){let cookie={};return document.cookie.split(";").forEach((function(el){let[key,value]=el.split("=");cookie[key.trim()]=value})),cookie[cookieName]}return{init:function(embeddedSvcParams){embeddedSvcParams.siteUrl&&(siteUrl=embeddedSvcParams.siteUrl),embeddedSvcParams.instanceUrl&&(instanceUrl=embeddedSvcParams.instanceUrl),embeddedSvcParams.baseLiveAgentContentURL&&(baseLiveAgentContentURL=embeddedSvcParams.baseLiveAgentContentURL),embeddedSvcParams.deploymentId&&(deploymentId=embeddedSvcParams.deploymentId),embeddedSvcParams.buttonId&&(buttonId=embeddedSvcParams.buttonId),embeddedSvcParams.baseLiveAgentURL&&(baseLiveAgentURL=embeddedSvcParams.baseLiveAgentURL),embeddedSvcParams.eswLiveAgentDevName&&(eswLiveAgentDevName=embeddedSvcParams.eswLiveAgentDevName),embeddedSvcParams.companyId&&(companyId=embeddedSvcParams.companyId)},
    
   start:function(){makeRequest1()}}}();
