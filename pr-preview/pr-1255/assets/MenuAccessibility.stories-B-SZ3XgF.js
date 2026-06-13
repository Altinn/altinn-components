import{M as o}from"./SearchField-_MN_HrdV.js";import"./iframe-2h8IP8d3.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-CI0_p9bj.js";import"./FieldBase-DGYDbbnf.js";import"./Typography-DY06DO0f.js";import"./useHighlightedText-CelzCUqF.js";import"./Field-BxD7Ql4y.js";import"./Label-ZzFKhgKK.js";import"./Input-CcSuNkw7.js";import"./useMenu-DBT0rzRb.js";import"./MenuListItem-Bu8N3gRa.js";import"./MenuListDivider-C4ZS-zxE.js";import"./MenuListHeading-CFPiwF83.js";import"./MenuItem-Cg_2HM56.js";import"./ItemMedia-F0nN_YEB.js";import"./Avatar-C_KS8ezx.js";import"./AvatarGroup-ChTLLSw-.js";import"./Checkmark-kZsld0tw.js";import"./ItemLabel-DAuWzgED.js";import"./Heading-DXu-0NAz.js";import"./ItemControls-F7yjZiAX.js";import"./Badge-Pn_S1ZTN.js";import"./Tooltip-D08FTuVb.js";import"./ChevronRight-Bz8Cr0I4.js";import"./index-CQmnZsg3.js";import"./InformationSquare-DAAIm6NS.js";const q={title:"Menu/Accessibility",component:o,parameters:{a11y:{test:"error"},docs:{description:{component:"Accessibility regression stories."}}}},t={args:{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"partyScope",groupId:"1",title:"Alle aktører",value:"ALL_PARTIES",checked:!0},{role:"radio",name:"partyScope",groupId:"2",title:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",title:"Virksomheter",value:"COMPANIES"}]}},n={args:{open:!0,keyboardEvents:!0,items:[{role:"checkbox",name:"status",groupId:"1",title:"Ulest",value:"unread",checked:!0},{role:"checkbox",name:"status",groupId:"1",title:"Krever handling",value:"requires-action"}]}},e={args:{open:!0,keyboardEvents:!0,items:[{id:"inbox",title:"Innboks",href:"#"},{id:"drafts",title:"Utkast",href:"#"}]}},r={args:{open:!0,keyboardEvents:!0,groups:{1:{title:"Velg status"}},items:[{role:"checkbox",name:"status",groupId:"1",title:"Ulest",value:"unread",checked:!0},{role:"checkbox",name:"status",groupId:"1",title:"Krever handling",value:"requires-action"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source},description:{story:"Plain links must expose `menuitem` directly under the menu (no nested menuitem wrapper).",...e.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source},description:{story:"A group heading must not carry `aria-level` on its presentational `<li>`.",...r.parameters?.docs?.description}}};const C=["RadioOptions","CheckboxOptions","LinkOptions","GroupHeading"];export{n as CheckboxOptions,r as GroupHeading,e as LinkOptions,t as RadioOptions,C as __namedExportsOrder,q as default};
