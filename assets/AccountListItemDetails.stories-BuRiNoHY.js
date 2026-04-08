"use client";import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./useId-HrPGyhy9.js";import{t as r}from"./Bell-Dy1Lu3cE.js";import{t as i}from"./Handshake-ClUnDHAI.js";import{t as a}from"./Hashtag-DndtYdAm.js";import{n as o,r as s,t as c}from"./Paperplane-C3RPDSTC.js";import{t as l}from"./AccountListItemDetails-4s7AYF1N.js";var u=e(t()),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},f=(0,u.forwardRef)((e,t)=>{var{title:r,titleId:i}=e,a=d(e,[`title`,`titleId`]);let o=n();return o=r?i||`title-`+o:void 0,u.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,width:`1em`,height:`1em`,fill:`none`,viewBox:`0 0 24 24`,focusable:!1,role:`img`,ref:t,"aria-labelledby":o},a),r?u.createElement(`title`,{id:o},r):null,u.createElement(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M8.25 7.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M8.288 17.288A5.25 5.25 0 0 1 17.25 21a.75.75 0 0 0 1.5 0 6.75 6.75 0 0 0-13.5 0 .75.75 0 0 0 1.5 0 5.25 5.25 0 0 1 1.538-3.712`,clipRule:`evenodd`}))}),p={title:`Account/AccountListItemDetails`,component:l,tags:[`autodocs`],parameters:{},args:{buttons:[{label:`Gå til innboks`,variant:`outline`},{label:`Tilgangsstyring`,variant:`outline`}]}},m={args:{settings:[{id:`1`,title:`Mobiltelefon`,value:`+47 123 45 678`,icon:o,linkIcon:!0,badge:{variant:`text`,label:`Endre`}},{id:`2`,title:`E-postadresse`,value:`mathias@brann.no`,icon:c,linkIcon:!0,badge:{variant:`text`,label:`Endre`}},{id:`3`,title:`Adresse`,value:`Inndalsveien 28, 5063 Bergen`,icon:s,linkIcon:!0,badge:{variant:`text`,label:`Endre`}}]}},h={args:{settings:[{id:`1`,title:`Rolle og tilganger`,value:`Ektefelle`,badge:{label:`2 tilganger`},icon:i,linkIcon:!0},{id:`2`,title:`Varslinger er på`,value:`mathias@brann.no, +47 123 45 678`,badge:{label:`SMS og e-post`},icon:r,linkIcon:!0},{id:`3`,title:`Fødselsnummer`,value:`XXXXXX YYYY`,icon:f}]}},g={args:{settings:[{id:`1`,title:`Rolle og tilganger`,value:`Daglig leder`,badge:{label:`4 tilganger`},icon:i,linkIcon:!0},{id:`2`,title:`Ingen varslinger`,icon:r,badge:{variant:`text`,label:`Legg til`},linkIcon:!0},{id:`3`,title:`Organisasjonsnummer`,value:`XXX XXX XXX`,icon:a}]}},_={args:{...g.args,organization:[{title:`Diaspora Bergensis`,description:`Org nr. 928914038`,avatar:{type:`company`,name:`Diaspora Bergensis`},items:[{selected:!0,title:`Diaspora Bergensis`,description:`Org nr. 928914038`,avatar:{type:`company`,name:`Diaspora Bergensis`,variant:`outline`}},{title:`Sporting Bergensis`,description:`Org nr. 928914038`,avatar:{type:`company`,name:`Sporting Bergensis`,variant:`outline`}},{title:`Glasgow Bergensis`,description:`Org nr. 928914038`,avatar:{type:`company`,name:`Glasgow  Bergensis`,variant:`outline`}}]}]}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};var v=[`UserSettings`,`PersonSettings`,`CompanySettings`,`OrganizationSettings`];export{g as CompanySettings,_ as OrganizationSettings,h as PersonSettings,m as UserSettings,v as __namedExportsOrder,p as default};