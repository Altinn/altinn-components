import{S as r}from"./Handshake-C2wVIX4_.js";import{S as i}from"./Bell-DUB8E5rY.js";import{S as o}from"./Hashtag-C1LhkJ9z.js";import{S as s}from"./Person-RZj66pX4.js";import{a as l,b as g,S as p}from"./Paperplane-DlC70B_t.js";import{A as m}from"./AccountListItemDetails-DFCPnynV.js";import"./iframe-CZm9Z2L_.js";import"./preload-helper-Cc2_yIPf.js";import"./Section-z-IVKGiV.js";import"./Flex-piEowcmm.js";import"./ButtonGroup-7aJoGw6J.js";import"./List-DQWfOE6F.js";import"./ListItem-DzMq7FBw.js";import"./Input-BcwXpX3S.js";import"./Avatar-BfR_UP2W.js";import"./AvatarGroup-z1q2Yw0e.js";import"./Badge-DcBwCaoO.js";import"./Tooltip-CnehfAFo.js";import"./Heading-CGvkj5VV.js";import"./useHighlightedText-0BBntNc4.js";import"./ChevronUp-CIHpYQBC.js";import"./ChevronDown-Bb4C_BOJ.js";import"./ChevronRight-MmDri0bt.js";import"./Divider-qPWkBqr9.js";import"./SettingsItem-tFT6qvjm.js";import"./SettingsItemBase-yCvB55PI.js";import"./ItemMedia-CpjA7nnT.js";import"./ItemBase-CcZPPggP.js";import"./ItemLink-u7oYbdQM.js";import"./ItemControls-1WPti-Pt.js";import"./Typography-99BUGcV3.js";import"./SettingsModal-C4kkBz7a.js";import"./ModalBody-B6uDomnX.js";import"./ButtonIcon-C0K5IRwl.js";import"./ButtonLabel-CupeExgA.js";import"./AccountOrganization-CfXQaF7F.js";import"./Byline-BnpbJ8kJ.js";const N={title:"Account/AccountListItemDetails",component:m,tags:["autodocs"],parameters:{},args:{buttons:[{label:"Gå til innboks",variant:"outline"},{label:"Tilgangsstyring",variant:"outline"}]}},e={args:{settings:[{id:"1",title:"Mobiltelefon",value:"+47 123 45 678",icon:l,linkIcon:!0,badge:{variant:"text",label:"Endre"}},{id:"2",title:"E-postadresse",value:"mathias@brann.no",icon:g,linkIcon:!0,badge:{variant:"text",label:"Endre"}},{id:"3",title:"Adresse",value:"Inndalsveien 28, 5063 Bergen",icon:p,linkIcon:!0,badge:{variant:"text",label:"Endre"}}]}},t={args:{settings:[{id:"1",title:"Rolle og tilganger",value:"Ektefelle",badge:{label:"2 tilganger"},icon:r,linkIcon:!0},{id:"2",title:"Varslinger er på",value:"mathias@brann.no, +47 123 45 678",badge:{label:"SMS og e-post"},icon:i,linkIcon:!0},{id:"3",title:"Fødselsnummer",value:"XXXXXX YYYY",icon:s}]}},n={args:{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:r,linkIcon:!0},{id:"2",title:"Ingen varslinger",icon:i,badge:{variant:"text",label:"Legg til"},linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:o}]}},a={args:{...n.args,organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},items:[{selected:!0,title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}},{title:"Sporting Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Sporting Bergensis",variant:"outline"}},{title:"Glasgow Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Glasgow  Bergensis",variant:"outline"}}]}]}},Q=["UserSettings","PersonSettings","CompanySettings","OrganizationSettings"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};export{n as CompanySettings,a as OrganizationSettings,t as PersonSettings,e as UserSettings,Q as __namedExportsOrder,N as default};
