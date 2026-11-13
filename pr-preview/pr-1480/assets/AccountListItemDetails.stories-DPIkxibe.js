import{S as r}from"./Handshake-DmHNly49.js";import{S as i}from"./Bell-q-HOnHBl.js";import{S as o}from"./Hashtag-CzhgaB8J.js";import{S as s}from"./Person-BizlEoGD.js";import{a as l,b as g,S as p}from"./Paperplane-BZLX9zpj.js";import{A as c}from"./AccountListItemDetails-4Z9eOXJQ.js";import"./iframe-r-PzxnFG.js";import"./preload-helper-Cc2_yIPf.js";import"./Section-DH0F_yu4.js";import"./Flex-DRLqoZbu.js";import"./ButtonGroup-tpSmkUGs.js";import"./List-DKe_PVra.js";import"./ListItem-SAy6Qdz6.js";import"./Input-BYbvd3yE.js";import"./Avatar-Dzc1_6Ua.js";import"./AvatarGroup-D0dlHClc.js";import"./Badge-CQlPkK8J.js";import"./Tooltip-B_Gc3g4S.js";import"./Heading-qFKPv3xm.js";import"./useHighlightedText-D1CHWYs6.js";import"./ChevronUp-B0s8dawY.js";import"./ChevronDown-BD5i-hxE.js";import"./ChevronRight-DoF3revo.js";import"./Divider-Cj6losdy.js";import"./SettingsItem-DxXxFwXC.js";import"./SettingsItemBase-YCR0c7jg.js";import"./ItemMedia-BFk5syHA.js";import"./ItemBase-CTpIDqLP.js";import"./ItemLink-BAk2uFkE.js";import"./ItemControls-Di1aFGjk.js";import"./Typography-DZA02yZr.js";import"./SettingsModal-BdZ7Q-Ay.js";import"./ModalBody-B-L7EXsI.js";import"./ButtonLabel-DKmNFHli.js";import"./AccountOrganization-CYlWu3xA.js";import"./Byline-Cm30yNti.js";const K={title:"Account/AccountListItemDetails",component:c,tags:["autodocs"],parameters:{},args:{buttons:[{label:"Gå til innboks",variant:"outline"},{label:"Tilgangsstyring",variant:"outline"}]}},e={args:{settings:[{id:"1",title:"Mobiltelefon",value:"+47 123 45 678",icon:l,linkIcon:!0,badge:{variant:"text",label:"Endre"}},{id:"2",title:"E-postadresse",value:"mathias@brann.no",icon:g,linkIcon:!0,badge:{variant:"text",label:"Endre"}},{id:"3",title:"Adresse",value:"Inndalsveien 28, 5063 Bergen",icon:p,linkIcon:!0,badge:{variant:"text",label:"Endre"}}]}},t={args:{settings:[{id:"1",title:"Rolle og tilganger",value:"Ektefelle",badge:{label:"2 tilganger"},icon:r,linkIcon:!0},{id:"2",title:"Varslinger er på",value:"mathias@brann.no, +47 123 45 678",badge:{label:"SMS og e-post"},icon:i,linkIcon:!0},{id:"3",title:"Fødselsnummer",value:"XXXXXX YYYY",icon:s}]}},n={args:{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:r,linkIcon:!0},{id:"2",title:"Ingen varslinger",icon:i,badge:{variant:"text",label:"Legg til"},linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:o}]}},a={args:{...n.args,organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},items:[{selected:!0,title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}},{title:"Sporting Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Sporting Bergensis",variant:"outline"}},{title:"Glasgow Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Glasgow  Bergensis",variant:"outline"}}]}]}},N=["UserSettings","PersonSettings","CompanySettings","OrganizationSettings"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};export{n as CompanySettings,a as OrganizationSettings,t as PersonSettings,e as UserSettings,N as __namedExportsOrder,K as default};
