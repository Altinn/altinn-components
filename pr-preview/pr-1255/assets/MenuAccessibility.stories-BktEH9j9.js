import{M as o}from"./SearchField-B_NM7GXp.js";import"./iframe-CdYVD6SD.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-Cgduw8_l.js";import"./FieldBase-NvZtAXfB.js";import"./Typography-Dba7VpUA.js";import"./useHighlightedText-DItA3cBY.js";import"./Field-DkF-iZgl.js";import"./Label-lXTSTWmW.js";import"./Input-CF984aoc.js";import"./useMenu-CR8oLL1i.js";import"./MenuListItem-LpLMf6qu.js";import"./MenuListDivider-BO0zxfeS.js";import"./MenuListHeading-CKDNZjFs.js";import"./MenuItem-CJ_NtT0h.js";import"./ItemMedia-BIl5Wxj2.js";import"./Avatar-fMwGn-3G.js";import"./AvatarGroup-BXTj0nvd.js";import"./Checkmark-DT64LcTm.js";import"./ItemLabel-DvFew2uy.js";import"./Heading-Kaqd1h94.js";import"./ItemControls-vidWw2G8.js";import"./Badge-DuyiKzKp.js";import"./Tooltip-Vr6xk2hm.js";import"./ChevronRight-Dr5zJkhS.js";import"./index-D2d8PfjQ.js";import"./InformationSquare-Bk7KLwd3.js";const q={title:"Menu/Accessibility",component:o,parameters:{a11y:{test:"error"},docs:{description:{component:"Accessibility regression stories."}}}},t={args:{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"partyScope",groupId:"1",title:"Alle aktører",value:"ALL_PARTIES",checked:!0},{role:"radio",name:"partyScope",groupId:"2",title:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",title:"Virksomheter",value:"COMPANIES"}]}},n={args:{open:!0,keyboardEvents:!0,items:[{role:"checkbox",name:"status",groupId:"1",title:"Ulest",value:"unread",checked:!0},{role:"checkbox",name:"status",groupId:"1",title:"Krever handling",value:"requires-action"}]}},e={args:{open:!0,keyboardEvents:!0,items:[{id:"inbox",title:"Innboks",href:"#"},{id:"drafts",title:"Utkast",href:"#"}]}},r={args:{open:!0,keyboardEvents:!0,groups:{1:{title:"Velg status"}},items:[{role:"checkbox",name:"status",groupId:"1",title:"Ulest",value:"unread",checked:!0},{role:"checkbox",name:"status",groupId:"1",title:"Krever handling",value:"requires-action"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
