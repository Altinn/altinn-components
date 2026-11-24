import{M as o}from"./SearchField-HWu0obAx.js";import"./iframe-Cb83cNHz.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-C02McN1l.js";import"./MenuListItem-Ddq1rF2u.js";import"./MenuListDivider-CU0QYw1K.js";import"./MenuItem-D8XMh2RI.js";import"./CheckboxUncheckedIcon-DNQ5ph0B.js";import"./RadioUncheckedIcon-CIyf3y8X.js";import"./ItemMedia-DqOX_qxk.js";import"./Avatar-CO1wzsxc.js";import"./AvatarGroup-DvuSBfuR.js";import"./ItemLabel-BEqC8Tjb.js";import"./Heading-I2bz7uBQ.js";import"./useHighlightedText-DXF5vSCe.js";import"./ItemControls-B2ksNOht.js";import"./Badge-DGYSahl0.js";import"./Tooltip-Bacli5fs.js";import"./ChevronRight-C-6CVVq7.js";import"./FieldBase-DBBKjPwf.js";import"./Typography-BPADIB9F.js";import"./Field-SexvxzIl.js";import"./Label-CzmEce_d.js";import"./Input-DdatSh7d.js";import"./useMenu-D3abljbA.js";import"./InformationSquare-BiO92rri.js";const M={title:"Menu/Accessibility",component:o,parameters:{a11y:{test:"error"}}},e={args:{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"partyScope",groupId:"1",title:"Alle aktører",value:"ALL_PARTIES",checked:!0},{role:"radio",name:"partyScope",groupId:"2",title:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",title:"Virksomheter",value:"COMPANIES"}]}},r={args:{open:!0,keyboardEvents:!0,items:[{role:"checkbox",name:"status",groupId:"1",title:"Ulest",value:"unread",checked:!0},{role:"checkbox",name:"status",groupId:"1",title:"Krever handling",value:"requires-action"}]}},t={args:{open:!0,keyboardEvents:!0,items:[{id:"inbox",title:"Innboks",href:"#"},{id:"drafts",title:"Utkast",href:"#"}]}},n={args:{open:!0,keyboardEvents:!0,groups:{1:{title:"Velg status"}},items:[{role:"checkbox",name:"status",groupId:"1",title:"Ulest",value:"unread",checked:!0},{role:"checkbox",name:"status",groupId:"1",title:"Krever handling",value:"requires-action"}]}},q=["RadioOptions","CheckboxOptions","LinkOptions","GroupHeading"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
