import{S as r}from"./Handshake-B9Srco_e.js";import{S as i}from"./Bell-BxMR10SR.js";import{S as o}from"./Hashtag-De8rdxxb.js";import{S as s}from"./Person-C88XBsAW.js";import{a as l,b as g,S as p}from"./Paperplane-DMRhXtsQ.js";import{A as m}from"./AccountListItemDetails-DrTqd2g2.js";import"./iframe-WHERbRNQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BfbJ7PbP.js";import"./Section-D-Yeh31t.js";import"./index-CPQpJFkN.js";import"./Flex-DJNl6q2s.js";import"./ButtonGroup-BZN8TM8O.js";import"./Button-DkTjWAj1.js";import"./tooltip-C7TGaz5I.js";import"./List-D4V152hW.js";import"./ListItem-DNg50TZS.js";import"./Input-D2AEap14.js";import"./XMark-5kXogJ_J.js";import"./Icon-jpLauUO9.js";import"./Skeleton-rNcUZaAx.js";import"./Avatar-BsRLrsxS.js";import"./AvatarGroup-Bo3l1p7S.js";import"./Badge-DPxfDcUM.js";import"./Tooltip-C3iERcDF.js";import"./Heading-POmwd9W2.js";import"./useHighlightedText-CCsQk8zm.js";import"./ChevronUp-BIOdACnc.js";import"./ChevronDown-DWIhSCAm.js";import"./ChevronRight-HD9xUhWG.js";import"./Divider-BWARbb1_.js";import"./SettingsItem-CgOb41Ez.js";import"./SettingsItemBase-DLWRfTF4.js";import"./ItemMedia-CZ4j0uoG.js";import"./ItemBase-BC1KuoSI.js";import"./ItemLink-Bc2_vK4_.js";import"./ItemControls-CXMEe70O.js";import"./Typography-CVWBmure.js";import"./SettingsModal-Cgo4pod6.js";import"./ModalBody-7W0CxkDb.js";import"./ButtonIcon-Dpjnx9Q5.js";import"./ButtonLabel-DaknUBOb.js";import"./AccountOrganization-D4p91mig.js";import"./Byline-CDFoh2Gc.js";const tn={title:"Account/AccountListItemDetails",component:m,tags:["autodocs"],parameters:{},args:{buttons:[{label:"Gå til innboks",variant:"outline"},{label:"Tilgangsstyring",variant:"outline"}]}},e={args:{settings:[{id:"1",title:"Mobiltelefon",value:"+47 123 45 678",icon:l,linkIcon:!0,badge:{variant:"text",label:"Endre"}},{id:"2",title:"E-postadresse",value:"mathias@brann.no",icon:g,linkIcon:!0,badge:{variant:"text",label:"Endre"}},{id:"3",title:"Adresse",value:"Inndalsveien 28, 5063 Bergen",icon:p,linkIcon:!0,badge:{variant:"text",label:"Endre"}}]}},t={args:{settings:[{id:"1",title:"Rolle og tilganger",value:"Ektefelle",badge:{label:"2 tilganger"},icon:r,linkIcon:!0},{id:"2",title:"Varslinger er på",value:"mathias@brann.no, +47 123 45 678",badge:{label:"SMS og e-post"},icon:i,linkIcon:!0},{id:"3",title:"Fødselsnummer",value:"XXXXXX YYYY",icon:s}]}},n={args:{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:r,linkIcon:!0},{id:"2",title:"Ingen varslinger",icon:i,badge:{variant:"text",label:"Legg til"},linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:o}]}},a={args:{...n.args,organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},items:[{selected:!0,title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}},{title:"Sporting Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Sporting Bergensis",variant:"outline"}},{title:"Glasgow Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Glasgow  Bergensis",variant:"outline"}}]}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    settings: [{
      id: '1',
      title: 'Mobiltelefon',
      value: '+47 123 45 678',
      icon: MobileIcon,
      linkIcon: true,
      badge: {
        variant: 'text',
        label: 'Endre'
      }
    }, {
      id: '2',
      title: 'E-postadresse',
      value: 'mathias@brann.no',
      icon: PaperplaneIcon,
      linkIcon: true,
      badge: {
        variant: 'text',
        label: 'Endre'
      }
    }, {
      id: '3',
      title: 'Adresse',
      value: 'Inndalsveien 28, 5063 Bergen',
      icon: HouseHeartIcon,
      linkIcon: true,
      badge: {
        variant: 'text',
        label: 'Endre'
      }
    }]
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    settings: [{
      id: '1',
      title: 'Rolle og tilganger',
      value: 'Ektefelle',
      badge: {
        label: '2 tilganger'
      },
      icon: HandshakeIcon,
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger er på',
      value: 'mathias@brann.no, +47 123 45 678',
      badge: {
        label: 'SMS og e-post'
      },
      icon: BellIcon,
      linkIcon: true
    }, {
      id: '3',
      title: 'Fødselsnummer',
      value: 'XXXXXX YYYY',
      icon: PersonIcon
    }]
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    settings: [{
      id: '1',
      title: 'Rolle og tilganger',
      value: 'Daglig leder',
      badge: {
        label: '4 tilganger'
      },
      icon: HandshakeIcon,
      linkIcon: true
    }, {
      id: '2',
      title: 'Ingen varslinger',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Legg til'
      },
      linkIcon: true
    }, {
      id: '3',
      title: 'Organisasjonsnummer',
      value: 'XXX XXX XXX',
      icon: HashtagIcon
    }]
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...CompanySettings.args,
    organization: [{
      title: 'Diaspora Bergensis',
      description: 'Org nr. 928914038',
      avatar: {
        type: 'company',
        name: 'Diaspora Bergensis'
      },
      items: [{
        selected: true,
        title: 'Diaspora Bergensis',
        description: 'Org nr. 928914038',
        avatar: {
          type: 'company',
          name: 'Diaspora Bergensis',
          variant: 'outline'
        }
      }, {
        title: 'Sporting Bergensis',
        description: 'Org nr. 928914038',
        avatar: {
          type: 'company',
          name: 'Sporting Bergensis',
          variant: 'outline'
        }
      }, {
        title: 'Glasgow Bergensis',
        description: 'Org nr. 928914038',
        avatar: {
          type: 'company',
          name: 'Glasgow  Bergensis',
          variant: 'outline'
        }
      }]
    }]
  }
}`,...a.parameters?.docs?.source}}};const an=["UserSettings","PersonSettings","CompanySettings","OrganizationSettings"];export{n as CompanySettings,a as OrganizationSettings,t as PersonSettings,e as UserSettings,an as __namedExportsOrder,tn as default};
