import{M as o}from"./SearchField-4LhcGogw.js";import"./iframe-CplFPuE2.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-BqSMzz0M.js";import"./MenuListItem-Dyh-W5SZ.js";import"./MenuListHeading-9B-ZCwvC.js";import"./MenuItem-DVl7YcIV.js";import"./ItemMedia-BtRJ3M2I.js";import"./Avatar-B3ASgMQL.js";import"./AvatarGroup-B9EoMI2b.js";import"./Checkmark-Cdr1Cy4X.js";import"./ItemLabel-B29_b0Yb.js";import"./Heading-H6e_lYEN.js";import"./useHighlightedText-BpzjnQwF.js";import"./ItemControls-KQk_c0UL.js";import"./Badge-BWoGIkg0.js";import"./Tooltip-Dh3mcs7O.js";import"./ChevronRight-44eUUhYn.js";import"./FieldBase-BHrQkTmp.js";import"./Typography-pPFkmvZJ.js";import"./Field-DmUVDlMz.js";import"./Label-C9lUUP0G.js";import"./Input-BNktXmCP.js";import"./useMenu-Ct0wDmor.js";import"./MenuListDivider-CcRb0ndu.js";import"./InformationSquare-CTMDR6or.js";const M={title:"Menu/Accessibility",component:o,parameters:{a11y:{test:"error"}}},e={args:{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"partyScope",groupId:"1",title:"Alle aktører",value:"ALL_PARTIES",checked:!0},{role:"radio",name:"partyScope",groupId:"2",title:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",title:"Virksomheter",value:"COMPANIES"}]}},r={args:{open:!0,keyboardEvents:!0,items:[{role:"checkbox",name:"status",groupId:"1",title:"Ulest",value:"unread",checked:!0},{role:"checkbox",name:"status",groupId:"1",title:"Krever handling",value:"requires-action"}]}},t={args:{open:!0,keyboardEvents:!0,items:[{id:"inbox",title:"Innboks",href:"#"},{id:"drafts",title:"Utkast",href:"#"}]}},n={args:{open:!0,keyboardEvents:!0,groups:{1:{title:"Velg status"}},items:[{role:"checkbox",name:"status",groupId:"1",title:"Ulest",value:"unread",checked:!0},{role:"checkbox",name:"status",groupId:"1",title:"Krever handling",value:"requires-action"}]}},q=["RadioOptions","CheckboxOptions","LinkOptions","GroupHeading"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    keyboardEvents: true,
    items: [{
      role: 'radio',
      name: 'partyScope',
      groupId: '1',
      title: 'Alle aktører',
      value: 'ALL_PARTIES',
      checked: true
    }, {
      role: 'radio',
      name: 'partyScope',
      groupId: '2',
      title: 'Personer',
      value: 'PERSONS'
    }, {
      role: 'radio',
      name: 'partyScope',
      groupId: '2',
      title: 'Virksomheter',
      value: 'COMPANIES'
    }]
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    keyboardEvents: true,
    items: [{
      role: 'checkbox',
      name: 'status',
      groupId: '1',
      title: 'Ulest',
      value: 'unread',
      checked: true
    }, {
      role: 'checkbox',
      name: 'status',
      groupId: '1',
      title: 'Krever handling',
      value: 'requires-action'
    }]
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    keyboardEvents: true,
    items: [{
      id: 'inbox',
      title: 'Innboks',
      href: '#'
    }, {
      id: 'drafts',
      title: 'Utkast',
      href: '#'
    }]
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    keyboardEvents: true,
    groups: {
      1: {
        title: 'Velg status'
      }
    },
    items: [{
      role: 'checkbox',
      name: 'status',
      groupId: '1',
      title: 'Ulest',
      value: 'unread',
      checked: true
    }, {
      role: 'checkbox',
      name: 'status',
      groupId: '1',
      title: 'Krever handling',
      value: 'requires-action'
    }]
  }
}`,...n.parameters?.docs?.source}}};export{r as CheckboxOptions,n as GroupHeading,t as LinkOptions,e as RadioOptions,q as __namedExportsOrder,M as default};
