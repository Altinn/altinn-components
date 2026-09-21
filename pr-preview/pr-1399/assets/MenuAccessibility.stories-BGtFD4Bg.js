import{M as o}from"./SearchField-BCijVFY-.js";import"./iframe-DJfn40-D.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-DE-iQbgW.js";import"./FieldBase-D1U1BxD2.js";import"./Typography-XfwuV3u8.js";import"./useHighlightedText-Bup2uSoT.js";import"./Field-Dse2Pgmw.js";import"./Label-BgUgSPLd.js";import"./Input-1D4-_m0T.js";import"./useMenu-CxHWIKXS.js";import"./MenuListItem-BFRz4ttp.js";import"./MenuListDivider-D98MnUWk.js";import"./MenuListHeading-DOsHnXss.js";import"./MenuItem-BcYTRISI.js";import"./ItemMedia-KuTtS6so.js";import"./Avatar-DCvRzqvr.js";import"./AvatarGroup-3CBvuGfY.js";import"./Checkmark-DXbNx-Gj.js";import"./ItemLabel-GD3MG7Wk.js";import"./Heading-DGmFcP6K.js";import"./ItemControls-fheO_qcA.js";import"./Badge-DwpsZD4L.js";import"./Tooltip-D_0KZq3E.js";import"./ChevronRight-DB6kCZkt.js";import"./InformationSquare-TILYX_Pd.js";const M={title:"Menu/Accessibility",component:o,parameters:{a11y:{test:"error"}}},e={args:{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"partyScope",groupId:"1",title:"Alle aktører",value:"ALL_PARTIES",checked:!0},{role:"radio",name:"partyScope",groupId:"2",title:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",title:"Virksomheter",value:"COMPANIES"}]}},r={args:{open:!0,keyboardEvents:!0,items:[{role:"checkbox",name:"status",groupId:"1",title:"Ulest",value:"unread",checked:!0},{role:"checkbox",name:"status",groupId:"1",title:"Krever handling",value:"requires-action"}]}},t={args:{open:!0,keyboardEvents:!0,items:[{id:"inbox",title:"Innboks",href:"#"},{id:"drafts",title:"Utkast",href:"#"}]}},n={args:{open:!0,keyboardEvents:!0,groups:{1:{title:"Velg status"}},items:[{role:"checkbox",name:"status",groupId:"1",title:"Ulest",value:"unread",checked:!0},{role:"checkbox",name:"status",groupId:"1",title:"Krever handling",value:"requires-action"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
