import{t as e}from"./DialogActions-CDhRH-YC.js";var t={title:`Inbox/Dialog/DialogActions`,component:e,tags:[`autodocsi`,`beta`],args:{items:[{label:`Primary`,priority:`primary`,id:`primary`},{label:`Secondary`,priority:`secondary`,id:`secondary`}]}},n={args:{}},r={args:{}},i={args:{expandAltLabel:`Show more actions`,items:[{id:`primary`,label:`Primary`,priority:`primary`,onClick:()=>console.log(`Primary clicked`)},{id:`secondary-1`,label:`Secondary`,priority:`secondary`,onClick:()=>console.log(`secondary clicked`)},{id:`tertiary-1`,label:`Third action`,priority:`tertiary`,onClick:()=>console.log(`tertiary clicked`)},{id:`tertiary-2`,label:`Fourth action`,priority:`tertiary`,onClick:()=>console.log(`Fourth clicked`)},{id:`tertiary-3`,label:`Hidden action`,priority:`tertiary`,onClick:()=>console.log(`Hidden clicked`),hidden:!0}]}},a={args:{expandAltLabel:`Show more actions`,items:[{id:`primary`,label:`Primary`,priority:`primary`,disabled:!0,onClick:()=>console.log(`Primary clicked`)},{id:`secondary-1`,label:`Secondary`,priority:`secondary`,onClick:()=>console.log(`secondary clicked`)},{id:`tertiary-1`,label:`Third action`,priority:`tertiary`,onClick:()=>console.log(`tertiary clicked`)},{id:`tertiary-2`,label:`Fourth action`,priority:`tertiary`,onClick:()=>console.log(`Fourth clicked`)},{id:`tertiary-3`,label:`Hidden action`,priority:`tertiary`,onClick:()=>console.log(`Hidden clicked`),hidden:!0}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    expandAltLabel: 'Show more actions',
    items: [{
      id: 'primary',
      label: 'Primary',
      priority: 'primary',
      onClick: () => console.log('Primary clicked')
    }, {
      id: 'secondary-1',
      label: 'Secondary',
      priority: 'secondary',
      onClick: () => console.log('secondary clicked')
    }, {
      id: 'tertiary-1',
      label: 'Third action',
      priority: 'tertiary',
      onClick: () => console.log('tertiary clicked')
    }, {
      id: 'tertiary-2',
      label: 'Fourth action',
      priority: 'tertiary',
      onClick: () => console.log('Fourth clicked')
    }, {
      id: 'tertiary-3',
      label: 'Hidden action',
      priority: 'tertiary',
      onClick: () => console.log('Hidden clicked'),
      hidden: true
    }]
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    expandAltLabel: 'Show more actions',
    items: [{
      id: 'primary',
      label: 'Primary',
      priority: 'primary',
      disabled: true,
      onClick: () => console.log('Primary clicked')
    }, {
      id: 'secondary-1',
      label: 'Secondary',
      priority: 'secondary',
      onClick: () => console.log('secondary clicked')
    }, {
      id: 'tertiary-1',
      label: 'Third action',
      priority: 'tertiary',
      onClick: () => console.log('tertiary clicked')
    }, {
      id: 'tertiary-2',
      label: 'Fourth action',
      priority: 'tertiary',
      onClick: () => console.log('Fourth clicked')
    }, {
      id: 'tertiary-3',
      label: 'Hidden action',
      priority: 'tertiary',
      onClick: () => console.log('Hidden clicked'),
      hidden: true
    }]
  }
}`,...a.parameters?.docs?.source}}};var o=[`Default`,`Secondary`,`MultipleButtons`,`MultipleButtonsPrimaryDisabled`];export{n as Default,i as MultipleButtons,a as MultipleButtonsPrimaryDisabled,r as Secondary,o as __namedExportsOrder,t as default};