import{M as o}from"./SearchField-Cir7dqyx.js";import"./iframe-Dr1YYpI1.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-DOqx6Pwx.js";import"./FieldBase-CyLGbTYK.js";import"./Typography-CAIidHgh.js";import"./useHighlightedText-BV18x4ez.js";import"./Field-CFwGDJPk.js";import"./Label-CGK745vw.js";import"./Input-Brt0jiez.js";import"./useMenu-BbXnEU1n.js";import"./MenuListItem-BFvVa6a8.js";import"./MenuListDivider-DIxbGzVU.js";import"./MenuListHeading-BfYNlaNe.js";import"./MenuItem-CTIXytBa.js";import"./ItemMedia-BpxSm7tv.js";import"./Avatar-5MYoUnaT.js";import"./AvatarGroup-qKVf7nyJ.js";import"./Checkmark-BLry8rVn.js";import"./ItemLabel-CM1gzuiQ.js";import"./Heading-BD9oLNEa.js";import"./ItemControls-DQl8k1jC.js";import"./Badge-DlA625G6.js";import"./Tooltip-CpSJxiAh.js";import"./ChevronRight-F0aXUvpz.js";import"./index-CjeWyC4B.js";import"./InformationSquare-zR3kX6_5.js";const q={title:"Menu/Accessibility",component:o,parameters:{a11y:{test:"error"}}},e={args:{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"partyScope",groupId:"1",title:"Alle aktører",value:"ALL_PARTIES",checked:!0},{role:"radio",name:"partyScope",groupId:"2",title:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",title:"Virksomheter",value:"COMPANIES"}]}},r={args:{open:!0,keyboardEvents:!0,items:[{role:"checkbox",name:"status",groupId:"1",title:"Ulest",value:"unread",checked:!0},{role:"checkbox",name:"status",groupId:"1",title:"Krever handling",value:"requires-action"}]}},t={args:{open:!0,keyboardEvents:!0,items:[{id:"inbox",title:"Innboks",href:"#"},{id:"drafts",title:"Utkast",href:"#"}]}},n={args:{open:!0,keyboardEvents:!0,groups:{1:{title:"Velg status"}},items:[{role:"checkbox",name:"status",groupId:"1",title:"Ulest",value:"unread",checked:!0},{role:"checkbox",name:"status",groupId:"1",title:"Krever handling",value:"requires-action"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const C=["RadioOptions","CheckboxOptions","LinkOptions","GroupHeading"];export{r as CheckboxOptions,n as GroupHeading,t as LinkOptions,e as RadioOptions,C as __namedExportsOrder,q as default};
