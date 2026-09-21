import{S as r}from"./Handshake-CUMDVHsE.js";import{S as i}from"./Bell-CbTQdXEK.js";import{S as o}from"./Hashtag-BsLfUqvS.js";import{S as s}from"./Person-CJaUMIJA.js";import{a as l,b as g,S as p}from"./Paperplane-Dvr06TlN.js";import{A as m}from"./AccountListItemDetails-CbBseIpB.js";import"./iframe-DJfn40-D.js";import"./preload-helper-PPVm8Dsz.js";import"./Section-DRGrLW1j.js";import"./Flex-BuCXAFdl.js";import"./ButtonGroup-HFpGrSBK.js";import"./List-BVuaqhLj.js";import"./ListItem-BIpR7yvi.js";import"./Input-1D4-_m0T.js";import"./Avatar-DCvRzqvr.js";import"./AvatarGroup-3CBvuGfY.js";import"./Badge-DwpsZD4L.js";import"./Tooltip-D_0KZq3E.js";import"./Heading-DGmFcP6K.js";import"./useHighlightedText-Bup2uSoT.js";import"./ChevronUp-CDdzZBKT.js";import"./ChevronDown-D_48qJ0I.js";import"./ChevronRight-DB6kCZkt.js";import"./Divider-lqGtvfjN.js";import"./SettingsItem-xZt3vKpD.js";import"./SettingsItemBase-Dvp7GxLZ.js";import"./ItemMedia-KuTtS6so.js";import"./ItemBase-BZeziJXo.js";import"./ItemLink-DnwAIVP3.js";import"./ItemControls-fheO_qcA.js";import"./Typography-XfwuV3u8.js";import"./SettingsModal-D-UeQJQp.js";import"./ModalBody-byCqzvmH.js";import"./ButtonIcon-C08Tz3FQ.js";import"./ButtonLabel-D0AuKm4B.js";import"./AccountOrganization-BG_V5l-f.js";import"./Byline-BukN8tD1.js";const N={title:"Account/AccountListItemDetails",component:m,tags:["autodocs"],parameters:{},args:{buttons:[{label:"Gå til innboks",variant:"outline"},{label:"Tilgangsstyring",variant:"outline"}]}},e={args:{settings:[{id:"1",title:"Mobiltelefon",value:"+47 123 45 678",icon:l,linkIcon:!0,badge:{variant:"text",label:"Endre"}},{id:"2",title:"E-postadresse",value:"mathias@brann.no",icon:g,linkIcon:!0,badge:{variant:"text",label:"Endre"}},{id:"3",title:"Adresse",value:"Inndalsveien 28, 5063 Bergen",icon:p,linkIcon:!0,badge:{variant:"text",label:"Endre"}}]}},t={args:{settings:[{id:"1",title:"Rolle og tilganger",value:"Ektefelle",badge:{label:"2 tilganger"},icon:r,linkIcon:!0},{id:"2",title:"Varslinger er på",value:"mathias@brann.no, +47 123 45 678",badge:{label:"SMS og e-post"},icon:i,linkIcon:!0},{id:"3",title:"Fødselsnummer",value:"XXXXXX YYYY",icon:s}]}},n={args:{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:r,linkIcon:!0},{id:"2",title:"Ingen varslinger",icon:i,badge:{variant:"text",label:"Legg til"},linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:o}]}},a={args:{...n.args,organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},items:[{selected:!0,title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}},{title:"Sporting Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Sporting Bergensis",variant:"outline"}},{title:"Glasgow Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Glasgow  Bergensis",variant:"outline"}}]}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Q=["UserSettings","PersonSettings","CompanySettings","OrganizationSettings"];export{n as CompanySettings,a as OrganizationSettings,t as PersonSettings,e as UserSettings,Q as __namedExportsOrder,N as default};
