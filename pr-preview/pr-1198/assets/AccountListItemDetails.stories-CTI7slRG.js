"use client";import{S as d,a as u,b as v}from"./Paperplane-06PQ1TjT.js";import{S as c}from"./Handshake-I1zLCPee.js";import{S as m}from"./Bell-CTzeWleD.js";import{r as b,b as p}from"./iframe-CbC-fLaY.js";import{u as I}from"./useId-C2JQsT24.js";import{S}from"./Hashtag-BO0vihmc.js";import{A as f}from"./AccountListItemDetails-CKvIC-ki.js";import"./preload-helper-PPVm8Dsz.js";import"./Section-DypEBfCX.js";import"./index-Ds9VDGIC.js";import"./Flex-DahTG4Th.js";import"./ButtonGroup-BE0BnYMw.js";import"./Button-B0m1rUs2.js";import"./tooltip-BtbQ4KG6.js";import"./List-DoiqK_JD.js";import"./ListItem-CnbC7rOU.js";import"./Input-BNbo7Vjn.js";import"./XMark-DvUzU3_h.js";import"./Icon-DW3Nd0-m.js";import"./Skeleton-D8kEQByH.js";import"./Avatar-CmrLTlqi.js";import"./AvatarGroup-CtTcTi_X.js";import"./Badge-BwpPXd0u.js";import"./Tooltip-BulSRtpn.js";import"./Heading-Bl7p7Gle.js";import"./useHighlightedText-BssbQrxH.js";import"./ChevronUp-CU6zrkOY.js";import"./ChevronDown-abcxRNtY.js";import"./ChevronRight-CThQJEOF.js";import"./Divider-BLGF5SlA.js";import"./SettingsItem-D_kPG1xK.js";import"./SettingsItemBase-CPLBMCbD.js";import"./ItemLink-BLkR3G3D.js";import"./ItemMedia-CsSXB_1W.js";import"./ItemControls-gQT1qCQ5.js";import"./Typography-BWnrNFau.js";import"./SettingsModal-CMK7iPDJ.js";import"./ModalBody-Ce5L1hlw.js";import"./ButtonIcon-DWUAaYBn.js";import"./ButtonLabel-D9GeETuC.js";import"./AccountOrganization-BN8loGln.js";import"./Byline-BrWvWbOl.js";var y=function(n,i){var r={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&i.indexOf(e)<0&&(r[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(r[e[t]]=n[e[t]]);return r};const X=b.forwardRef((n,i)=>{var{title:r,titleId:e}=n,t=y(n,["title","titleId"]);let o=I();return o=r?e||"title-"+o:void 0,p.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},t),r?p.createElement("title",{id:o},r):null,p.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M8.25 7.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M8.288 17.288A5.25 5.25 0 0 1 17.25 21a.75.75 0 0 0 1.5 0 6.75 6.75 0 0 0-13.5 0 .75.75 0 0 0 1.5 0 5.25 5.25 0 0 1 1.538-3.712",clipRule:"evenodd"}))}),pe={title:"Account/AccountListItemDetails",component:f,tags:["autodocs"],parameters:{},args:{buttons:[{label:"Gå til innboks",variant:"outline"},{label:"Tilgangsstyring",variant:"outline"}]}},s={args:{settings:[{id:"1",title:"Mobiltelefon",value:"+47 123 45 678",icon:d,linkIcon:!0,badge:{variant:"text",label:"Endre"}},{id:"2",title:"E-postadresse",value:"mathias@brann.no",icon:u,linkIcon:!0,badge:{variant:"text",label:"Endre"}},{id:"3",title:"Adresse",value:"Inndalsveien 28, 5063 Bergen",icon:v,linkIcon:!0,badge:{variant:"text",label:"Endre"}}]}},l={args:{settings:[{id:"1",title:"Rolle og tilganger",value:"Ektefelle",badge:{label:"2 tilganger"},icon:c,linkIcon:!0},{id:"2",title:"Varslinger er på",value:"mathias@brann.no, +47 123 45 678",badge:{label:"SMS og e-post"},icon:m,linkIcon:!0},{id:"3",title:"Fødselsnummer",value:"XXXXXX YYYY",icon:X}]}},a={args:{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:c,linkIcon:!0},{id:"2",title:"Ingen varslinger",icon:m,badge:{variant:"text",label:"Legg til"},linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:S}]}},g={args:{...a.args,organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},items:[{selected:!0,title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}},{title:"Sporting Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Sporting Bergensis",variant:"outline"}},{title:"Glasgow Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Glasgow  Bergensis",variant:"outline"}}]}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const ce=["UserSettings","PersonSettings","CompanySettings","OrganizationSettings"];export{a as CompanySettings,g as OrganizationSettings,l as PersonSettings,s as UserSettings,ce as __namedExportsOrder,pe as default};
