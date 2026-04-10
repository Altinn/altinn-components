"use client";import{S as d,a as u,b as v}from"./Paperplane-kbCYF_f_.js";import{S as c}from"./Handshake-jxzEPI1T.js";import{S as m}from"./Bell-Bq12r575.js";import{r as b,a as p}from"./iframe-COdTICiz.js";import{u as I}from"./useId-lT615UMD.js";import{S}from"./Hashtag-BUYdu18x.js";import{A as f}from"./AccountListItemDetails-DTGlAgFb.js";import"./preload-helper-PPVm8Dsz.js";import"./Section-Cld6nU2J.js";import"./index-eHSiAaoN.js";import"./Flex-BH1BXZbH.js";import"./ButtonGroup-BKCkWJMA.js";import"./Button-Dqoqvefk.js";import"./button-BvBLLivB.js";import"./use-merge-refs-DMOZr-G2.js";import"./lite-DaUVFjkg.js";import"./List-whgW15bu.js";import"./ListItem-B7SDP4f5.js";import"./Input-Dmsj72wJ.js";import"./input-DYzXaufk.js";import"./XMark-CpgXVK2Q.js";import"./Icon-CpwjhC7D.js";import"./Skeleton-DCT9M7tY.js";import"./Avatar-30_b1gUS.js";import"./AvatarGroup-DMJoFLAP.js";import"./Badge-CTG2EWNm.js";import"./Heading-BXn08xBV.js";import"./useHighlightedText-FFYshbql.js";import"./ChevronUp-Dz_g_pRj.js";import"./ChevronDown-CXIH_g9t.js";import"./ChevronRight-tPPKpYH4.js";import"./Divider-B4U8jiT-.js";import"./SettingsItem-G_p3ppPe.js";import"./SettingsItemBase-BGMVA5Q_.js";import"./ItemLink-CDxFMY6P.js";import"./ItemMedia-BN92MYHv.js";import"./ItemControls-DRloD8XX.js";import"./SettingsModal-Bp-X6zsb.js";import"./ModalBase-D_HQkA4J.js";import"./ModalBody-IM9JDPu9.js";import"./ButtonIcon-BSRBlnsV.js";import"./ButtonLabel-BeR2LbuU.js";import"./AccountOrganization-Dpx0xSnZ.js";import"./Byline-Tw37sWdf.js";var y=function(n,i){var r={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&i.indexOf(e)<0&&(r[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(r[e[t]]=n[e[t]]);return r};const X=b.forwardRef((n,i)=>{var{title:r,titleId:e}=n,t=y(n,["title","titleId"]);let o=I();return o=r?e||"title-"+o:void 0,p.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":o},t),r?p.createElement("title",{id:o},r):null,p.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M8.25 7.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M8.288 17.288A5.25 5.25 0 0 1 17.25 21a.75.75 0 0 0 1.5 0 6.75 6.75 0 0 0-13.5 0 .75.75 0 0 0 1.5 0 5.25 5.25 0 0 1 1.538-3.712",clipRule:"evenodd"}))}),me={title:"Account/AccountListItemDetails",component:f,tags:["autodocs"],parameters:{},args:{buttons:[{label:"Gå til innboks",variant:"outline"},{label:"Tilgangsstyring",variant:"outline"}]}},s={args:{settings:[{id:"1",title:"Mobiltelefon",value:"+47 123 45 678",icon:d,linkIcon:!0,badge:{variant:"text",label:"Endre"}},{id:"2",title:"E-postadresse",value:"mathias@brann.no",icon:u,linkIcon:!0,badge:{variant:"text",label:"Endre"}},{id:"3",title:"Adresse",value:"Inndalsveien 28, 5063 Bergen",icon:v,linkIcon:!0,badge:{variant:"text",label:"Endre"}}]}},l={args:{settings:[{id:"1",title:"Rolle og tilganger",value:"Ektefelle",badge:{label:"2 tilganger"},icon:c,linkIcon:!0},{id:"2",title:"Varslinger er på",value:"mathias@brann.no, +47 123 45 678",badge:{label:"SMS og e-post"},icon:m,linkIcon:!0},{id:"3",title:"Fødselsnummer",value:"XXXXXX YYYY",icon:X}]}},a={args:{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:c,linkIcon:!0},{id:"2",title:"Ingen varslinger",icon:m,badge:{variant:"text",label:"Legg til"},linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:S}]}},g={args:{...a.args,organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},items:[{selected:!0,title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}},{title:"Sporting Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Sporting Bergensis",variant:"outline"}},{title:"Glasgow Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Glasgow  Bergensis",variant:"outline"}}]}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const de=["UserSettings","PersonSettings","CompanySettings","OrganizationSettings"];export{a as CompanySettings,g as OrganizationSettings,l as PersonSettings,s as UserSettings,de as __namedExportsOrder,me as default};
