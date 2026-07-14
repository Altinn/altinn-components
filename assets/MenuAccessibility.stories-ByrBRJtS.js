import{M as o}from"./SearchField-BGWHdZv0.js";import"./iframe-DymAqe7-.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-DYyWgrew.js";import"./FieldBase-CV5Nsw3m.js";import"./Typography-CpmuPi_2.js";import"./useHighlightedText-CHgJbocK.js";import"./Field-Ct7nmimk.js";import"./Label-jxhD3VW5.js";import"./Input-XXqZV2PD.js";import"./useMenu-B3cy-uAB.js";import"./MenuListItem-tD-sg5OP.js";import"./MenuListDivider-D_6Pn6hY.js";import"./MenuListHeading-D0t38-BK.js";import"./MenuItem-Q0-LXmKI.js";import"./ItemMedia-BNXDJXQ4.js";import"./Avatar--eqxbK2x.js";import"./AvatarGroup-C7VtBu50.js";import"./Checkmark-BfyIm5TX.js";import"./ItemLabel-D1_6NRfu.js";import"./Heading-D0_eZ5cX.js";import"./ItemControls-DPpG0bqy.js";import"./Badge-FB3xbQux.js";import"./Tooltip-BfF0ydp0.js";import"./ChevronRight-DBeZxa-Y.js";import"./InformationSquare-DzVIiFVQ.js";const M={title:"Menu/Accessibility",component:o,parameters:{a11y:{test:"error"}}},e={args:{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"partyScope",groupId:"1",title:"Alle aktører",value:"ALL_PARTIES",checked:!0},{role:"radio",name:"partyScope",groupId:"2",title:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",title:"Virksomheter",value:"COMPANIES"}]}},r={args:{open:!0,keyboardEvents:!0,items:[{role:"checkbox",name:"status",groupId:"1",title:"Ulest",value:"unread",checked:!0},{role:"checkbox",name:"status",groupId:"1",title:"Krever handling",value:"requires-action"}]}},t={args:{open:!0,keyboardEvents:!0,items:[{id:"inbox",title:"Innboks",href:"#"},{id:"drafts",title:"Utkast",href:"#"}]}},n={args:{open:!0,keyboardEvents:!0,groups:{1:{title:"Velg status"}},items:[{role:"checkbox",name:"status",groupId:"1",title:"Ulest",value:"unread",checked:!0},{role:"checkbox",name:"status",groupId:"1",title:"Krever handling",value:"requires-action"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
