import{M as o}from"./SearchField-D230b6Yn.js";import"./iframe-CfUrJ-sW.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-DeqXe_2Y.js";import"./FieldBase-CrwLGD3E.js";import"./Typography-CAlmT_0b.js";import"./useHighlightedText-DCiIYobu.js";import"./Field-6dtFYXL2.js";import"./Label-sGHyqM38.js";import"./Input-CJlrdXWO.js";import"./useMenu-VNE_nv00.js";import"./MenuListItem-CpLdOTrv.js";import"./MenuListDivider-BCZC89qs.js";import"./MenuListHeading-C_KnsA5D.js";import"./MenuItem-Dw5geetP.js";import"./ItemMedia-BbdQksB6.js";import"./Avatar-CQ8_o-yu.js";import"./AvatarGroup-BJfCcue9.js";import"./Checkmark-8dE5LNjt.js";import"./ItemLabel-7ZtyJqf1.js";import"./Heading-CC1NzZuf.js";import"./ItemControls-K0n5tZKI.js";import"./Badge-Cy4UcitB.js";import"./Tooltip-DV6u4Pgt.js";import"./ChevronRight-BQqjok9o.js";import"./InformationSquare-BZJWkHLO.js";const M={title:"Menu/Accessibility",component:o,parameters:{a11y:{test:"error"}}},e={args:{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"partyScope",groupId:"1",title:"Alle aktører",value:"ALL_PARTIES",checked:!0},{role:"radio",name:"partyScope",groupId:"2",title:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",title:"Virksomheter",value:"COMPANIES"}]}},r={args:{open:!0,keyboardEvents:!0,items:[{role:"checkbox",name:"status",groupId:"1",title:"Ulest",value:"unread",checked:!0},{role:"checkbox",name:"status",groupId:"1",title:"Krever handling",value:"requires-action"}]}},t={args:{open:!0,keyboardEvents:!0,items:[{id:"inbox",title:"Innboks",href:"#"},{id:"drafts",title:"Utkast",href:"#"}]}},n={args:{open:!0,keyboardEvents:!0,groups:{1:{title:"Velg status"}},items:[{role:"checkbox",name:"status",groupId:"1",title:"Ulest",value:"unread",checked:!0},{role:"checkbox",name:"status",groupId:"1",title:"Krever handling",value:"requires-action"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const q=["RadioOptions","CheckboxOptions","LinkOptions","GroupHeading"];export{r as CheckboxOptions,n as GroupHeading,t as LinkOptions,e as RadioOptions,q as __namedExportsOrder,M as default};
