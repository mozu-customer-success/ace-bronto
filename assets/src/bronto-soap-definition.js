module.exports = `
<?xml version='1.0' encoding='UTF-8'?>
<wsdl:definitions xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/" xmlns:tns="http://api.bronto.com/v4" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:ns1="http://schemas.xmlsoap.org/soap/http" name="BrontoSoapApiImplService" targetNamespace="http://api.bronto.com/v4">
    <wsdl:types>
        <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:tns="http://api.bronto.com/v4" attributeFormDefault="unqualified" elementFormDefault="unqualified" targetNamespace="http://api.bronto.com/v4">
            <xs:element name="addAccounts" type="tns:addAccounts"/>
            <xs:element name="addAccountsResponse" type="tns:addAccountsResponse"/>
            <xs:element name="addApiTokens" type="tns:addApiTokens"/>
            <xs:element name="addApiTokensResponse" type="tns:addApiTokensResponse"/>
            <xs:element name="addContactEvent" type="tns:addContactEvent"/>
            <xs:element name="addContactEventResponse" type="tns:addContactEventResponse"/>
            <xs:element name="addContacts" type="tns:addContacts"/>
            <xs:element name="addContactsResponse" type="tns:addContactsResponse"/>
            <xs:element name="addContactsToWorkflow" type="tns:addContactsToWorkflow"/>
            <xs:element name="addContactsToWorkflowResponse" type="tns:addContactsToWorkflowResponse"/>
            <xs:element name="addContentTags" type="tns:addContentTags"/>
            <xs:element name="addContentTagsResponse" type="tns:addContentTagsResponse"/>
            <xs:element name="addConversion" type="tns:addConversion"/>
            <xs:element name="addConversionResponse" type="tns:addConversionResponse"/>
            <xs:element name="addDeliveries" type="tns:addDeliveries"/>
            <xs:element name="addDeliveriesResponse" type="tns:addDeliveriesResponse"/>
            <xs:element name="addDeliveryGroup" type="tns:addDeliveryGroup"/>
            <xs:element name="addDeliveryGroupResponse" type="tns:addDeliveryGroupResponse"/>
            <xs:element name="addFields" type="tns:addFields"/>
            <xs:element name="addFieldsResponse" type="tns:addFieldsResponse"/>
            <xs:element name="addHeaderFooters" type="tns:addHeaderFooters"/>
            <xs:element name="addHeaderFootersResponse" type="tns:addHeaderFootersResponse"/>
            <xs:element name="addLists" type="tns:addLists"/>
            <xs:element name="addListsResponse" type="tns:addListsResponse"/>
            <xs:element name="addLogins" type="tns:addLogins"/>
            <xs:element name="addLoginsResponse" type="tns:addLoginsResponse"/>
            <xs:element name="addMessageFolders" type="tns:addMessageFolders"/>
            <xs:element name="addMessageFoldersResponse" type="tns:addMessageFoldersResponse"/>
            <xs:element name="addMessageRules" type="tns:addMessageRules"/>
            <xs:element name="addMessageRulesResponse" type="tns:addMessageRulesResponse"/>
            <xs:element name="addMessages" type="tns:addMessages"/>
            <xs:element name="addMessagesResponse" type="tns:addMessagesResponse"/>
            <xs:element name="addOrUpdateContacts" type="tns:addOrUpdateContacts"/>
            <xs:element name="addOrUpdateContactsIncremental" type="tns:addOrUpdateContactsIncremental"/>
            <xs:element name="addOrUpdateContactsIncrementalResponse" type="tns:addOrUpdateContactsIncrementalResponse"/>
            <xs:element name="addOrUpdateContactsResponse" type="tns:addOrUpdateContactsResponse"/>
            <xs:element name="addOrUpdateDeliveryGroup" type="tns:addOrUpdateDeliveryGroup"/>
            <xs:element name="addOrUpdateDeliveryGroupResponse" type="tns:addOrUpdateDeliveryGroupResponse"/>
            <xs:element name="addOrUpdateOrders" type="tns:addOrUpdateOrders"/>
            <xs:element name="addOrUpdateOrdersResponse" type="tns:addOrUpdateOrdersResponse"/>
            <xs:element name="addSMSDeliveries" type="tns:addSMSDeliveries"/>
            <xs:element name="addSMSDeliveriesResponse" type="tns:addSMSDeliveriesResponse"/>
            <xs:element name="addSMSKeywords" type="tns:addSMSKeywords"/>
            <xs:element name="addSMSKeywordsResponse" type="tns:addSMSKeywordsResponse"/>
            <xs:element name="addSMSMessages" type="tns:addSMSMessages"/>
            <xs:element name="addSMSMessagesResponse" type="tns:addSMSMessagesResponse"/>
            <xs:element name="addToDeliveryGroup" type="tns:addToDeliveryGroup"/>
            <xs:element name="addToDeliveryGroupResponse" type="tns:addToDeliveryGroupResponse"/>
            <xs:element name="addToList" type="tns:addToList"/>
            <xs:element name="addToListResponse" type="tns:addToListResponse"/>
            <xs:element name="addToSMSKeyword" type="tns:addToSMSKeyword"/>
            <xs:element name="addToSMSKeywordResponse" type="tns:addToSMSKeywordResponse"/>
            <xs:element name="addUpdateOrder" type="tns:addUpdateOrder"/>
            <xs:element name="addUpdateOrderResponse" type="tns:addUpdateOrderResponse"/>
            <xs:element name="addWorkflows" type="tns:addWorkflows"/>
            <xs:element name="addWorkflowsResponse" type="tns:addWorkflowsResponse"/>
            <xs:element name="clearLists" type="tns:clearLists"/>
            <xs:element name="clearListsResponse" type="tns:clearListsResponse"/>
            <xs:element name="deleteAccounts" type="tns:deleteAccounts"/>
            <xs:element name="deleteAccountsResponse" type="tns:deleteAccountsResponse"/>
            <xs:element name="deleteApiTokens" type="tns:deleteApiTokens"/>
            <xs:element name="deleteApiTokensResponse" type="tns:deleteApiTokensResponse"/>
            <xs:element name="deleteContacts" type="tns:deleteContacts"/>
            <xs:element name="deleteContactsResponse" type="tns:deleteContactsResponse"/>
            <xs:element name="deleteContentTags" type="tns:deleteContentTags"/>
            <xs:element name="deleteContentTagsResponse" type="tns:deleteContentTagsResponse"/>
            <xs:element name="deleteDeliveries" type="tns:deleteDeliveries"/>
            <xs:element name="deleteDeliveriesResponse" type="tns:deleteDeliveriesResponse"/>
            <xs:element name="deleteDeliveryGroup" type="tns:deleteDeliveryGroup"/>
            <xs:element name="deleteDeliveryGroupResponse" type="tns:deleteDeliveryGroupResponse"/>
            <xs:element name="deleteFields" type="tns:deleteFields"/>
            <xs:element name="deleteFieldsResponse" type="tns:deleteFieldsResponse"/>
            <xs:element name="deleteFromDeliveryGroup" type="tns:deleteFromDeliveryGroup"/>
            <xs:element name="deleteFromDeliveryGroupResponse" type="tns:deleteFromDeliveryGroupResponse"/>
            <xs:element name="deleteHeaderFooters" type="tns:deleteHeaderFooters"/>
            <xs:element name="deleteHeaderFootersResponse" type="tns:deleteHeaderFootersResponse"/>
            <xs:element name="deleteLists" type="tns:deleteLists"/>
            <xs:element name="deleteListsResponse" type="tns:deleteListsResponse"/>
            <xs:element name="deleteLogins" type="tns:deleteLogins"/>
            <xs:element name="deleteLoginsResponse" type="tns:deleteLoginsResponse"/>
            <xs:element name="deleteMessageFolders" type="tns:deleteMessageFolders"/>
            <xs:element name="deleteMessageFoldersResponse" type="tns:deleteMessageFoldersResponse"/>
            <xs:element name="deleteMessageRules" type="tns:deleteMessageRules"/>
            <xs:element name="deleteMessageRulesResponse" type="tns:deleteMessageRulesResponse"/>
            <xs:element name="deleteMessages" type="tns:deleteMessages"/>
            <xs:element name="deleteMessagesResponse" type="tns:deleteMessagesResponse"/>
            <xs:element name="deleteOrders" type="tns:deleteOrders"/>
            <xs:element name="deleteOrdersResponse" type="tns:deleteOrdersResponse"/>
            <xs:element name="deleteSMSDeliveries" type="tns:deleteSMSDeliveries"/>
            <xs:element name="deleteSMSDeliveriesResponse" type="tns:deleteSMSDeliveriesResponse"/>
            <xs:element name="deleteSMSKeywords" type="tns:deleteSMSKeywords"/>
            <xs:element name="deleteSMSKeywordsResponse" type="tns:deleteSMSKeywordsResponse"/>
            <xs:element name="deleteSMSMessages" type="tns:deleteSMSMessages"/>
            <xs:element name="deleteSMSMessagesResponse" type="tns:deleteSMSMessagesResponse"/>
            <xs:element name="deleteWorkflows" type="tns:deleteWorkflows"/>
            <xs:element name="deleteWorkflowsResponse" type="tns:deleteWorkflowsResponse"/>
            <xs:element name="login" type="tns:login"/>
            <xs:element name="loginResponse" type="tns:loginResponse"/>
            <xs:element name="logout" type="tns:logout"/>
            <xs:element name="logoutResponse" type="tns:logoutResponse"/>
            <xs:element name="readAccounts" type="tns:readAccounts"/>
            <xs:element name="readAccountsResponse" type="tns:readAccountsResponse"/>
            <xs:element name="readActivities" type="tns:readActivities"/>
            <xs:element name="readActivitiesResponse" type="tns:readActivitiesResponse"/>
            <xs:element name="readApiTokens" type="tns:readApiTokens"/>
            <xs:element name="readApiTokensResponse" type="tns:readApiTokensResponse"/>
            <xs:element name="readBounces" type="tns:readBounces"/>
            <xs:element name="readBouncesResponse" type="tns:readBouncesResponse"/>
            <xs:element name="readContacts" type="tns:readContacts"/>
            <xs:element name="readContactsResponse" type="tns:readContactsResponse"/>
            <xs:element name="readContactsWithLatestUnsubscribeDate" type="tns:readContactsWithLatestUnsubscribeDate"/>
            <xs:element name="readContactsWithLatestUnsubscribeDateResponse" type="tns:readContactsWithLatestUnsubscribeDateResponse"/>
            <xs:element name="readContentTags" type="tns:readContentTags"/>
            <xs:element name="readContentTagsResponse" type="tns:readContentTagsResponse"/>
            <xs:element name="readConversions" type="tns:readConversions"/>
            <xs:element name="readConversionsResponse" type="tns:readConversionsResponse"/>
            <xs:element name="readDeliveries" type="tns:readDeliveries"/>
            <xs:element name="readDeliveriesResponse" type="tns:readDeliveriesResponse"/>
            <xs:element name="readDeliveryGroups" type="tns:readDeliveryGroups"/>
            <xs:element name="readDeliveryGroupsResponse" type="tns:readDeliveryGroupsResponse"/>
            <xs:element name="readDeliveryRecipients" type="tns:readDeliveryRecipients"/>
            <xs:element name="readDeliveryRecipientsResponse" type="tns:readDeliveryRecipientsResponse"/>
            <xs:element name="readFields" type="tns:readFields"/>
            <xs:element name="readFieldsResponse" type="tns:readFieldsResponse"/>
            <xs:element name="readHeaderFooters" type="tns:readHeaderFooters"/>
            <xs:element name="readHeaderFootersResponse" type="tns:readHeaderFootersResponse"/>
            <xs:element name="readLists" type="tns:readLists"/>
            <xs:element name="readListsResponse" type="tns:readListsResponse"/>
            <xs:element name="readLogins" type="tns:readLogins"/>
            <xs:element name="readLoginsResponse" type="tns:readLoginsResponse"/>
            <xs:element name="readMessageFolders" type="tns:readMessageFolders"/>
            <xs:element name="readMessageFoldersResponse" type="tns:readMessageFoldersResponse"/>
            <xs:element name="readMessageRules" type="tns:readMessageRules"/>
            <xs:element name="readMessageRulesResponse" type="tns:readMessageRulesResponse"/>
            <xs:element name="readMessages" type="tns:readMessages"/>
            <xs:element name="readMessagesResponse" type="tns:readMessagesResponse"/>
            <xs:element name="readRecentInboundActivities" type="tns:readRecentInboundActivities"/>
            <xs:element name="readRecentInboundActivitiesResponse" type="tns:readRecentInboundActivitiesResponse"/>
            <xs:element name="readRecentOutboundActivities" type="tns:readRecentOutboundActivities"/>
            <xs:element name="readRecentOutboundActivitiesResponse" type="tns:readRecentOutboundActivitiesResponse"/>
            <xs:element name="readSMSDeliveries" type="tns:readSMSDeliveries"/>
            <xs:element name="readSMSDeliveriesResponse" type="tns:readSMSDeliveriesResponse"/>
            <xs:element name="readSMSKeywords" type="tns:readSMSKeywords"/>
            <xs:element name="readSMSKeywordsResponse" type="tns:readSMSKeywordsResponse"/>
            <xs:element name="readSMSMessages" type="tns:readSMSMessages"/>
            <xs:element name="readSMSMessagesResponse" type="tns:readSMSMessagesResponse"/>
            <xs:element name="readSegments" type="tns:readSegments"/>
            <xs:element name="readSegmentsResponse" type="tns:readSegmentsResponse"/>
            <xs:element name="readSegmentsWithTotalCounts" type="tns:readSegmentsWithTotalCounts"/>
            <xs:element name="readSegmentsWithTotalCountsResponse" type="tns:readSegmentsWithTotalCountsResponse"/>
            <xs:element name="readUnsubscribes" type="tns:readUnsubscribes"/>
            <xs:element name="readUnsubscribesResponse" type="tns:readUnsubscribesResponse"/>
            <xs:element name="readWebforms" type="tns:readWebforms"/>
            <xs:element name="readWebformsResponse" type="tns:readWebformsResponse"/>
            <xs:element name="readWorkflows" type="tns:readWorkflows"/>
            <xs:element name="readWorkflowsResponse" type="tns:readWorkflowsResponse"/>
            <xs:element name="removeFromList" type="tns:removeFromList"/>
            <xs:element name="removeFromListResponse" type="tns:removeFromListResponse"/>
            <xs:element name="removeFromSMSKeyword" type="tns:removeFromSMSKeyword"/>
            <xs:element name="removeFromSMSKeywordResponse" type="tns:removeFromSMSKeywordResponse"/>
            <xs:element name="updateAccounts" type="tns:updateAccounts"/>
            <xs:element name="updateAccountsResponse" type="tns:updateAccountsResponse"/>
            <xs:element name="updateApiTokens" type="tns:updateApiTokens"/>
            <xs:element name="updateApiTokensResponse" type="tns:updateApiTokensResponse"/>
            <xs:element name="updateContacts" type="tns:updateContacts"/>
            <xs:element name="updateContactsResponse" type="tns:updateContactsResponse"/>
            <xs:element name="updateContentTags" type="tns:updateContentTags"/>
            <xs:element name="updateContentTagsResponse" type="tns:updateContentTagsResponse"/>
            <xs:element name="updateDeliveries" type="tns:updateDeliveries"/>
            <xs:element name="updateDeliveriesResponse" type="tns:updateDeliveriesResponse"/>
            <xs:element name="updateDeliveryGroup" type="tns:updateDeliveryGroup"/>
            <xs:element name="updateDeliveryGroupResponse" type="tns:updateDeliveryGroupResponse"/>
            <xs:element name="updateFields" type="tns:updateFields"/>
            <xs:element name="updateFieldsResponse" type="tns:updateFieldsResponse"/>
            <xs:element name="updateHeaderFooters" type="tns:updateHeaderFooters"/>
            <xs:element name="updateHeaderFootersResponse" type="tns:updateHeaderFootersResponse"/>
            <xs:element name="updateLists" type="tns:updateLists"/>
            <xs:element name="updateListsResponse" type="tns:updateListsResponse"/>
            <xs:element name="updateLogins" type="tns:updateLogins"/>
            <xs:element name="updateLoginsResponse" type="tns:updateLoginsResponse"/>
            <xs:element name="updateMessageFolders" type="tns:updateMessageFolders"/>
            <xs:element name="updateMessageFoldersResponse" type="tns:updateMessageFoldersResponse"/>
            <xs:element name="updateMessageRules" type="tns:updateMessageRules"/>
            <xs:element name="updateMessageRulesResponse" type="tns:updateMessageRulesResponse"/>
            <xs:element name="updateMessages" type="tns:updateMessages"/>
            <xs:element name="updateMessagesResponse" type="tns:updateMessagesResponse"/>
            <xs:element name="updateSMSDeliveries" type="tns:updateSMSDeliveries"/>
            <xs:element name="updateSMSDeliveriesResponse" type="tns:updateSMSDeliveriesResponse"/>
            <xs:element name="updateSMSKeywords" type="tns:updateSMSKeywords"/>
            <xs:element name="updateSMSKeywordsResponse" type="tns:updateSMSKeywordsResponse"/>
            <xs:element name="updateSMSMessages" type="tns:updateSMSMessages"/>
            <xs:element name="updateSMSMessagesResponse" type="tns:updateSMSMessagesResponse"/>
            <xs:element name="updateWorkflows" type="tns:updateWorkflows"/>
            <xs:element name="updateWorkflowsResponse" type="tns:updateWorkflowsResponse"/>
            <xs:complexType name="updateContacts">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="contacts" type="tns:contactObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType final="extension restriction" name="contactObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="email" type="xs:string"/>
                    <xs:element minOccurs="0" name="mobileNumber" type="xs:string"/>
                    <xs:element minOccurs="0" name="status" type="xs:string"/>
                    <xs:element minOccurs="0" name="msgPref" type="xs:string"/>
                    <xs:element minOccurs="0" name="source" type="xs:string"/>
                    <xs:element minOccurs="0" name="customSource" type="xs:string"/>
                    <xs:element minOccurs="0" name="created" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="modified" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="deleted" type="xs:boolean"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="listIds" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="segmentIds" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="fields" nillable="true" type="tns:contactField"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="SMSKeywordIDs" nillable="true" type="xs:string"/>
                    <xs:element minOccurs="0" name="numSends" type="xs:long"/>
                    <xs:element minOccurs="0" name="numBounces" type="xs:long"/>
                    <xs:element minOccurs="0" name="numOpens" type="xs:long"/>
                    <xs:element minOccurs="0" name="numClicks" type="xs:long"/>
                    <xs:element minOccurs="0" name="numConversions" type="xs:long"/>
                    <xs:element minOccurs="0" name="conversionAmount" type="xs:float"/>
                    <xs:element minOccurs="0" name="readOnlyContactData" type="tns:readOnlyContactData"/>
                    <xs:element minOccurs="0" name="consentDate" type="xs:string"/>
                    <xs:element minOccurs="0" name="consentIp" type="xs:string"/>
                    <xs:element minOccurs="0" name="lastUnsubscribeDate" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="contactField">
                <xs:sequence>
                    <xs:element minOccurs="0" name="fieldId" type="xs:string"/>
                    <xs:element minOccurs="0" name="content" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readOnlyContactData">
                <xs:sequence>
                    <xs:element minOccurs="0" name="geoIPCity" type="xs:string"/>
                    <xs:element minOccurs="0" name="geoIPStateRegion" type="xs:string"/>
                    <xs:element minOccurs="0" name="geoIPZip" type="xs:string"/>
                    <xs:element minOccurs="0" name="geoIPCountry" type="xs:string"/>
                    <xs:element minOccurs="0" name="geoIPCountryCode" type="xs:string"/>
                    <xs:element minOccurs="0" name="primaryBrowser" type="xs:string"/>
                    <xs:element minOccurs="0" name="mobileBrowser" type="xs:string"/>
                    <xs:element minOccurs="0" name="primaryEmailClient" type="xs:string"/>
                    <xs:element minOccurs="0" name="mobileEmailClient" type="xs:string"/>
                    <xs:element minOccurs="0" name="operatingSystem" type="xs:string"/>
                    <xs:element minOccurs="0" name="firstOrderDate" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="lastOrderDate" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="lastOrderTotal" type="xs:decimal"/>
                    <xs:element minOccurs="0" name="totalOrders" type="xs:long"/>
                    <xs:element minOccurs="0" name="totalRevenue" type="xs:decimal"/>
                    <xs:element minOccurs="0" name="averageOrderValue" type="xs:decimal"/>
                    <xs:element minOccurs="0" name="lastDeliveryDate" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="lastOpenDate" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="lastClickDate" type="xs:dateTime"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType final="extension restriction" name="dateTime">
                <xs:complexContent>
                    <xs:extension base="tns:baseDateTime">
                        <xs:sequence/>
                    </xs:extension>
                </xs:complexContent>
            </xs:complexType>
            <xs:complexType abstract="true" name="baseDateTime">
                <xs:complexContent>
                    <xs:extension base="tns:abstractDateTime">
                        <xs:sequence/>
                    </xs:extension>
                </xs:complexContent>
            </xs:complexType>
            <xs:complexType abstract="true" name="abstractDateTime">
                <xs:complexContent>
                    <xs:extension base="tns:abstractInstant">
                        <xs:sequence/>
                    </xs:extension>
                </xs:complexContent>
            </xs:complexType>
            <xs:complexType abstract="true" name="abstractInstant">
                <xs:sequence/>
            </xs:complexType>
            <xs:complexType name="sessionHeader">
                <xs:sequence>
                    <xs:element minOccurs="0" name="sessionId" type="xs:string"/>
                    <xs:element minOccurs="0" name="disableHistory" type="xs:boolean"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateContactsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="writeResult">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="errors" nillable="true" type="xs:int"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="results" nillable="true" type="tns:resultItem"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="resultItem">
                <xs:sequence>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="isNew" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="isError" type="xs:boolean"/>
                    <xs:element name="errorCode" type="xs:int"/>
                    <xs:element minOccurs="0" name="errorString" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readMessages">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:messageFilter"/>
                    <xs:element name="includeContent" type="xs:boolean"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                    <xs:element minOccurs="0" name="pageSize" type="xs:int"/>
                    <xs:element minOccurs="0" name="includeStats" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="includeTransactionalApproval" type="xs:boolean"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="messageFilter">
                <xs:sequence>
                    <xs:element minOccurs="0" name="type" type="tns:filterType"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="id" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="name" nillable="true" type="tns:stringValue"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="status" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="messageFolderId" nillable="true" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="stringValue">
                <xs:sequence>
                    <xs:element minOccurs="0" name="operator" type="tns:filterOperator"/>
                    <xs:element minOccurs="0" name="value" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readMessagesResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:messageObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="messageObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="name" type="xs:string"/>
                    <xs:element minOccurs="0" name="status" type="xs:string"/>
                    <xs:element minOccurs="0" name="messageFolderId" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="content" nillable="true" type="tns:messageContentObject"/>
                    <xs:element minOccurs="0" name="transactionalApproval" type="xs:string"/>
                    <xs:element minOccurs="0" name="numSends" type="xs:long"/>
                    <xs:element minOccurs="0" name="numDeliveries" type="xs:long"/>
                    <xs:element minOccurs="0" name="numHardBadEmail" type="xs:long"/>
                    <xs:element minOccurs="0" name="numHardDestUnreach" type="xs:long"/>
                    <xs:element minOccurs="0" name="numHardMessageContent" type="xs:long"/>
                    <xs:element minOccurs="0" name="numHardBounces" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSoftBadEmail" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSoftDestUnreach" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSoftMessageContent" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSoftBounces" type="xs:long"/>
                    <xs:element minOccurs="0" name="numOtherBounces" type="xs:long"/>
                    <xs:element minOccurs="0" name="numBounces" type="xs:long"/>
                    <xs:element minOccurs="0" name="uniqOpens" type="xs:long"/>
                    <xs:element minOccurs="0" name="numOpens" type="xs:long"/>
                    <xs:element minOccurs="0" name="avgOpens" type="xs:double"/>
                    <xs:element minOccurs="0" name="uniqClicks" type="xs:long"/>
                    <xs:element minOccurs="0" name="numClicks" type="xs:long"/>
                    <xs:element minOccurs="0" name="avgClicks" type="xs:double"/>
                    <xs:element minOccurs="0" name="uniqConversions" type="xs:long"/>
                    <xs:element minOccurs="0" name="numConversions" type="xs:long"/>
                    <xs:element minOccurs="0" name="avgConversions" type="xs:double"/>
                    <xs:element minOccurs="0" name="revenue" type="xs:decimal"/>
                    <xs:element minOccurs="0" name="numSurveyResponses" type="xs:long"/>
                    <xs:element minOccurs="0" name="numFriendForwards" type="xs:long"/>
                    <xs:element minOccurs="0" name="numContactUpdates" type="xs:long"/>
                    <xs:element minOccurs="0" name="numUnsubscribesByPrefs" type="xs:long"/>
                    <xs:element minOccurs="0" name="numUnsubscribesByComplaint" type="xs:long"/>
                    <xs:element minOccurs="0" name="numContactLossBounces" type="xs:long"/>
                    <xs:element minOccurs="0" name="numContactLoss" type="xs:long"/>
                    <xs:element minOccurs="0" name="deliveryRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="openRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="clickRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="clickThroughRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="conversionRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="bounceRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="complaintRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="contactLossRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="numSocialShares" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSharesFacebook" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSharesTwitter" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSharesLinkedIn" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSharesDigg" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSharesMySpace" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSocialViews" type="xs:long"/>
                    <xs:element minOccurs="0" name="numViewsFacebook" type="xs:long"/>
                    <xs:element minOccurs="0" name="numViewsTwitter" type="xs:long"/>
                    <xs:element minOccurs="0" name="numViewsLinkedIn" type="xs:long"/>
                    <xs:element minOccurs="0" name="numViewsDigg" type="xs:long"/>
                    <xs:element minOccurs="0" name="numViewsMySpace" type="xs:long"/>
                    <xs:element minOccurs="0" name="campaignId" type="xs:long"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="messageContentObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="type" type="xs:string"/>
                    <xs:element minOccurs="0" name="subject" type="xs:string"/>
                    <xs:element minOccurs="0" name="content" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteSMSMessages">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="messages" type="tns:smsMessageObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="smsMessageObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="name" type="xs:string"/>
                    <xs:element minOccurs="0" name="status" type="xs:string"/>
                    <xs:element minOccurs="0" name="messageFolderId" type="xs:string"/>
                    <xs:element minOccurs="0" name="shortenUrls" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="content" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteSMSMessagesResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addOrUpdateContacts">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="contacts" type="tns:contactObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addOrUpdateContactsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addOrUpdateOrders">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="orders" type="tns:orderObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="orderObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="contactId" type="xs:string"/>
                    <xs:element minOccurs="0" name="email" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="products" nillable="true" type="tns:productObject"/>
                    <xs:element minOccurs="0" name="orderDate" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="deliveryId" type="xs:string"/>
                    <xs:element minOccurs="0" name="messageId" type="xs:string"/>
                    <xs:element minOccurs="0" name="automatorId" type="xs:string"/>
                    <xs:element minOccurs="0" name="listId" type="xs:string"/>
                    <xs:element minOccurs="0" name="segmentId" type="xs:string"/>
                    <xs:element minOccurs="0" name="deliveryType" type="xs:string"/>
                    <xs:element minOccurs="0" name="tid" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="productObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="sku" type="xs:string"/>
                    <xs:element minOccurs="0" name="name" type="xs:string"/>
                    <xs:element minOccurs="0" name="description" type="xs:string"/>
                    <xs:element minOccurs="0" name="category" type="xs:string"/>
                    <xs:element minOccurs="0" name="image" type="xs:string"/>
                    <xs:element minOccurs="0" name="url" type="xs:string"/>
                    <xs:element minOccurs="0" name="quantity" type="xs:int"/>
                    <xs:element minOccurs="0" name="price" type="xs:decimal"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addOrUpdateOrdersResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addLists">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="lists" type="tns:mailListObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="mailListObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="name" type="xs:string"/>
                    <xs:element minOccurs="0" name="label" type="xs:string"/>
                    <xs:element minOccurs="0" name="activeCount" type="xs:long"/>
                    <xs:element minOccurs="0" name="status" type="xs:string"/>
                    <xs:element minOccurs="0" name="visibility" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addListsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readUnsubscribes">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:unsubscribeFilter"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="unsubscribeFilter">
                <xs:sequence>
                    <xs:element minOccurs="0" name="contactId" type="xs:string"/>
                    <xs:element minOccurs="0" name="deliveryId" type="xs:string"/>
                    <xs:element minOccurs="0" name="start" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="end" type="xs:dateTime"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readUnsubscribesResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:unsubscribeObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="unsubscribeObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="contactId" type="xs:string"/>
                    <xs:element minOccurs="0" name="deliveryId" type="xs:string"/>
                    <xs:element minOccurs="0" name="method" type="xs:string"/>
                    <xs:element minOccurs="0" name="complaint" type="xs:string"/>
                    <xs:element minOccurs="0" name="created" type="xs:dateTime"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addSMSMessages">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="messages" type="tns:smsMessageObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addSMSMessagesResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteDeliveryGroup">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="deliveryGroups" type="tns:deliveryGroupObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deliveryGroupObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="name" type="xs:string"/>
                    <xs:element minOccurs="0" name="visibility" type="xs:string"/>
                    <xs:element minOccurs="0" name="deliveryCount" type="xs:long"/>
                    <xs:element minOccurs="0" name="createdDate" type="xs:dateTime"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="deliveryIds" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="messageRuleIds" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="messageIds" nillable="true" type="xs:string"/>
                    <xs:element minOccurs="0" name="numSends" type="xs:long"/>
                    <xs:element minOccurs="0" name="numDeliveries" type="xs:long"/>
                    <xs:element minOccurs="0" name="numHardBadEmail" type="xs:long"/>
                    <xs:element minOccurs="0" name="numHardDestUnreach" type="xs:long"/>
                    <xs:element minOccurs="0" name="numHardMessageContent" type="xs:long"/>
                    <xs:element minOccurs="0" name="numHardBounces" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSoftBadEmail" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSoftDestUnreach" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSoftMessageContent" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSoftBounces" type="xs:long"/>
                    <xs:element minOccurs="0" name="numOtherBounces" type="xs:long"/>
                    <xs:element minOccurs="0" name="numBounces" type="xs:long"/>
                    <xs:element minOccurs="0" name="uniqOpens" type="xs:long"/>
                    <xs:element minOccurs="0" name="numOpens" type="xs:long"/>
                    <xs:element minOccurs="0" name="avgOpens" type="xs:double"/>
                    <xs:element minOccurs="0" name="uniqClicks" type="xs:long"/>
                    <xs:element minOccurs="0" name="numClicks" type="xs:long"/>
                    <xs:element minOccurs="0" name="avgClicks" type="xs:double"/>
                    <xs:element minOccurs="0" name="uniqConversions" type="xs:long"/>
                    <xs:element minOccurs="0" name="numConversions" type="xs:long"/>
                    <xs:element minOccurs="0" name="avgConversions" type="xs:double"/>
                    <xs:element minOccurs="0" name="revenue" type="xs:decimal"/>
                    <xs:element minOccurs="0" name="numSurveyResponses" type="xs:long"/>
                    <xs:element minOccurs="0" name="numFriendForwards" type="xs:long"/>
                    <xs:element minOccurs="0" name="numContactUpdates" type="xs:long"/>
                    <xs:element minOccurs="0" name="numUnsubscribesByPrefs" type="xs:long"/>
                    <xs:element minOccurs="0" name="numUnsubscribesByComplaint" type="xs:long"/>
                    <xs:element minOccurs="0" name="numContactLossBounces" type="xs:long"/>
                    <xs:element minOccurs="0" name="numContactLoss" type="xs:long"/>
                    <xs:element minOccurs="0" name="deliveryRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="openRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="clickRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="clickThroughRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="conversionRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="bounceRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="complaintRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="contactLossRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="numSocialShares" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSharesFacebook" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSharesTwitter" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSharesLinkedIn" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSharesDigg" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSharesMySpace" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSocialViews" type="xs:long"/>
                    <xs:element minOccurs="0" name="numViewsFacebook" type="xs:long"/>
                    <xs:element minOccurs="0" name="numViewsTwitter" type="xs:long"/>
                    <xs:element minOccurs="0" name="numViewsLinkedIn" type="xs:long"/>
                    <xs:element minOccurs="0" name="numViewsDigg" type="xs:long"/>
                    <xs:element minOccurs="0" name="numViewsMySpace" type="xs:long"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteDeliveryGroupResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readActivities">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:activityFilter"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="activityFilter">
                <xs:sequence>
                    <xs:element minOccurs="0" name="start" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="size" type="xs:int"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="types" nillable="true" type="xs:string"/>
                    <xs:element minOccurs="0" name="readDirection" type="tns:readDirection"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readActivitiesResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:activityObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="activityObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="activityDate" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="contactId" type="xs:string"/>
                    <xs:element minOccurs="0" name="deliveryId" type="xs:string"/>
                    <xs:element minOccurs="0" name="messageId" type="xs:string"/>
                    <xs:element minOccurs="0" name="listId" type="xs:string"/>
                    <xs:element minOccurs="0" name="segmentId" type="xs:string"/>
                    <xs:element minOccurs="0" name="trackingType" type="xs:string"/>
                    <xs:element minOccurs="0" name="bounceReason" type="xs:string"/>
                    <xs:element minOccurs="0" name="bounceType" type="xs:string"/>
                    <xs:element minOccurs="0" name="linkName" type="xs:string"/>
                    <xs:element minOccurs="0" name="linkUrl" type="xs:string"/>
                    <xs:element minOccurs="0" name="url" type="xs:string"/>
                    <xs:element minOccurs="0" name="quantity" type="xs:int"/>
                    <xs:element minOccurs="0" name="amount" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateMessageRules">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="messageRules" type="tns:messageRuleObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="messageRuleObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="name" type="xs:string"/>
                    <xs:element minOccurs="0" name="type" type="xs:string"/>
                    <xs:element minOccurs="0" name="messageId" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateMessageRulesResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteContentTags">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="contentTags" type="tns:contentTagObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="contentTagObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="name" type="xs:string"/>
                    <xs:element minOccurs="0" name="value" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteContentTagsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addAccounts">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="accounts" type="tns:accountObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="accountObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="name" type="xs:string"/>
                    <xs:element minOccurs="0" name="status" type="xs:string"/>
                    <xs:element minOccurs="0" name="generalSettings" type="tns:generalSettings"/>
                    <xs:element minOccurs="0" name="contactInformation" type="tns:contactInformation"/>
                    <xs:element minOccurs="0" name="formatSettings" type="tns:formatSettings"/>
                    <xs:element minOccurs="0" name="brandingSettings" type="tns:brandingSettings"/>
                    <xs:element minOccurs="0" name="repliesSettings" type="tns:repliesSettings"/>
                    <xs:element minOccurs="0" name="allocations" type="tns:accountAllocations"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="generalSettings">
                <xs:sequence>
                    <xs:element minOccurs="0" name="emergencyEmail" type="xs:string"/>
                    <xs:element minOccurs="0" name="dailyFrequencyCap" type="xs:long"/>
                    <xs:element minOccurs="0" name="weeklyFrequencyCap" type="xs:long"/>
                    <xs:element minOccurs="0" name="monthlyFrequencyCap" type="xs:long"/>
                    <xs:element minOccurs="0" name="textDelivery" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="textPreference" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="useSSL" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="sendUsageAlerts" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="usageAlertEmail" type="xs:string"/>
                    <xs:element minOccurs="0" name="currentContacts" type="xs:long"/>
                    <xs:element minOccurs="0" name="maxContacts" type="xs:long"/>
                    <xs:element minOccurs="0" name="currentMonthlyEmails" type="xs:integer"/>
                    <xs:element minOccurs="0" name="currentHostingSize" type="xs:long"/>
                    <xs:element minOccurs="0" name="maxHostingSize" type="xs:long"/>
                    <xs:element minOccurs="0" name="agencyTemplateuploadPerm" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="defaultTemplates" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="enableInboxPreviews" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="allowCustomizedBranding" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="bounceLimit" type="xs:long"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="contactInformation">
                <xs:sequence>
                    <xs:element minOccurs="0" name="organization" type="xs:string"/>
                    <xs:element minOccurs="0" name="firstName" type="xs:string"/>
                    <xs:element minOccurs="0" name="lastName" type="xs:string"/>
                    <xs:element minOccurs="0" name="email" type="xs:string"/>
                    <xs:element minOccurs="0" name="phone" type="xs:string"/>
                    <xs:element minOccurs="0" name="address" type="xs:string"/>
                    <xs:element minOccurs="0" name="address2" type="xs:string"/>
                    <xs:element minOccurs="0" name="city" type="xs:string"/>
                    <xs:element minOccurs="0" name="state" type="xs:string"/>
                    <xs:element minOccurs="0" name="zip" type="xs:string"/>
                    <xs:element minOccurs="0" name="country" type="xs:string"/>
                    <xs:element minOccurs="0" name="notes" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="formatSettings">
                <xs:sequence>
                    <xs:element minOccurs="0" name="timeZone" type="xs:string"/>
                    <xs:element minOccurs="0" name="dateFormat" type="xs:string"/>
                    <xs:element minOccurs="0" name="locale" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="brandingSettings">
                <xs:sequence>
                    <xs:element minOccurs="0" name="brandingImage" type="xs:string"/>
                    <xs:element minOccurs="0" name="brandingImageLink" type="xs:string"/>
                    <xs:element minOccurs="0" name="brandingImageUrl" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="repliesSettings">
                <xs:sequence>
                    <xs:element minOccurs="0" name="deletedAutomatedReplies" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="deleteSpam" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="deleteUnsubscribeReplies" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="handleUnsubscribes" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="unsubscribeKeywords" type="xs:string"/>
                    <xs:element minOccurs="0" name="replyForwardEmail" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="accountAllocations">
                <xs:sequence>
                    <xs:element minOccurs="0" name="canExceedAllocation" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="canExceedSmsAllocation" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="emails" type="xs:integer"/>
                    <xs:element minOccurs="0" name="contacts" type="xs:long"/>
                    <xs:element minOccurs="0" name="hosting" type="xs:long"/>
                    <xs:element minOccurs="0" name="logins" type="xs:long"/>
                    <xs:element minOccurs="0" name="api" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="fields" type="xs:long"/>
                    <xs:element minOccurs="0" name="startDate" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="periodFrequency" type="xs:long"/>
                    <xs:element minOccurs="0" name="bundle" type="xs:string"/>
                    <xs:element minOccurs="0" name="defaultTemplates" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="branding" type="xs:boolean"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addAccountsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addSMSDeliveries">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="smsdeliveries" type="tns:smsDeliveryObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="smsDeliveryObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="start" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="messageId" type="xs:string"/>
                    <xs:element minOccurs="0" name="deliveryType" type="xs:string"/>
                    <xs:element minOccurs="0" name="status" type="xs:string"/>
                    <xs:element minOccurs="0" name="content" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="recipients" nillable="true" type="tns:deliveryRecipientObject"/>
                    <xs:element minOccurs="0" name="contactRecipients" type="tns:smsDeliveryContactsObject"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="keywords" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="fields" nillable="true" type="tns:smsMessageFieldObject"/>
                    <xs:element minOccurs="0" name="numSends" type="xs:long"/>
                    <xs:element minOccurs="0" name="numDeliveries" type="xs:long"/>
                    <xs:element minOccurs="0" name="numIncoming" type="xs:long"/>
                    <xs:element minOccurs="0" name="numBounces" type="xs:long"/>
                    <xs:element minOccurs="0" name="deliveryRate" type="xs:double"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deliveryRecipientObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="deliveryType" type="xs:string"/>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="type" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="smsDeliveryContactsObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="keyword" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="contactIds" nillable="true" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="smsMessageFieldObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="name" type="xs:string"/>
                    <xs:element minOccurs="0" name="content" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addSMSDeliveriesResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addHeaderFooters">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="footers" type="tns:headerFooterObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="headerFooterObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="name" type="xs:string"/>
                    <xs:element minOccurs="0" name="html" type="xs:string"/>
                    <xs:element minOccurs="0" name="text" type="xs:string"/>
                    <xs:element name="isHeader" type="xs:boolean"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addHeaderFootersResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addMessageRules">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="messageRules" type="tns:messageRuleObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addMessageRulesResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addToSMSKeyword">
                <xs:sequence>
                    <xs:element minOccurs="0" name="keyword" type="tns:smsKeywordObject"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="contacts" type="tns:contactObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="smsKeywordObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="name" type="xs:string"/>
                    <xs:element minOccurs="0" name="description" type="xs:string"/>
                    <xs:element minOccurs="0" name="subscriberCount" type="xs:long"/>
                    <xs:element minOccurs="0" name="frequencyCap" type="xs:long"/>
                    <xs:element minOccurs="0" name="dateCreated" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="scheduledDeleteDate" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="confirmationMessage" type="xs:string"/>
                    <xs:element minOccurs="0" name="messageContent" type="xs:string"/>
                    <xs:element minOccurs="0" name="keywordType" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addToSMSKeywordResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="logout">
                <xs:sequence/>
            </xs:complexType>
            <xs:complexType name="logoutResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readSMSKeywords">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:smsKeywordFilter"/>
                    <xs:element name="includeDeleted" type="xs:boolean"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="smsKeywordFilter">
                <xs:sequence>
                    <xs:element minOccurs="0" name="type" type="tns:filterType"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="id" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="name" nillable="true" type="tns:stringValue"/>
                    <xs:element minOccurs="0" name="keywordType" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readSMSKeywordsResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:smsKeywordObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addContentTags">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="contentTags" type="tns:contentTagObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addContentTagsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteMessageFolders">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="messageFolders" type="tns:messageFolderObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="messageFolderObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="name" type="xs:string"/>
                    <xs:element minOccurs="0" name="parentId" type="xs:string"/>
                    <xs:element minOccurs="0" name="parentName" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteMessageFoldersResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readWorkflows">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:workflowFilter"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="workflowFilter">
                <xs:sequence>
                    <xs:element minOccurs="0" name="type" type="tns:filterType"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="id" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="name" nillable="true" type="tns:stringValue"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readWorkflowsResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:workflowObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="workflowObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="siteId" type="xs:string"/>
                    <xs:element minOccurs="0" name="name" type="xs:string"/>
                    <xs:element minOccurs="0" name="description" type="xs:string"/>
                    <xs:element minOccurs="0" name="status" type="xs:string"/>
                    <xs:element minOccurs="0" name="createdDate" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="modifiedDate" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="activatedDate" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="deActivatedDate" type="xs:dateTime"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteMessages">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="messages" type="tns:messageObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteMessagesResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addMessageFolders">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="messageFolders" type="tns:messageFolderObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addMessageFoldersResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addContacts">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="contacts" type="tns:contactObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addContactsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readLists">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:mailListFilter"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                    <xs:element minOccurs="0" name="pageSize" type="xs:int"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="mailListFilter">
                <xs:sequence>
                    <xs:element minOccurs="0" name="type" type="tns:filterType"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="id" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="name" nillable="true" type="tns:stringValue"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readListsResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:mailListObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="clearLists">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="list" type="tns:mailListObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="clearListsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteDeliveries">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="deliveries" type="tns:deliveryObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deliveryObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="start" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="messageId" type="xs:string"/>
                    <xs:element minOccurs="0" name="status" type="xs:string"/>
                    <xs:element minOccurs="0" name="type" type="xs:string"/>
                    <xs:element minOccurs="0" name="fromEmail" type="xs:string"/>
                    <xs:element minOccurs="0" name="fromName" type="xs:string"/>
                    <xs:element minOccurs="0" name="replyEmail" type="xs:string"/>
                    <xs:element minOccurs="0" name="authentication" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="replyTracking" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="messageRuleId" type="xs:string"/>
                    <xs:element minOccurs="0" name="optin" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="throttle" type="xs:long"/>
                    <xs:element minOccurs="0" name="fatigueOverride" type="xs:boolean"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="content" nillable="true" type="tns:messageContentObject"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="recipients" nillable="true" type="tns:deliveryRecipientObject"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="fields" nillable="true" type="tns:messageFieldObject"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="products" nillable="true" type="tns:deliveryProductObject"/>
                    <xs:element minOccurs="0" name="remail" type="tns:remailObject"/>
                    <xs:element minOccurs="0" name="numSends" type="xs:long"/>
                    <xs:element minOccurs="0" name="numDeliveries" type="xs:long"/>
                    <xs:element minOccurs="0" name="numHardBadEmail" type="xs:long"/>
                    <xs:element minOccurs="0" name="numHardDestUnreach" type="xs:long"/>
                    <xs:element minOccurs="0" name="numHardMessageContent" type="xs:long"/>
                    <xs:element minOccurs="0" name="numHardBounces" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSoftBadEmail" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSoftDestUnreach" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSoftMessageContent" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSoftBounces" type="xs:long"/>
                    <xs:element minOccurs="0" name="numOtherBounces" type="xs:long"/>
                    <xs:element minOccurs="0" name="numBounces" type="xs:long"/>
                    <xs:element minOccurs="0" name="uniqOpens" type="xs:long"/>
                    <xs:element minOccurs="0" name="numOpens" type="xs:long"/>
                    <xs:element minOccurs="0" name="avgOpens" type="xs:double"/>
                    <xs:element minOccurs="0" name="uniqClicks" type="xs:long"/>
                    <xs:element minOccurs="0" name="numClicks" type="xs:long"/>
                    <xs:element minOccurs="0" name="avgClicks" type="xs:double"/>
                    <xs:element minOccurs="0" name="uniqConversions" type="xs:long"/>
                    <xs:element minOccurs="0" name="numConversions" type="xs:long"/>
                    <xs:element minOccurs="0" name="avgConversions" type="xs:double"/>
                    <xs:element minOccurs="0" name="revenue" type="xs:decimal"/>
                    <xs:element minOccurs="0" name="numSurveyResponses" type="xs:long"/>
                    <xs:element minOccurs="0" name="numFriendForwards" type="xs:long"/>
                    <xs:element minOccurs="0" name="numContactUpdates" type="xs:long"/>
                    <xs:element minOccurs="0" name="numUnsubscribesByPrefs" type="xs:long"/>
                    <xs:element minOccurs="0" name="numUnsubscribesByComplaint" type="xs:long"/>
                    <xs:element minOccurs="0" name="numContactLoss" type="xs:long"/>
                    <xs:element minOccurs="0" name="numContactLossBounces" type="xs:long"/>
                    <xs:element minOccurs="0" name="deliveryRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="openRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="clickRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="clickThroughRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="conversionRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="bounceRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="complaintRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="contactLossRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="numSocialShares" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSharesFacebook" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSharesTwitter" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSharesLinkedIn" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSharesDigg" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSharesMySpace" type="xs:long"/>
                    <xs:element minOccurs="0" name="numViewsFacebook" type="xs:long"/>
                    <xs:element minOccurs="0" name="numViewsTwitter" type="xs:long"/>
                    <xs:element minOccurs="0" name="numViewsLinkedIn" type="xs:long"/>
                    <xs:element minOccurs="0" name="numViewsDigg" type="xs:long"/>
                    <xs:element minOccurs="0" name="numViewsMySpace" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSocialViews" type="xs:long"/>
                    <xs:element minOccurs="0" name="cartId" type="xs:string"/>
                    <xs:element minOccurs="0" name="orderId" type="xs:string"/>
                    <xs:element minOccurs="0" name="campaignId" type="xs:long"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="messageFieldObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="name" type="xs:string"/>
                    <xs:element minOccurs="0" name="type" type="xs:string"/>
                    <xs:element minOccurs="0" name="content" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deliveryProductObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="placeholder" type="xs:string"/>
                    <xs:element minOccurs="0" name="productId" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="remailObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="days" type="xs:int"/>
                    <xs:element minOccurs="0" name="time" type="xs:string"/>
                    <xs:element minOccurs="0" name="subject" type="xs:string"/>
                    <xs:element minOccurs="0" name="messageId" type="xs:string"/>
                    <xs:element minOccurs="0" name="activity" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteDeliveriesResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateContentTags">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="contentTags" type="tns:contentTagObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateContentTagsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteHeaderFooters">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="footers" type="tns:headerFooterObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteHeaderFootersResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addDeliveries">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="deliveries" type="tns:deliveryObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addDeliveriesResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateMessages">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="messages" type="tns:messageObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateMessagesResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addConversion">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="conversions" type="tns:conversionObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="conversionObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="contactId" type="xs:string"/>
                    <xs:element minOccurs="0" name="email" type="xs:string"/>
                    <xs:element minOccurs="0" name="orderId" type="xs:string"/>
                    <xs:element minOccurs="0" name="item" type="xs:string"/>
                    <xs:element minOccurs="0" name="description" type="xs:string"/>
                    <xs:element minOccurs="0" name="quantity" type="xs:int"/>
                    <xs:element minOccurs="0" name="amount" type="xs:decimal"/>
                    <xs:element minOccurs="0" name="orderTotal" type="xs:decimal"/>
                    <xs:element minOccurs="0" name="createdDate" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="deliveryId" type="xs:string"/>
                    <xs:element minOccurs="0" name="messageId" type="xs:string"/>
                    <xs:element minOccurs="0" name="automatorId" type="xs:string"/>
                    <xs:element minOccurs="0" name="listId" type="xs:string"/>
                    <xs:element minOccurs="0" name="segmentId" type="xs:string"/>
                    <xs:element minOccurs="0" name="deliveryType" type="xs:string"/>
                    <xs:element minOccurs="0" name="tid" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addConversionResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readMessageFolders">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:messageFolderFilter"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="messageFolderFilter">
                <xs:sequence>
                    <xs:element minOccurs="0" name="type" type="tns:filterType"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="id" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="name" nillable="true" type="tns:stringValue"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="parentId" nillable="true" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readMessageFoldersResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:messageFolderObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addMessages">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="messages" type="tns:messageObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addMessagesResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readBounces">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:bounceFilter"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="bounceFilter">
                <xs:sequence>
                    <xs:element minOccurs="0" name="contactId" type="xs:string"/>
                    <xs:element minOccurs="0" name="start" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="end" type="xs:dateTime"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readBouncesResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:bounceObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="bounceObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="contactId" type="xs:string"/>
                    <xs:element minOccurs="0" name="deliveryId" type="xs:string"/>
                    <xs:element minOccurs="0" name="type" type="xs:string"/>
                    <xs:element minOccurs="0" name="description" type="xs:string"/>
                    <xs:element minOccurs="0" name="created" type="xs:dateTime"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="removeFromSMSKeyword">
                <xs:sequence>
                    <xs:element minOccurs="0" name="keyword" type="tns:smsKeywordObject"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="contacts" type="tns:contactObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="removeFromSMSKeywordResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addDeliveryGroup">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="deliveryGroups" type="tns:deliveryGroupObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addDeliveryGroupResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addUpdateOrder">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="orders" type="tns:orderObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addUpdateOrderResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readWebforms">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:webformFilter"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="webformFilter">
                <xs:sequence>
                    <xs:element minOccurs="0" name="type" type="tns:filterType"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="id" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="name" nillable="true" type="tns:stringValue"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="webformType" nillable="true" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readWebformsResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:webformObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="webformObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="name" type="xs:string"/>
                    <xs:element minOccurs="0" name="type" type="xs:string"/>
                    <xs:element minOccurs="0" name="isDefault" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="modified" type="xs:dateTime"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateSMSMessages">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="messages" type="tns:smsMessageObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateSMSMessagesResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="login">
                <xs:sequence>
                    <xs:element minOccurs="0" name="apiToken" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="loginResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readSegmentsWithTotalCounts">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:segmentFilter"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                    <xs:element minOccurs="0" name="pageSize" type="xs:int"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="segmentFilter">
                <xs:sequence>
                    <xs:element minOccurs="0" name="type" type="tns:filterType"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="id" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="name" nillable="true" type="tns:stringValue"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readSegmentsWithTotalCountsResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:segmentObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="segmentObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="name" type="xs:string"/>
                    <xs:element minOccurs="0" name="matchAnyRule" type="xs:boolean"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="rules" nillable="true" type="tns:segmentRuleObject"/>
                    <xs:element minOccurs="0" name="lastUpdated" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="activeCount" type="xs:long"/>
                    <xs:element name="totalCount" type="xs:long"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="segmentRuleObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="canMatchAny" type="xs:boolean"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="criteria" nillable="true" type="tns:segmentCriteriaObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="segmentCriteriaObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="operator" type="xs:string"/>
                    <xs:element minOccurs="0" name="condition" type="xs:string"/>
                    <xs:element minOccurs="0" name="value" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateAccounts">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="accounts" type="tns:accountObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateAccountsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readFields">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:fieldsFilter"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                    <xs:element minOccurs="0" name="pageSize" type="xs:int"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="fieldsFilter">
                <xs:sequence>
                    <xs:element minOccurs="0" name="type" type="tns:filterType"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="id" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="name" nillable="true" type="tns:stringValue"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readFieldsResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:fieldObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="fieldObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="name" type="xs:string"/>
                    <xs:element minOccurs="0" name="label" type="xs:string"/>
                    <xs:element minOccurs="0" name="type" type="xs:string"/>
                    <xs:element minOccurs="0" name="visibility" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="options" nillable="true" type="tns:fieldOptionObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="fieldOptionObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="label" type="xs:string"/>
                    <xs:element minOccurs="0" name="value" type="xs:string"/>
                    <xs:element name="isDefault" type="xs:boolean"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readSMSMessages">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:messageFilter"/>
                    <xs:element name="includeContent" type="xs:boolean"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readSMSMessagesResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:smsMessageObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteSMSDeliveries">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="smsdeliveries" type="tns:smsDeliveryObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteSMSDeliveriesResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteLists">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="lists" type="tns:mailListObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteListsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteFields">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="fields" type="tns:fieldObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteFieldsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readConversions">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:conversionFilter"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="conversionFilter">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="contactId" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="deliveryId" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="id" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="orderId" nillable="true" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readConversionsResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:conversionObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readDeliveryRecipients">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:deliveryRecipientFilter"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deliveryRecipientFilter">
                <xs:sequence>
                    <xs:element minOccurs="0" name="type" type="tns:filterType"/>
                    <xs:element minOccurs="0" name="deliveryId" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="listIds" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="segmentIds" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="contactIds" nillable="true" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readDeliveryRecipientsResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:deliveryRecipientStatObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deliveryRecipientStatObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="deliveryId" type="xs:string"/>
                    <xs:element minOccurs="0" name="listId" type="xs:string"/>
                    <xs:element minOccurs="0" name="segmentId" type="xs:string"/>
                    <xs:element minOccurs="0" name="contactId" type="xs:string"/>
                    <xs:element minOccurs="0" name="numSends" type="xs:long"/>
                    <xs:element minOccurs="0" name="numDeliveries" type="xs:long"/>
                    <xs:element minOccurs="0" name="numHardBadEmail" type="xs:long"/>
                    <xs:element minOccurs="0" name="numHardDestUnreach" type="xs:long"/>
                    <xs:element minOccurs="0" name="numHardMessageContent" type="xs:long"/>
                    <xs:element minOccurs="0" name="numHardBounces" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSoftBadEmail" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSoftDestUnreach" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSoftMessageContent" type="xs:long"/>
                    <xs:element minOccurs="0" name="numSoftBounces" type="xs:long"/>
                    <xs:element minOccurs="0" name="numOtherBounces" type="xs:long"/>
                    <xs:element minOccurs="0" name="numBounces" type="xs:long"/>
                    <xs:element minOccurs="0" name="uniqOpens" type="xs:long"/>
                    <xs:element minOccurs="0" name="numOpens" type="xs:long"/>
                    <xs:element minOccurs="0" name="avgOpens" type="xs:double"/>
                    <xs:element minOccurs="0" name="uniqClicks" type="xs:long"/>
                    <xs:element minOccurs="0" name="numClicks" type="xs:long"/>
                    <xs:element minOccurs="0" name="avgClicks" type="xs:double"/>
                    <xs:element minOccurs="0" name="uniqConversions" type="xs:long"/>
                    <xs:element minOccurs="0" name="numConversions" type="xs:long"/>
                    <xs:element minOccurs="0" name="avgConversions" type="xs:double"/>
                    <xs:element minOccurs="0" name="revenue" type="xs:double"/>
                    <xs:element minOccurs="0" name="numSurveyResponses" type="xs:long"/>
                    <xs:element minOccurs="0" name="numFriendForwards" type="xs:long"/>
                    <xs:element minOccurs="0" name="numContactUpdates" type="xs:long"/>
                    <xs:element minOccurs="0" name="numUnsubscribesByPrefs" type="xs:long"/>
                    <xs:element minOccurs="0" name="numUnsubscribesByComplaint" type="xs:long"/>
                    <xs:element minOccurs="0" name="numContactLoss" type="xs:long"/>
                    <xs:element minOccurs="0" name="numContactLossBounces" type="xs:long"/>
                    <xs:element minOccurs="0" name="deliveryRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="openRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="clickRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="clickThroughRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="conversionRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="bounceRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="complaintRate" type="xs:double"/>
                    <xs:element minOccurs="0" name="contactLossRate" type="xs:double"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readLogins">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:loginFilter"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="loginFilter">
                <xs:sequence>
                    <xs:element minOccurs="0" name="type" type="tns:filterType"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="username" nillable="true" type="tns:stringValue"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readLoginsResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:loginObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="loginObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="username" type="xs:string"/>
                    <xs:element minOccurs="0" name="password" type="xs:string"/>
                    <xs:element minOccurs="0" name="contactInformation" type="tns:contactInformation"/>
                    <xs:element minOccurs="0" name="permissionAgencyAdmin" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="permissionAdmin" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="permissionApi" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="permissionUpgrade" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="permissionFatigueOverride" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="permissionMessageCompose" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="permissionMessageApprove" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="permissionMessageDelete" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="permissionAutomatorCompose" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="permissionListCreateSend" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="permissionListCreate" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="permissionSegmentCreate" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="permissionFieldCreate" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="permissionFieldReorder" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="permissionSubscriberCreate" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="permissionSubscriberView" type="xs:boolean"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateDeliveryGroup">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="deliveryGroups" type="tns:deliveryGroupObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateDeliveryGroupResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteSMSKeywords">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="keyword" type="tns:smsKeywordObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteSMSKeywordsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addFields">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="fields" type="tns:fieldObject"/>
                    <xs:element name="isVisibleInContactList" type="xs:boolean"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addFieldsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateSMSKeywords">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="keyword" type="tns:smsKeywordObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateSMSKeywordsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateDeliveries">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="deliveries" type="tns:deliveryObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateDeliveriesResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateLists">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="lists" type="tns:mailListObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateListsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readContactsWithLatestUnsubscribeDate">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:contactFilter"/>
                    <xs:element minOccurs="0" name="includeLists" type="xs:boolean"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="fields" type="xs:string"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                    <xs:element minOccurs="0" name="includeSMSKeywords" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="includeGeoIPData" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="includeTechnologyData" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="includeRFMData" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="includeEngagementData" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="includeSegments" type="xs:boolean"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="contactFilter">
                <xs:sequence>
                    <xs:element minOccurs="0" name="type" type="tns:filterType"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="id" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="email" nillable="true" type="tns:stringValue"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="mobileNumber" nillable="true" type="tns:stringValue"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="status" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="created" nillable="true" type="tns:dateValue"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="modified" nillable="true" type="tns:dateValue"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="listId" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="segmentId" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="SMSKeywordID" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="msgPref" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="source" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="customSource" nillable="true" type="tns:stringValue"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="dateValue">
                <xs:sequence>
                    <xs:element minOccurs="0" name="value" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="operator" type="tns:filterOperator"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readContactsWithLatestUnsubscribeDateResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:contactObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteAccounts">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="accounts" type="tns:accountObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteAccountsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addToDeliveryGroup">
                <xs:sequence>
                    <xs:element minOccurs="0" name="deliveryGroup" type="tns:deliveryGroupObject"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="deliveryIds" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="messageIds" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="messageRuleIds" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addToDeliveryGroupResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addOrUpdateDeliveryGroup">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="deliveryGroups" type="tns:deliveryGroupObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addOrUpdateDeliveryGroupResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateWorkflows">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="workflows" type="tns:workflowObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateWorkflowsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addApiTokens">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="tokens" type="tns:apiTokenObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="apiTokenObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="id" type="xs:string"/>
                    <xs:element minOccurs="0" name="name" type="xs:string"/>
                    <xs:element name="permissions" type="xs:int"/>
                    <xs:element name="active" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="created" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="modified" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="accountId" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addApiTokensResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readSegments">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:segmentFilter"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                    <xs:element minOccurs="0" name="pageSize" type="xs:int"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readSegmentsResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:segmentObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readDeliveryGroups">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:deliveryGroupFilter"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                    <xs:element minOccurs="0" name="includeStats" type="xs:boolean"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deliveryGroupFilter">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="deliveryGroupId" nillable="true" type="xs:string"/>
                    <xs:element minOccurs="0" name="listByType" type="tns:memberType"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="automatorId" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="messageGroupId" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="deliveryId" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="name" nillable="true" type="tns:stringValue"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readDeliveryGroupsResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:deliveryGroupObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addLogins">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="accounts" type="tns:loginObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addLoginsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addOrUpdateContactsIncremental">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="contacts" type="tns:contactObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addOrUpdateContactsIncrementalResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readContacts">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:contactFilter"/>
                    <xs:element minOccurs="0" name="includeLists" type="xs:boolean"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="fields" type="xs:string"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                    <xs:element minOccurs="0" name="includeSMSKeywords" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="includeGeoIPData" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="includeTechnologyData" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="includeRFMData" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="includeEngagementData" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="includeSegments" type="xs:boolean"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readContactsResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:contactObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateLogins">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="accounts" type="tns:loginObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateLoginsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readRecentOutboundActivities">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:recentOutboundActivitySearchRequest"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="recentOutboundActivitySearchRequest">
                <xs:complexContent>
                    <xs:extension base="tns:recentActivitySearchRequest">
                        <xs:sequence>
                            <xs:element maxOccurs="unbounded" minOccurs="0" name="types" nillable="true" type="xs:string"/>
                        </xs:sequence>
                    </xs:extension>
                </xs:complexContent>
            </xs:complexType>
            <xs:complexType abstract="true" name="recentActivitySearchRequest">
                <xs:sequence>
                    <xs:element minOccurs="0" name="start" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="end" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="contactId" type="xs:string"/>
                    <xs:element minOccurs="0" name="deliveryId" type="xs:string"/>
                    <xs:element name="size" type="xs:int"/>
                    <xs:element minOccurs="0" name="readDirection" type="tns:readDirection"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readRecentOutboundActivitiesResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:recentActivityObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="recentActivityObject">
                <xs:sequence>
                    <xs:element minOccurs="0" name="createdDate" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="contactId" type="xs:string"/>
                    <xs:element minOccurs="0" name="listId" type="xs:string"/>
                    <xs:element minOccurs="0" name="segmentId" type="xs:string"/>
                    <xs:element minOccurs="0" name="keywordId" type="xs:string"/>
                    <xs:element minOccurs="0" name="messageId" type="xs:string"/>
                    <xs:element minOccurs="0" name="deliveryId" type="xs:string"/>
                    <xs:element minOccurs="0" name="workflowId" type="xs:string"/>
                    <xs:element minOccurs="0" name="activityType" type="xs:string"/>
                    <xs:element minOccurs="0" name="emailAddress" type="xs:string"/>
                    <xs:element minOccurs="0" name="mobileNumber" type="xs:string"/>
                    <xs:element minOccurs="0" name="contactStatus" type="xs:string"/>
                    <xs:element minOccurs="0" name="messageName" type="xs:string"/>
                    <xs:element minOccurs="0" name="deliveryType" type="xs:string"/>
                    <xs:element minOccurs="0" name="deliveryStart" type="xs:dateTime"/>
                    <xs:element minOccurs="0" name="workflowName" type="xs:string"/>
                    <xs:element minOccurs="0" name="segmentName" type="xs:string"/>
                    <xs:element minOccurs="0" name="listName" type="xs:string"/>
                    <xs:element minOccurs="0" name="listLabel" type="xs:string"/>
                    <xs:element minOccurs="0" name="automatorName" type="xs:string"/>
                    <xs:element minOccurs="0" name="smsKeywordName" type="xs:string"/>
                    <xs:element minOccurs="0" name="bounceType" type="xs:string"/>
                    <xs:element minOccurs="0" name="bounceReason" type="xs:string"/>
                    <xs:element minOccurs="0" name="skipReason" type="xs:string"/>
                    <xs:element minOccurs="0" name="linkName" type="xs:string"/>
                    <xs:element minOccurs="0" name="linkUrl" type="xs:string"/>
                    <xs:element minOccurs="0" name="orderId" type="xs:string"/>
                    <xs:element minOccurs="0" name="unsubscribeMethod" type="xs:string"/>
                    <xs:element minOccurs="0" name="ftafEmails" type="xs:string"/>
                    <xs:element minOccurs="0" name="socialNetwork" type="xs:string"/>
                    <xs:element minOccurs="0" name="socialActivity" type="xs:string"/>
                    <xs:element minOccurs="0" name="webformType" type="xs:string"/>
                    <xs:element minOccurs="0" name="webformAction" type="xs:string"/>
                    <xs:element minOccurs="0" name="webformName" type="xs:string"/>
                    <xs:element minOccurs="0" name="webformId" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addContactEvent">
                <xs:sequence>
                    <xs:element minOccurs="0" name="keyword" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="contacts" type="tns:contactObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addContactEventResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readApiTokens">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:apiTokenFilter"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="apiTokenFilter">
                <xs:sequence>
                    <xs:element minOccurs="0" name="type" type="tns:filterType"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="id" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="accountId" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="name" nillable="true" type="tns:stringValue"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readApiTokensResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:apiTokenObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readDeliveries">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:deliveryFilter"/>
                    <xs:element name="includeRecipients" type="xs:boolean"/>
                    <xs:element name="includeContent" type="xs:boolean"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                    <xs:element minOccurs="0" name="includeOrderIds" type="xs:boolean"/>
                    <xs:element minOccurs="0" name="includeCampaignId" type="xs:boolean"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deliveryFilter">
                <xs:sequence>
                    <xs:element minOccurs="0" name="type" type="tns:filterType"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="id" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="messageId" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="start" nillable="true" type="tns:dateValue"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="status" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="deliveryType" nillable="true" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readDeliveriesResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:deliveryObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateApiTokens">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="tokens" type="tns:apiTokenObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateApiTokensResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addWorkflows">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="workflows" type="tns:workflowObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addWorkflowsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteWorkflows">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="workflows" type="tns:workflowObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteWorkflowsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteContacts">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="contacts" type="tns:contactObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteContactsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addToList">
                <xs:sequence>
                    <xs:element minOccurs="0" name="list" type="tns:mailListObject"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="contacts" type="tns:contactObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addToListResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addSMSKeywords">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="keyword" type="tns:smsKeywordObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addSMSKeywordsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateSMSDeliveries">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="smsdeliveries" type="tns:smsDeliveryObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateSMSDeliveriesResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateHeaderFooters">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="footers" type="tns:headerFooterObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateHeaderFootersResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addContactsToWorkflow">
                <xs:sequence>
                    <xs:element minOccurs="0" name="workflow" type="tns:workflowObject"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="contacts" type="tns:contactObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="addContactsToWorkflowResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateFields">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="fields" type="tns:fieldObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateFieldsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readAccounts">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:accountFilter"/>
                    <xs:element name="includeInfo" type="xs:boolean"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType final="extension restriction" name="accountFilter">
                <xs:sequence>
                    <xs:element minOccurs="0" name="type" type="tns:filterType"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="id" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="name" nillable="true" type="tns:stringValue"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readAccountsResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:accountObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteLogins">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="accounts" type="tns:loginObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteLoginsResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readHeaderFooters">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:headerFooterFilter"/>
                    <xs:element name="includeContent" type="xs:boolean"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="headerFooterFilter">
                <xs:sequence>
                    <xs:element minOccurs="0" name="type" type="tns:filterType"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="id" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="name" nillable="true" type="tns:stringValue"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="position" nillable="true" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readHeaderFootersResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:headerFooterObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateMessageFolders">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="messageFolders" type="tns:messageFolderObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="updateMessageFoldersResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteMessageRules">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="messageRules" type="tns:messageRuleObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteMessageRulesResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readSMSDeliveries">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:smsDeliveryFilter"/>
                    <xs:element name="includeContent" type="xs:boolean"/>
                    <xs:element name="includeRecipients" type="xs:boolean"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="smsDeliveryFilter">
                <xs:sequence>
                    <xs:element minOccurs="0" name="type" type="tns:filterType"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="id" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="messageId" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="start" nillable="true" type="tns:dateValue"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="status" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="deliveryType" nillable="true" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readSMSDeliveriesResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:smsDeliveryObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readRecentInboundActivities">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:recentInboundActivitySearchRequest"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="recentInboundActivitySearchRequest">
                <xs:complexContent>
                    <xs:extension base="tns:recentActivitySearchRequest">
                        <xs:sequence>
                            <xs:element maxOccurs="unbounded" minOccurs="0" name="types" nillable="true" type="xs:string"/>
                        </xs:sequence>
                    </xs:extension>
                </xs:complexContent>
            </xs:complexType>
            <xs:complexType name="readRecentInboundActivitiesResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:recentActivityObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteOrders">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="orders" type="tns:orderObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteOrdersResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteApiTokens">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="tokens" type="tns:apiTokenObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteApiTokensResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readMessageRules">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:messageRuleFilter"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="messageRuleFilter">
                <xs:sequence>
                    <xs:element minOccurs="0" name="type" type="tns:filterType"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="id" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="name" nillable="true" type="tns:stringValue"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="ruleType" nillable="true" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readMessageRulesResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:messageRuleObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="removeFromList">
                <xs:sequence>
                    <xs:element minOccurs="0" name="list" type="tns:mailListObject"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="contacts" type="tns:contactObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="removeFromListResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteFromDeliveryGroup">
                <xs:sequence>
                    <xs:element minOccurs="0" name="deliveryGroup" type="tns:deliveryGroupObject"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="deliveryIds" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="messageIds" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="messageRuleIds" type="xs:string"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="deleteFromDeliveryGroupResponse">
                <xs:sequence>
                    <xs:element minOccurs="0" name="return" type="tns:writeResult"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readContentTags">
                <xs:sequence>
                    <xs:element minOccurs="0" name="filter" type="tns:contentTagFilter"/>
                    <xs:element name="includeContent" type="xs:boolean"/>
                    <xs:element name="pageNumber" type="xs:int"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="contentTagFilter">
                <xs:sequence>
                    <xs:element minOccurs="0" name="type" type="tns:filterType"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="id" nillable="true" type="xs:string"/>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="name" nillable="true" type="tns:stringValue"/>
                </xs:sequence>
            </xs:complexType>
            <xs:complexType name="readContentTagsResponse">
                <xs:sequence>
                    <xs:element maxOccurs="unbounded" minOccurs="0" name="return" type="tns:contentTagObject"/>
                </xs:sequence>
            </xs:complexType>
            <xs:simpleType name="filterType">
                <xs:restriction base="xs:string">
                    <xs:enumeration value="AND"/>
                    <xs:enumeration value="OR"/>
                </xs:restriction>
            </xs:simpleType>
            <xs:simpleType name="filterOperator">
                <xs:restriction base="xs:string">
                    <xs:enumeration value="EqualTo"/>
                    <xs:enumeration value="NotEqualTo"/>
                    <xs:enumeration value="StartsWith"/>
                    <xs:enumeration value="EndsWith"/>
                    <xs:enumeration value="DoesNotStartWith"/>
                    <xs:enumeration value="DoesNotEndWith"/>
                    <xs:enumeration value="GreaterThan"/>
                    <xs:enumeration value="LessThan"/>
                    <xs:enumeration value="GreaterThanEqualTo"/>
                    <xs:enumeration value="LessThanEqualTo"/>
                    <xs:enumeration value="Contains"/>
                    <xs:enumeration value="DoesNotContain"/>
                    <xs:enumeration value="SameYear"/>
                    <xs:enumeration value="NotSameYear"/>
                    <xs:enumeration value="SameDay"/>
                    <xs:enumeration value="NotSameDay"/>
                    <xs:enumeration value="Before"/>
                    <xs:enumeration value="After"/>
                    <xs:enumeration value="BeforeOrSameDay"/>
                    <xs:enumeration value="AfterOrSameDay"/>
                </xs:restriction>
            </xs:simpleType>
            <xs:simpleType name="readDirection">
                <xs:restriction base="xs:string">
                    <xs:enumeration value="NEXT"/>
                    <xs:enumeration value="FIRST"/>
                </xs:restriction>
            </xs:simpleType>
            <xs:simpleType name="memberType">
                <xs:restriction base="xs:string">
                    <xs:enumeration value="DELIVERIES"/>
                    <xs:enumeration value="AUTOMATORS"/>
                    <xs:enumeration value="MESSAGEGROUPS"/>
                    <xs:enumeration value="DELIVERYGROUPS"/>
                </xs:restriction>
            </xs:simpleType>
            <xs:element name="ApiException" type="tns:ApiException"/>
            <xs:complexType name="ApiException">
                <xs:sequence>
                    <xs:element name="errorCode" nillable="true" type="xs:int"/>
                </xs:sequence>
            </xs:complexType>
            <xs:element name="sessionHeader" nillable="true" type="tns:sessionHeader"/>
        </xs:schema>
    </wsdl:types>
    <wsdl:message name="clearListsResponse">
        <wsdl:part element="tns:clearListsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readMessages">
        <wsdl:part element="tns:readMessages" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addOrUpdateContacts">
        <wsdl:part element="tns:addOrUpdateContacts" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readActivities">
        <wsdl:part element="tns:readActivities" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readConversionsResponse">
        <wsdl:part element="tns:readConversionsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteContentTags">
        <wsdl:part element="tns:deleteContentTags" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addAccounts">
        <wsdl:part element="tns:addAccounts" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addSMSDeliveriesResponse">
        <wsdl:part element="tns:addSMSDeliveriesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readHeaderFootersResponse">
        <wsdl:part element="tns:readHeaderFootersResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="logout">
        <wsdl:part element="tns:logout" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteMessageFoldersResponse">
        <wsdl:part element="tns:deleteMessageFoldersResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readDeliveriesResponse">
        <wsdl:part element="tns:readDeliveriesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteFromDeliveryGroupResponse">
        <wsdl:part element="tns:deleteFromDeliveryGroupResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addFieldsResponse">
        <wsdl:part element="tns:addFieldsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addContentTags">
        <wsdl:part element="tns:addContentTags" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readLoginsResponse">
        <wsdl:part element="tns:readLoginsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readListsResponse">
        <wsdl:part element="tns:readListsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addMessageFolders">
        <wsdl:part element="tns:addMessageFolders" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readLists">
        <wsdl:part element="tns:readLists" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readSegmentsResponse">
        <wsdl:part element="tns:readSegmentsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteMessageRulesResponse">
        <wsdl:part element="tns:deleteMessageRulesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateWorkflowsResponse">
        <wsdl:part element="tns:updateWorkflowsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteSMSMessagesResponse">
        <wsdl:part element="tns:deleteSMSMessagesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addMessageFoldersResponse">
        <wsdl:part element="tns:addMessageFoldersResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateContentTags">
        <wsdl:part element="tns:updateContentTags" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readSMSMessagesResponse">
        <wsdl:part element="tns:readSMSMessagesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="ApiException">
        <wsdl:part element="tns:ApiException" name="ApiException">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateMessages">
        <wsdl:part element="tns:updateMessages" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteLoginsResponse">
        <wsdl:part element="tns:deleteLoginsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addAccountsResponse">
        <wsdl:part element="tns:addAccountsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addMessages">
        <wsdl:part element="tns:addMessages" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteApiTokensResponse">
        <wsdl:part element="tns:deleteApiTokensResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="removeFromSMSKeyword">
        <wsdl:part element="tns:removeFromSMSKeyword" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readContactsResponse">
        <wsdl:part element="tns:readContactsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addUpdateOrder">
        <wsdl:part element="tns:addUpdateOrder" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addDeliveryGroupResponse">
        <wsdl:part element="tns:addDeliveryGroupResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addContactsResponse">
        <wsdl:part element="tns:addContactsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="login">
        <wsdl:part element="tns:login" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readSegmentsWithTotalCounts">
        <wsdl:part element="tns:readSegmentsWithTotalCounts" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateAccounts">
        <wsdl:part element="tns:updateAccounts" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addOrUpdateContactsResponse">
        <wsdl:part element="tns:addOrUpdateContactsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readSMSMessages">
        <wsdl:part element="tns:readSMSMessages" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteSMSDeliveries">
        <wsdl:part element="tns:deleteSMSDeliveries" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readFieldsResponse">
        <wsdl:part element="tns:readFieldsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readBouncesResponse">
        <wsdl:part element="tns:readBouncesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteFields">
        <wsdl:part element="tns:deleteFields" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addOrUpdateDeliveryGroupResponse">
        <wsdl:part element="tns:addOrUpdateDeliveryGroupResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readActivitiesResponse">
        <wsdl:part element="tns:readActivitiesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addMessageRulesResponse">
        <wsdl:part element="tns:addMessageRulesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteAccountsResponse">
        <wsdl:part element="tns:deleteAccountsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addContactsToWorkflowResponse">
        <wsdl:part element="tns:addContactsToWorkflowResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addOrUpdateOrdersResponse">
        <wsdl:part element="tns:addOrUpdateOrdersResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addFields">
        <wsdl:part element="tns:addFields" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateSMSKeywords">
        <wsdl:part element="tns:updateSMSKeywords" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readRecentOutboundActivitiesResponse">
        <wsdl:part element="tns:readRecentOutboundActivitiesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readMessageFoldersResponse">
        <wsdl:part element="tns:readMessageFoldersResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readContactsWithLatestUnsubscribeDate">
        <wsdl:part element="tns:readContactsWithLatestUnsubscribeDate" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addToDeliveryGroup">
        <wsdl:part element="tns:addToDeliveryGroup" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addOrUpdateDeliveryGroup">
        <wsdl:part element="tns:addOrUpdateDeliveryGroup" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="removeFromListResponse">
        <wsdl:part element="tns:removeFromListResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readSegments">
        <wsdl:part element="tns:readSegments" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteContactsResponse">
        <wsdl:part element="tns:deleteContactsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addLogins">
        <wsdl:part element="tns:addLogins" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readContacts">
        <wsdl:part element="tns:readContacts" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateLogins">
        <wsdl:part element="tns:updateLogins" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readRecentOutboundActivities">
        <wsdl:part element="tns:readRecentOutboundActivities" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addContactEvent">
        <wsdl:part element="tns:addContactEvent" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readApiTokens">
        <wsdl:part element="tns:readApiTokens" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readContentTagsResponse">
        <wsdl:part element="tns:readContentTagsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateMessagesResponse">
        <wsdl:part element="tns:updateMessagesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateApiTokens">
        <wsdl:part element="tns:updateApiTokens" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addWorkflows">
        <wsdl:part element="tns:addWorkflows" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addSMSKeywords">
        <wsdl:part element="tns:addSMSKeywords" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteHeaderFootersResponse">
        <wsdl:part element="tns:deleteHeaderFootersResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readApiTokensResponse">
        <wsdl:part element="tns:readApiTokensResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readUnsubscribesResponse">
        <wsdl:part element="tns:readUnsubscribesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateFields">
        <wsdl:part element="tns:updateFields" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="removeFromSMSKeywordResponse">
        <wsdl:part element="tns:removeFromSMSKeywordResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readAccounts">
        <wsdl:part element="tns:readAccounts" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteLogins">
        <wsdl:part element="tns:deleteLogins" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateMessageFolders">
        <wsdl:part element="tns:updateMessageFolders" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="logoutResponse">
        <wsdl:part element="tns:logoutResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteMessageRules">
        <wsdl:part element="tns:deleteMessageRules" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateMessageFoldersResponse">
        <wsdl:part element="tns:updateMessageFoldersResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteOrders">
        <wsdl:part element="tns:deleteOrders" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteApiTokens">
        <wsdl:part element="tns:deleteApiTokens" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readContentTags">
        <wsdl:part element="tns:readContentTags" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateContacts">
        <wsdl:part element="tns:updateContacts" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteSMSMessages">
        <wsdl:part element="tns:deleteSMSMessages" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addOrUpdateOrders">
        <wsdl:part element="tns:addOrUpdateOrders" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addLists">
        <wsdl:part element="tns:addLists" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readUnsubscribes">
        <wsdl:part element="tns:readUnsubscribes" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addSMSMessages">
        <wsdl:part element="tns:addSMSMessages" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteDeliveryGroup">
        <wsdl:part element="tns:deleteDeliveryGroup" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteFieldsResponse">
        <wsdl:part element="tns:deleteFieldsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateFieldsResponse">
        <wsdl:part element="tns:updateFieldsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addContactEventResponse">
        <wsdl:part element="tns:addContactEventResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateMessageRules">
        <wsdl:part element="tns:updateMessageRules" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readMessageRulesResponse">
        <wsdl:part element="tns:readMessageRulesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateSMSDeliveriesResponse">
        <wsdl:part element="tns:updateSMSDeliveriesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readSMSDeliveriesResponse">
        <wsdl:part element="tns:readSMSDeliveriesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateSMSMessagesResponse">
        <wsdl:part element="tns:updateSMSMessagesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addToSMSKeywordResponse">
        <wsdl:part element="tns:addToSMSKeywordResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readMessagesResponse">
        <wsdl:part element="tns:readMessagesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteDeliveriesResponse">
        <wsdl:part element="tns:deleteDeliveriesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addSMSDeliveries">
        <wsdl:part element="tns:addSMSDeliveries" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateDeliveryGroupResponse">
        <wsdl:part element="tns:updateDeliveryGroupResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addHeaderFooters">
        <wsdl:part element="tns:addHeaderFooters" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addMessageRules">
        <wsdl:part element="tns:addMessageRules" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addToSMSKeyword">
        <wsdl:part element="tns:addToSMSKeyword" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readSMSKeywordsResponse">
        <wsdl:part element="tns:readSMSKeywordsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addMessagesResponse">
        <wsdl:part element="tns:addMessagesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readSMSKeywords">
        <wsdl:part element="tns:readSMSKeywords" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteMessageFolders">
        <wsdl:part element="tns:deleteMessageFolders" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readWorkflows">
        <wsdl:part element="tns:readWorkflows" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteMessages">
        <wsdl:part element="tns:deleteMessages" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateApiTokensResponse">
        <wsdl:part element="tns:updateApiTokensResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addContacts">
        <wsdl:part element="tns:addContacts" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="clearLists">
        <wsdl:part element="tns:clearLists" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateDeliveriesResponse">
        <wsdl:part element="tns:updateDeliveriesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteDeliveries">
        <wsdl:part element="tns:deleteDeliveries" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteHeaderFooters">
        <wsdl:part element="tns:deleteHeaderFooters" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addDeliveries">
        <wsdl:part element="tns:addDeliveries" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addUpdateOrderResponse">
        <wsdl:part element="tns:addUpdateOrderResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateMessageRulesResponse">
        <wsdl:part element="tns:updateMessageRulesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addListsResponse">
        <wsdl:part element="tns:addListsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addHeaderFootersResponse">
        <wsdl:part element="tns:addHeaderFootersResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addConversion">
        <wsdl:part element="tns:addConversion" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readMessageFolders">
        <wsdl:part element="tns:readMessageFolders" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readBounces">
        <wsdl:part element="tns:readBounces" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addLoginsResponse">
        <wsdl:part element="tns:addLoginsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addWorkflowsResponse">
        <wsdl:part element="tns:addWorkflowsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addDeliveryGroup">
        <wsdl:part element="tns:addDeliveryGroup" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addDeliveriesResponse">
        <wsdl:part element="tns:addDeliveriesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addConversionResponse">
        <wsdl:part element="tns:addConversionResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readWebforms">
        <wsdl:part element="tns:readWebforms" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateSMSMessages">
        <wsdl:part element="tns:updateSMSMessages" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteListsResponse">
        <wsdl:part element="tns:deleteListsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readWorkflowsResponse">
        <wsdl:part element="tns:readWorkflowsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateAccountsResponse">
        <wsdl:part element="tns:updateAccountsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteSMSKeywordsResponse">
        <wsdl:part element="tns:deleteSMSKeywordsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readFields">
        <wsdl:part element="tns:readFields" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteLists">
        <wsdl:part element="tns:deleteLists" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteContentTagsResponse">
        <wsdl:part element="tns:deleteContentTagsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addToListResponse">
        <wsdl:part element="tns:addToListResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readDeliveryRecipientsResponse">
        <wsdl:part element="tns:readDeliveryRecipientsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="loginResponse">
        <wsdl:part element="tns:loginResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readConversions">
        <wsdl:part element="tns:readConversions" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addContentTagsResponse">
        <wsdl:part element="tns:addContentTagsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addApiTokensResponse">
        <wsdl:part element="tns:addApiTokensResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readDeliveryRecipients">
        <wsdl:part element="tns:readDeliveryRecipients" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readLogins">
        <wsdl:part element="tns:readLogins" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readAccountsResponse">
        <wsdl:part element="tns:readAccountsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateDeliveryGroup">
        <wsdl:part element="tns:updateDeliveryGroup" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addSMSKeywordsResponse">
        <wsdl:part element="tns:addSMSKeywordsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteSMSKeywords">
        <wsdl:part element="tns:deleteSMSKeywords" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addSMSMessagesResponse">
        <wsdl:part element="tns:addSMSMessagesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteDeliveryGroupResponse">
        <wsdl:part element="tns:deleteDeliveryGroupResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateDeliveries">
        <wsdl:part element="tns:updateDeliveries" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readContactsWithLatestUnsubscribeDateResponse">
        <wsdl:part element="tns:readContactsWithLatestUnsubscribeDateResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateLists">
        <wsdl:part element="tns:updateLists" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteAccounts">
        <wsdl:part element="tns:deleteAccounts" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateSMSKeywordsResponse">
        <wsdl:part element="tns:updateSMSKeywordsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateWorkflows">
        <wsdl:part element="tns:updateWorkflows" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateListsResponse">
        <wsdl:part element="tns:updateListsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addApiTokens">
        <wsdl:part element="tns:addApiTokens" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readDeliveryGroups">
        <wsdl:part element="tns:readDeliveryGroups" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateLoginsResponse">
        <wsdl:part element="tns:updateLoginsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateContentTagsResponse">
        <wsdl:part element="tns:updateContentTagsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addOrUpdateContactsIncremental">
        <wsdl:part element="tns:addOrUpdateContactsIncremental" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addToDeliveryGroupResponse">
        <wsdl:part element="tns:addToDeliveryGroupResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readDeliveryGroupsResponse">
        <wsdl:part element="tns:readDeliveryGroupsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteWorkflowsResponse">
        <wsdl:part element="tns:deleteWorkflowsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readDeliveries">
        <wsdl:part element="tns:readDeliveries" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readWebformsResponse">
        <wsdl:part element="tns:readWebformsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateHeaderFootersResponse">
        <wsdl:part element="tns:updateHeaderFootersResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readSegmentsWithTotalCountsResponse">
        <wsdl:part element="tns:readSegmentsWithTotalCountsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteWorkflows">
        <wsdl:part element="tns:deleteWorkflows" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteSMSDeliveriesResponse">
        <wsdl:part element="tns:deleteSMSDeliveriesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteContacts">
        <wsdl:part element="tns:deleteContacts" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addToList">
        <wsdl:part element="tns:addToList" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readRecentInboundActivitiesResponse">
        <wsdl:part element="tns:readRecentInboundActivitiesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateContactsResponse">
        <wsdl:part element="tns:updateContactsResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateSMSDeliveries">
        <wsdl:part element="tns:updateSMSDeliveries" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="updateHeaderFooters">
        <wsdl:part element="tns:updateHeaderFooters" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addContactsToWorkflow">
        <wsdl:part element="tns:addContactsToWorkflow" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteOrdersResponse">
        <wsdl:part element="tns:deleteOrdersResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteMessagesResponse">
        <wsdl:part element="tns:deleteMessagesResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="addOrUpdateContactsIncrementalResponse">
        <wsdl:part element="tns:addOrUpdateContactsIncrementalResponse" name="parameters">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readHeaderFooters">
        <wsdl:part element="tns:readHeaderFooters" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readSMSDeliveries">
        <wsdl:part element="tns:readSMSDeliveries" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readRecentInboundActivities">
        <wsdl:part element="tns:readRecentInboundActivities" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="readMessageRules">
        <wsdl:part element="tns:readMessageRules" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="removeFromList">
        <wsdl:part element="tns:removeFromList" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:message name="deleteFromDeliveryGroup">
        <wsdl:part element="tns:deleteFromDeliveryGroup" name="parameters">
    </wsdl:part>
        <wsdl:part element="tns:sessionHeader" name="sessionHeader">
    </wsdl:part>
    </wsdl:message>
    <wsdl:portType name="BrontoSoapPortType">
        <wsdl:operation name="updateContacts">
            <wsdl:input message="tns:updateContacts" name="updateContacts">
    </wsdl:input>
            <wsdl:output message="tns:updateContactsResponse" name="updateContactsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readMessages">
            <wsdl:input message="tns:readMessages" name="readMessages">
    </wsdl:input>
            <wsdl:output message="tns:readMessagesResponse" name="readMessagesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteSMSMessages">
            <wsdl:input message="tns:deleteSMSMessages" name="deleteSMSMessages">
    </wsdl:input>
            <wsdl:output message="tns:deleteSMSMessagesResponse" name="deleteSMSMessagesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addOrUpdateContacts">
            <wsdl:input message="tns:addOrUpdateContacts" name="addOrUpdateContacts">
    </wsdl:input>
            <wsdl:output message="tns:addOrUpdateContactsResponse" name="addOrUpdateContactsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addOrUpdateOrders">
            <wsdl:input message="tns:addOrUpdateOrders" name="addOrUpdateOrders">
    </wsdl:input>
            <wsdl:output message="tns:addOrUpdateOrdersResponse" name="addOrUpdateOrdersResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addLists">
            <wsdl:input message="tns:addLists" name="addLists">
    </wsdl:input>
            <wsdl:output message="tns:addListsResponse" name="addListsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readUnsubscribes">
            <wsdl:input message="tns:readUnsubscribes" name="readUnsubscribes">
    </wsdl:input>
            <wsdl:output message="tns:readUnsubscribesResponse" name="readUnsubscribesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addSMSMessages">
            <wsdl:input message="tns:addSMSMessages" name="addSMSMessages">
    </wsdl:input>
            <wsdl:output message="tns:addSMSMessagesResponse" name="addSMSMessagesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteDeliveryGroup">
            <wsdl:input message="tns:deleteDeliveryGroup" name="deleteDeliveryGroup">
    </wsdl:input>
            <wsdl:output message="tns:deleteDeliveryGroupResponse" name="deleteDeliveryGroupResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readActivities">
            <wsdl:input message="tns:readActivities" name="readActivities">
    </wsdl:input>
            <wsdl:output message="tns:readActivitiesResponse" name="readActivitiesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateMessageRules">
            <wsdl:input message="tns:updateMessageRules" name="updateMessageRules">
    </wsdl:input>
            <wsdl:output message="tns:updateMessageRulesResponse" name="updateMessageRulesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteContentTags">
            <wsdl:input message="tns:deleteContentTags" name="deleteContentTags">
    </wsdl:input>
            <wsdl:output message="tns:deleteContentTagsResponse" name="deleteContentTagsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addAccounts">
            <wsdl:input message="tns:addAccounts" name="addAccounts">
    </wsdl:input>
            <wsdl:output message="tns:addAccountsResponse" name="addAccountsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addSMSDeliveries">
            <wsdl:input message="tns:addSMSDeliveries" name="addSMSDeliveries">
    </wsdl:input>
            <wsdl:output message="tns:addSMSDeliveriesResponse" name="addSMSDeliveriesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addHeaderFooters">
            <wsdl:input message="tns:addHeaderFooters" name="addHeaderFooters">
    </wsdl:input>
            <wsdl:output message="tns:addHeaderFootersResponse" name="addHeaderFootersResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addMessageRules">
            <wsdl:input message="tns:addMessageRules" name="addMessageRules">
    </wsdl:input>
            <wsdl:output message="tns:addMessageRulesResponse" name="addMessageRulesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addToSMSKeyword">
            <wsdl:input message="tns:addToSMSKeyword" name="addToSMSKeyword">
    </wsdl:input>
            <wsdl:output message="tns:addToSMSKeywordResponse" name="addToSMSKeywordResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="logout">
            <wsdl:input message="tns:logout" name="logout">
    </wsdl:input>
            <wsdl:output message="tns:logoutResponse" name="logoutResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readSMSKeywords">
            <wsdl:input message="tns:readSMSKeywords" name="readSMSKeywords">
    </wsdl:input>
            <wsdl:output message="tns:readSMSKeywordsResponse" name="readSMSKeywordsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addContentTags">
            <wsdl:input message="tns:addContentTags" name="addContentTags">
    </wsdl:input>
            <wsdl:output message="tns:addContentTagsResponse" name="addContentTagsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteMessageFolders">
            <wsdl:input message="tns:deleteMessageFolders" name="deleteMessageFolders">
    </wsdl:input>
            <wsdl:output message="tns:deleteMessageFoldersResponse" name="deleteMessageFoldersResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readWorkflows">
            <wsdl:input message="tns:readWorkflows" name="readWorkflows">
    </wsdl:input>
            <wsdl:output message="tns:readWorkflowsResponse" name="readWorkflowsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteMessages">
            <wsdl:input message="tns:deleteMessages" name="deleteMessages">
    </wsdl:input>
            <wsdl:output message="tns:deleteMessagesResponse" name="deleteMessagesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addMessageFolders">
            <wsdl:input message="tns:addMessageFolders" name="addMessageFolders">
    </wsdl:input>
            <wsdl:output message="tns:addMessageFoldersResponse" name="addMessageFoldersResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addContacts">
            <wsdl:input message="tns:addContacts" name="addContacts">
    </wsdl:input>
            <wsdl:output message="tns:addContactsResponse" name="addContactsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readLists">
            <wsdl:input message="tns:readLists" name="readLists">
    </wsdl:input>
            <wsdl:output message="tns:readListsResponse" name="readListsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="clearLists">
            <wsdl:input message="tns:clearLists" name="clearLists">
    </wsdl:input>
            <wsdl:output message="tns:clearListsResponse" name="clearListsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteDeliveries">
            <wsdl:input message="tns:deleteDeliveries" name="deleteDeliveries">
    </wsdl:input>
            <wsdl:output message="tns:deleteDeliveriesResponse" name="deleteDeliveriesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateContentTags">
            <wsdl:input message="tns:updateContentTags" name="updateContentTags">
    </wsdl:input>
            <wsdl:output message="tns:updateContentTagsResponse" name="updateContentTagsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteHeaderFooters">
            <wsdl:input message="tns:deleteHeaderFooters" name="deleteHeaderFooters">
    </wsdl:input>
            <wsdl:output message="tns:deleteHeaderFootersResponse" name="deleteHeaderFootersResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addDeliveries">
            <wsdl:input message="tns:addDeliveries" name="addDeliveries">
    </wsdl:input>
            <wsdl:output message="tns:addDeliveriesResponse" name="addDeliveriesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateMessages">
            <wsdl:input message="tns:updateMessages" name="updateMessages">
    </wsdl:input>
            <wsdl:output message="tns:updateMessagesResponse" name="updateMessagesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addConversion">
            <wsdl:input message="tns:addConversion" name="addConversion">
    </wsdl:input>
            <wsdl:output message="tns:addConversionResponse" name="addConversionResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readMessageFolders">
            <wsdl:input message="tns:readMessageFolders" name="readMessageFolders">
    </wsdl:input>
            <wsdl:output message="tns:readMessageFoldersResponse" name="readMessageFoldersResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addMessages">
            <wsdl:input message="tns:addMessages" name="addMessages">
    </wsdl:input>
            <wsdl:output message="tns:addMessagesResponse" name="addMessagesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readBounces">
            <wsdl:input message="tns:readBounces" name="readBounces">
    </wsdl:input>
            <wsdl:output message="tns:readBouncesResponse" name="readBouncesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="removeFromSMSKeyword">
            <wsdl:input message="tns:removeFromSMSKeyword" name="removeFromSMSKeyword">
    </wsdl:input>
            <wsdl:output message="tns:removeFromSMSKeywordResponse" name="removeFromSMSKeywordResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addDeliveryGroup">
            <wsdl:input message="tns:addDeliveryGroup" name="addDeliveryGroup">
    </wsdl:input>
            <wsdl:output message="tns:addDeliveryGroupResponse" name="addDeliveryGroupResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addUpdateOrder">
            <wsdl:input message="tns:addUpdateOrder" name="addUpdateOrder">
    </wsdl:input>
            <wsdl:output message="tns:addUpdateOrderResponse" name="addUpdateOrderResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readWebforms">
            <wsdl:input message="tns:readWebforms" name="readWebforms">
    </wsdl:input>
            <wsdl:output message="tns:readWebformsResponse" name="readWebformsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateSMSMessages">
            <wsdl:input message="tns:updateSMSMessages" name="updateSMSMessages">
    </wsdl:input>
            <wsdl:output message="tns:updateSMSMessagesResponse" name="updateSMSMessagesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="login">
            <wsdl:input message="tns:login" name="login">
    </wsdl:input>
            <wsdl:output message="tns:loginResponse" name="loginResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readSegmentsWithTotalCounts">
            <wsdl:input message="tns:readSegmentsWithTotalCounts" name="readSegmentsWithTotalCounts">
    </wsdl:input>
            <wsdl:output message="tns:readSegmentsWithTotalCountsResponse" name="readSegmentsWithTotalCountsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateAccounts">
            <wsdl:input message="tns:updateAccounts" name="updateAccounts">
    </wsdl:input>
            <wsdl:output message="tns:updateAccountsResponse" name="updateAccountsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readFields">
            <wsdl:input message="tns:readFields" name="readFields">
    </wsdl:input>
            <wsdl:output message="tns:readFieldsResponse" name="readFieldsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readSMSMessages">
            <wsdl:input message="tns:readSMSMessages" name="readSMSMessages">
    </wsdl:input>
            <wsdl:output message="tns:readSMSMessagesResponse" name="readSMSMessagesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteSMSDeliveries">
            <wsdl:input message="tns:deleteSMSDeliveries" name="deleteSMSDeliveries">
    </wsdl:input>
            <wsdl:output message="tns:deleteSMSDeliveriesResponse" name="deleteSMSDeliveriesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteLists">
            <wsdl:input message="tns:deleteLists" name="deleteLists">
    </wsdl:input>
            <wsdl:output message="tns:deleteListsResponse" name="deleteListsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteFields">
            <wsdl:input message="tns:deleteFields" name="deleteFields">
    </wsdl:input>
            <wsdl:output message="tns:deleteFieldsResponse" name="deleteFieldsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readConversions">
            <wsdl:input message="tns:readConversions" name="readConversions">
    </wsdl:input>
            <wsdl:output message="tns:readConversionsResponse" name="readConversionsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readDeliveryRecipients">
            <wsdl:input message="tns:readDeliveryRecipients" name="readDeliveryRecipients">
    </wsdl:input>
            <wsdl:output message="tns:readDeliveryRecipientsResponse" name="readDeliveryRecipientsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readLogins">
            <wsdl:input message="tns:readLogins" name="readLogins">
    </wsdl:input>
            <wsdl:output message="tns:readLoginsResponse" name="readLoginsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateDeliveryGroup">
            <wsdl:input message="tns:updateDeliveryGroup" name="updateDeliveryGroup">
    </wsdl:input>
            <wsdl:output message="tns:updateDeliveryGroupResponse" name="updateDeliveryGroupResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteSMSKeywords">
            <wsdl:input message="tns:deleteSMSKeywords" name="deleteSMSKeywords">
    </wsdl:input>
            <wsdl:output message="tns:deleteSMSKeywordsResponse" name="deleteSMSKeywordsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addFields">
            <wsdl:input message="tns:addFields" name="addFields">
    </wsdl:input>
            <wsdl:output message="tns:addFieldsResponse" name="addFieldsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateSMSKeywords">
            <wsdl:input message="tns:updateSMSKeywords" name="updateSMSKeywords">
    </wsdl:input>
            <wsdl:output message="tns:updateSMSKeywordsResponse" name="updateSMSKeywordsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateDeliveries">
            <wsdl:input message="tns:updateDeliveries" name="updateDeliveries">
    </wsdl:input>
            <wsdl:output message="tns:updateDeliveriesResponse" name="updateDeliveriesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateLists">
            <wsdl:input message="tns:updateLists" name="updateLists">
    </wsdl:input>
            <wsdl:output message="tns:updateListsResponse" name="updateListsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readContactsWithLatestUnsubscribeDate">
            <wsdl:input message="tns:readContactsWithLatestUnsubscribeDate" name="readContactsWithLatestUnsubscribeDate">
    </wsdl:input>
            <wsdl:output message="tns:readContactsWithLatestUnsubscribeDateResponse" name="readContactsWithLatestUnsubscribeDateResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteAccounts">
            <wsdl:input message="tns:deleteAccounts" name="deleteAccounts">
    </wsdl:input>
            <wsdl:output message="tns:deleteAccountsResponse" name="deleteAccountsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addToDeliveryGroup">
            <wsdl:input message="tns:addToDeliveryGroup" name="addToDeliveryGroup">
    </wsdl:input>
            <wsdl:output message="tns:addToDeliveryGroupResponse" name="addToDeliveryGroupResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addOrUpdateDeliveryGroup">
            <wsdl:input message="tns:addOrUpdateDeliveryGroup" name="addOrUpdateDeliveryGroup">
    </wsdl:input>
            <wsdl:output message="tns:addOrUpdateDeliveryGroupResponse" name="addOrUpdateDeliveryGroupResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateWorkflows">
            <wsdl:input message="tns:updateWorkflows" name="updateWorkflows">
    </wsdl:input>
            <wsdl:output message="tns:updateWorkflowsResponse" name="updateWorkflowsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addApiTokens">
            <wsdl:input message="tns:addApiTokens" name="addApiTokens">
    </wsdl:input>
            <wsdl:output message="tns:addApiTokensResponse" name="addApiTokensResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readSegments">
            <wsdl:input message="tns:readSegments" name="readSegments">
    </wsdl:input>
            <wsdl:output message="tns:readSegmentsResponse" name="readSegmentsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readDeliveryGroups">
            <wsdl:input message="tns:readDeliveryGroups" name="readDeliveryGroups">
    </wsdl:input>
            <wsdl:output message="tns:readDeliveryGroupsResponse" name="readDeliveryGroupsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addLogins">
            <wsdl:input message="tns:addLogins" name="addLogins">
    </wsdl:input>
            <wsdl:output message="tns:addLoginsResponse" name="addLoginsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addOrUpdateContactsIncremental">
            <wsdl:input message="tns:addOrUpdateContactsIncremental" name="addOrUpdateContactsIncremental">
    </wsdl:input>
            <wsdl:output message="tns:addOrUpdateContactsIncrementalResponse" name="addOrUpdateContactsIncrementalResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readContacts">
            <wsdl:input message="tns:readContacts" name="readContacts">
    </wsdl:input>
            <wsdl:output message="tns:readContactsResponse" name="readContactsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateLogins">
            <wsdl:input message="tns:updateLogins" name="updateLogins">
    </wsdl:input>
            <wsdl:output message="tns:updateLoginsResponse" name="updateLoginsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readRecentOutboundActivities">
            <wsdl:input message="tns:readRecentOutboundActivities" name="readRecentOutboundActivities">
    </wsdl:input>
            <wsdl:output message="tns:readRecentOutboundActivitiesResponse" name="readRecentOutboundActivitiesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addContactEvent">
            <wsdl:input message="tns:addContactEvent" name="addContactEvent">
    </wsdl:input>
            <wsdl:output message="tns:addContactEventResponse" name="addContactEventResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readApiTokens">
            <wsdl:input message="tns:readApiTokens" name="readApiTokens">
    </wsdl:input>
            <wsdl:output message="tns:readApiTokensResponse" name="readApiTokensResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readDeliveries">
            <wsdl:input message="tns:readDeliveries" name="readDeliveries">
    </wsdl:input>
            <wsdl:output message="tns:readDeliveriesResponse" name="readDeliveriesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateApiTokens">
            <wsdl:input message="tns:updateApiTokens" name="updateApiTokens">
    </wsdl:input>
            <wsdl:output message="tns:updateApiTokensResponse" name="updateApiTokensResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addWorkflows">
            <wsdl:input message="tns:addWorkflows" name="addWorkflows">
    </wsdl:input>
            <wsdl:output message="tns:addWorkflowsResponse" name="addWorkflowsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteWorkflows">
            <wsdl:input message="tns:deleteWorkflows" name="deleteWorkflows">
    </wsdl:input>
            <wsdl:output message="tns:deleteWorkflowsResponse" name="deleteWorkflowsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteContacts">
            <wsdl:input message="tns:deleteContacts" name="deleteContacts">
    </wsdl:input>
            <wsdl:output message="tns:deleteContactsResponse" name="deleteContactsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addToList">
            <wsdl:input message="tns:addToList" name="addToList">
    </wsdl:input>
            <wsdl:output message="tns:addToListResponse" name="addToListResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addSMSKeywords">
            <wsdl:input message="tns:addSMSKeywords" name="addSMSKeywords">
    </wsdl:input>
            <wsdl:output message="tns:addSMSKeywordsResponse" name="addSMSKeywordsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateSMSDeliveries">
            <wsdl:input message="tns:updateSMSDeliveries" name="updateSMSDeliveries">
    </wsdl:input>
            <wsdl:output message="tns:updateSMSDeliveriesResponse" name="updateSMSDeliveriesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateHeaderFooters">
            <wsdl:input message="tns:updateHeaderFooters" name="updateHeaderFooters">
    </wsdl:input>
            <wsdl:output message="tns:updateHeaderFootersResponse" name="updateHeaderFootersResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addContactsToWorkflow">
            <wsdl:input message="tns:addContactsToWorkflow" name="addContactsToWorkflow">
    </wsdl:input>
            <wsdl:output message="tns:addContactsToWorkflowResponse" name="addContactsToWorkflowResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateFields">
            <wsdl:input message="tns:updateFields" name="updateFields">
    </wsdl:input>
            <wsdl:output message="tns:updateFieldsResponse" name="updateFieldsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readAccounts">
            <wsdl:input message="tns:readAccounts" name="readAccounts">
    </wsdl:input>
            <wsdl:output message="tns:readAccountsResponse" name="readAccountsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteLogins">
            <wsdl:input message="tns:deleteLogins" name="deleteLogins">
    </wsdl:input>
            <wsdl:output message="tns:deleteLoginsResponse" name="deleteLoginsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readHeaderFooters">
            <wsdl:input message="tns:readHeaderFooters" name="readHeaderFooters">
    </wsdl:input>
            <wsdl:output message="tns:readHeaderFootersResponse" name="readHeaderFootersResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateMessageFolders">
            <wsdl:input message="tns:updateMessageFolders" name="updateMessageFolders">
    </wsdl:input>
            <wsdl:output message="tns:updateMessageFoldersResponse" name="updateMessageFoldersResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteMessageRules">
            <wsdl:input message="tns:deleteMessageRules" name="deleteMessageRules">
    </wsdl:input>
            <wsdl:output message="tns:deleteMessageRulesResponse" name="deleteMessageRulesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readSMSDeliveries">
            <wsdl:input message="tns:readSMSDeliveries" name="readSMSDeliveries">
    </wsdl:input>
            <wsdl:output message="tns:readSMSDeliveriesResponse" name="readSMSDeliveriesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readRecentInboundActivities">
            <wsdl:input message="tns:readRecentInboundActivities" name="readRecentInboundActivities">
    </wsdl:input>
            <wsdl:output message="tns:readRecentInboundActivitiesResponse" name="readRecentInboundActivitiesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteOrders">
            <wsdl:input message="tns:deleteOrders" name="deleteOrders">
    </wsdl:input>
            <wsdl:output message="tns:deleteOrdersResponse" name="deleteOrdersResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteApiTokens">
            <wsdl:input message="tns:deleteApiTokens" name="deleteApiTokens">
    </wsdl:input>
            <wsdl:output message="tns:deleteApiTokensResponse" name="deleteApiTokensResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readMessageRules">
            <wsdl:input message="tns:readMessageRules" name="readMessageRules">
    </wsdl:input>
            <wsdl:output message="tns:readMessageRulesResponse" name="readMessageRulesResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="removeFromList">
            <wsdl:input message="tns:removeFromList" name="removeFromList">
    </wsdl:input>
            <wsdl:output message="tns:removeFromListResponse" name="removeFromListResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteFromDeliveryGroup">
            <wsdl:input message="tns:deleteFromDeliveryGroup" name="deleteFromDeliveryGroup">
    </wsdl:input>
            <wsdl:output message="tns:deleteFromDeliveryGroupResponse" name="deleteFromDeliveryGroupResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readContentTags">
            <wsdl:input message="tns:readContentTags" name="readContentTags">
    </wsdl:input>
            <wsdl:output message="tns:readContentTagsResponse" name="readContentTagsResponse">
    </wsdl:output>
            <wsdl:fault message="tns:ApiException" name="ApiException">
    </wsdl:fault>
        </wsdl:operation>
    </wsdl:portType>
    <wsdl:binding name="BrontoSoapApiImplServiceSoapBinding" type="tns:BrontoSoapPortType">
        <soap:binding style="document" transport="http://schemas.xmlsoap.org/soap/http"/>
        <wsdl:operation name="updateContacts">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="updateContacts">
                <soap:header message="tns:updateContacts" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="updateContactsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readMessages">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readMessages">
                <soap:header message="tns:readMessages" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readMessagesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteSMSMessages">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="deleteSMSMessages">
                <soap:header message="tns:deleteSMSMessages" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="deleteSMSMessagesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addOrUpdateContacts">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addOrUpdateContacts">
                <soap:header message="tns:addOrUpdateContacts" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addOrUpdateContactsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addOrUpdateOrders">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addOrUpdateOrders">
                <soap:header message="tns:addOrUpdateOrders" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addOrUpdateOrdersResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addLists">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addLists">
                <soap:header message="tns:addLists" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addListsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readUnsubscribes">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readUnsubscribes">
                <soap:header message="tns:readUnsubscribes" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readUnsubscribesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addSMSMessages">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addSMSMessages">
                <soap:header message="tns:addSMSMessages" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addSMSMessagesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteDeliveryGroup">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="deleteDeliveryGroup">
                <soap:header message="tns:deleteDeliveryGroup" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="deleteDeliveryGroupResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readActivities">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readActivities">
                <soap:header message="tns:readActivities" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readActivitiesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateMessageRules">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="updateMessageRules">
                <soap:header message="tns:updateMessageRules" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="updateMessageRulesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteContentTags">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="deleteContentTags">
                <soap:header message="tns:deleteContentTags" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="deleteContentTagsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addAccounts">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addAccounts">
                <soap:header message="tns:addAccounts" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addAccountsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addSMSDeliveries">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addSMSDeliveries">
                <soap:header message="tns:addSMSDeliveries" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addSMSDeliveriesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addHeaderFooters">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addHeaderFooters">
                <soap:header message="tns:addHeaderFooters" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addHeaderFootersResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addMessageRules">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addMessageRules">
                <soap:header message="tns:addMessageRules" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addMessageRulesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addToSMSKeyword">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addToSMSKeyword">
                <soap:header message="tns:addToSMSKeyword" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addToSMSKeywordResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="logout">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="logout">
                <soap:header message="tns:logout" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="logoutResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readSMSKeywords">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readSMSKeywords">
                <soap:header message="tns:readSMSKeywords" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readSMSKeywordsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addContentTags">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addContentTags">
                <soap:header message="tns:addContentTags" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addContentTagsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteMessageFolders">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="deleteMessageFolders">
                <soap:header message="tns:deleteMessageFolders" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="deleteMessageFoldersResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readWorkflows">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readWorkflows">
                <soap:header message="tns:readWorkflows" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readWorkflowsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteMessages">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="deleteMessages">
                <soap:header message="tns:deleteMessages" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="deleteMessagesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addMessageFolders">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addMessageFolders">
                <soap:header message="tns:addMessageFolders" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addMessageFoldersResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addContacts">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addContacts">
                <soap:header message="tns:addContacts" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addContactsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readLists">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readLists">
                <soap:header message="tns:readLists" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readListsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="clearLists">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="clearLists">
                <soap:header message="tns:clearLists" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="clearListsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteDeliveries">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="deleteDeliveries">
                <soap:header message="tns:deleteDeliveries" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="deleteDeliveriesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateContentTags">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="updateContentTags">
                <soap:header message="tns:updateContentTags" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="updateContentTagsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteHeaderFooters">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="deleteHeaderFooters">
                <soap:header message="tns:deleteHeaderFooters" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="deleteHeaderFootersResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addDeliveries">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addDeliveries">
                <soap:header message="tns:addDeliveries" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addDeliveriesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateMessages">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="updateMessages">
                <soap:header message="tns:updateMessages" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="updateMessagesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addConversion">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addConversion">
                <soap:header message="tns:addConversion" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addConversionResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readMessageFolders">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readMessageFolders">
                <soap:header message="tns:readMessageFolders" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readMessageFoldersResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addMessages">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addMessages">
                <soap:header message="tns:addMessages" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addMessagesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readBounces">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readBounces">
                <soap:header message="tns:readBounces" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readBouncesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="removeFromSMSKeyword">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="removeFromSMSKeyword">
                <soap:header message="tns:removeFromSMSKeyword" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="removeFromSMSKeywordResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addDeliveryGroup">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addDeliveryGroup">
                <soap:header message="tns:addDeliveryGroup" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addDeliveryGroupResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addUpdateOrder">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addUpdateOrder">
                <soap:header message="tns:addUpdateOrder" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addUpdateOrderResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readWebforms">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readWebforms">
                <soap:header message="tns:readWebforms" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readWebformsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateSMSMessages">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="updateSMSMessages">
                <soap:header message="tns:updateSMSMessages" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="updateSMSMessagesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="login">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="login">
                <soap:body use="literal"/>
            </wsdl:input>
            <wsdl:output name="loginResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readSegmentsWithTotalCounts">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readSegmentsWithTotalCounts">
                <soap:header message="tns:readSegmentsWithTotalCounts" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readSegmentsWithTotalCountsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateAccounts">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="updateAccounts">
                <soap:header message="tns:updateAccounts" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="updateAccountsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readFields">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readFields">
                <soap:header message="tns:readFields" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readFieldsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readSMSMessages">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readSMSMessages">
                <soap:header message="tns:readSMSMessages" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readSMSMessagesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteSMSDeliveries">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="deleteSMSDeliveries">
                <soap:header message="tns:deleteSMSDeliveries" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="deleteSMSDeliveriesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteLists">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="deleteLists">
                <soap:header message="tns:deleteLists" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="deleteListsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteFields">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="deleteFields">
                <soap:header message="tns:deleteFields" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="deleteFieldsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readConversions">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readConversions">
                <soap:header message="tns:readConversions" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readConversionsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readDeliveryRecipients">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readDeliveryRecipients">
                <soap:header message="tns:readDeliveryRecipients" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readDeliveryRecipientsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readLogins">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readLogins">
                <soap:header message="tns:readLogins" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readLoginsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateDeliveryGroup">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="updateDeliveryGroup">
                <soap:header message="tns:updateDeliveryGroup" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="updateDeliveryGroupResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteSMSKeywords">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="deleteSMSKeywords">
                <soap:header message="tns:deleteSMSKeywords" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="deleteSMSKeywordsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addFields">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addFields">
                <soap:header message="tns:addFields" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addFieldsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateSMSKeywords">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="updateSMSKeywords">
                <soap:header message="tns:updateSMSKeywords" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="updateSMSKeywordsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateDeliveries">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="updateDeliveries">
                <soap:header message="tns:updateDeliveries" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="updateDeliveriesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateLists">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="updateLists">
                <soap:header message="tns:updateLists" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="updateListsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readContactsWithLatestUnsubscribeDate">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readContactsWithLatestUnsubscribeDate">
                <soap:header message="tns:readContactsWithLatestUnsubscribeDate" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readContactsWithLatestUnsubscribeDateResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteAccounts">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="deleteAccounts">
                <soap:header message="tns:deleteAccounts" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="deleteAccountsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addToDeliveryGroup">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addToDeliveryGroup">
                <soap:header message="tns:addToDeliveryGroup" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addToDeliveryGroupResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addOrUpdateDeliveryGroup">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addOrUpdateDeliveryGroup">
                <soap:header message="tns:addOrUpdateDeliveryGroup" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addOrUpdateDeliveryGroupResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateWorkflows">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="updateWorkflows">
                <soap:header message="tns:updateWorkflows" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="updateWorkflowsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addApiTokens">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addApiTokens">
                <soap:header message="tns:addApiTokens" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addApiTokensResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readSegments">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readSegments">
                <soap:header message="tns:readSegments" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readSegmentsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readDeliveryGroups">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readDeliveryGroups">
                <soap:header message="tns:readDeliveryGroups" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readDeliveryGroupsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addLogins">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addLogins">
                <soap:header message="tns:addLogins" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addLoginsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addOrUpdateContactsIncremental">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addOrUpdateContactsIncremental">
                <soap:header message="tns:addOrUpdateContactsIncremental" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addOrUpdateContactsIncrementalResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readContacts">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readContacts">
                <soap:header message="tns:readContacts" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readContactsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateLogins">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="updateLogins">
                <soap:header message="tns:updateLogins" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="updateLoginsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readRecentOutboundActivities">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readRecentOutboundActivities">
                <soap:header message="tns:readRecentOutboundActivities" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readRecentOutboundActivitiesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addContactEvent">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addContactEvent">
                <soap:header message="tns:addContactEvent" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addContactEventResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readApiTokens">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readApiTokens">
                <soap:header message="tns:readApiTokens" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readApiTokensResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readDeliveries">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readDeliveries">
                <soap:header message="tns:readDeliveries" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readDeliveriesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateApiTokens">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="updateApiTokens">
                <soap:header message="tns:updateApiTokens" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="updateApiTokensResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addWorkflows">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addWorkflows">
                <soap:header message="tns:addWorkflows" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addWorkflowsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteWorkflows">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="deleteWorkflows">
                <soap:header message="tns:deleteWorkflows" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="deleteWorkflowsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteContacts">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="deleteContacts">
                <soap:header message="tns:deleteContacts" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="deleteContactsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addToList">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addToList">
                <soap:header message="tns:addToList" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addToListResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addSMSKeywords">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addSMSKeywords">
                <soap:header message="tns:addSMSKeywords" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addSMSKeywordsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateSMSDeliveries">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="updateSMSDeliveries">
                <soap:header message="tns:updateSMSDeliveries" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="updateSMSDeliveriesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateHeaderFooters">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="updateHeaderFooters">
                <soap:header message="tns:updateHeaderFooters" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="updateHeaderFootersResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="addContactsToWorkflow">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="addContactsToWorkflow">
                <soap:header message="tns:addContactsToWorkflow" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="addContactsToWorkflowResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateFields">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="updateFields">
                <soap:header message="tns:updateFields" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="updateFieldsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readAccounts">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readAccounts">
                <soap:header message="tns:readAccounts" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readAccountsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteLogins">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="deleteLogins">
                <soap:header message="tns:deleteLogins" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="deleteLoginsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readHeaderFooters">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readHeaderFooters">
                <soap:header message="tns:readHeaderFooters" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readHeaderFootersResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="updateMessageFolders">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="updateMessageFolders">
                <soap:header message="tns:updateMessageFolders" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="updateMessageFoldersResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteMessageRules">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="deleteMessageRules">
                <soap:header message="tns:deleteMessageRules" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="deleteMessageRulesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readSMSDeliveries">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readSMSDeliveries">
                <soap:header message="tns:readSMSDeliveries" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readSMSDeliveriesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readRecentInboundActivities">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readRecentInboundActivities">
                <soap:header message="tns:readRecentInboundActivities" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readRecentInboundActivitiesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteOrders">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="deleteOrders">
                <soap:header message="tns:deleteOrders" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="deleteOrdersResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteApiTokens">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="deleteApiTokens">
                <soap:header message="tns:deleteApiTokens" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="deleteApiTokensResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readMessageRules">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readMessageRules">
                <soap:header message="tns:readMessageRules" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readMessageRulesResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="removeFromList">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="removeFromList">
                <soap:header message="tns:removeFromList" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="removeFromListResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="deleteFromDeliveryGroup">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="deleteFromDeliveryGroup">
                <soap:header message="tns:deleteFromDeliveryGroup" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="deleteFromDeliveryGroupResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
        <wsdl:operation name="readContentTags">
            <soap:operation soapAction="" style="document"/>
            <wsdl:input name="readContentTags">
                <soap:header message="tns:readContentTags" part="sessionHeader" use="literal">
        </soap:header>
                <soap:body parts="parameters" use="literal"/>
            </wsdl:input>
            <wsdl:output name="readContentTagsResponse">
                <soap:body use="literal"/>
            </wsdl:output>
            <wsdl:fault name="ApiException">
                <soap:fault name="ApiException" use="literal"/>
            </wsdl:fault>
        </wsdl:operation>
    </wsdl:binding>
    <wsdl:service name="BrontoSoapApiImplService">
        <wsdl:port binding="tns:BrontoSoapApiImplServiceSoapBinding" name="BrontoSoapApiImplPort">
            <soap:address location="https://api.bronto.com/v4/"/>
        </wsdl:port>
    </wsdl:service>
</wsdl:definitions>
`