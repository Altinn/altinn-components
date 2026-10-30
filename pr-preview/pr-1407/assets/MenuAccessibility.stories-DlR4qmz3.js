import{M as o}from"./SearchField-BRPq9oj8.js";import"./iframe-k-5ppgch.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-B6a_F1T2.js";import"./MenuListItem-NGcm-BoJ.js";import"./MenuListHeading-DOGIQowl.js";import"./MenuItem-BXSsa0TG.js";import"./CheckboxUncheckedIcon-427e4rUe.js";import"./RadioUncheckedIcon-DLopOulv.js";import"./ItemMedia-DxNh8EKr.js";import"./Avatar-Bkj70cv6.js";import"./AvatarGroup-CF7XuR93.js";import"./ItemLabel-D5iTgQt_.js";import"./Heading-DFDwpHPM.js";import"./useHighlightedText-DchtrGpj.js";import"./ItemControls-ByMwyA6J.js";import"./Badge-GfdRI08Y.js";import"./Tooltip-tkuEOqTN.js";import"./ChevronRight-CDNE03o8.js";import"./FieldBase-CXS3Sevu.js";import"./Typography-CYRWqnkB.js";import"./Field-BTpPk25O.js";import"./Label-D-n8lPTZ.js";import"./Input-fDrubqKv.js";import"./useMenu-DQYhP48A.js";import"./MenuListDivider-BXcHHiOJ.js";import"./InformationSquare-C8JQXppp.js";const q={title:"Menu/Accessibility",component:o,parameters:{a11y:{test:"error"}}},e={args:{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"partyScope",groupId:"1",title:"Alle aktører",value:"ALL_PARTIES",checked:!0},{role:"radio",name:"partyScope",groupId:"2",title:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",title:"Virksomheter",value:"COMPANIES"}]}},r={args:{open:!0,keyboardEvents:!0,items:[{role:"checkbox",name:"status",groupId:"1",title:"Ulest",value:"unread",checked:!0},{role:"checkbox",name:"status",groupId:"1",title:"Krever handling",value:"requires-action"}]}},t={args:{open:!0,keyboardEvents:!0,items:[{id:"inbox",title:"Innboks",href:"#"},{id:"drafts",title:"Utkast",href:"#"}]}},n={args:{open:!0,keyboardEvents:!0,groups:{1:{title:"Velg status"}},items:[{role:"checkbox",name:"status",groupId:"1",title:"Ulest",value:"unread",checked:!0},{role:"checkbox",name:"status",groupId:"1",title:"Krever handling",value:"requires-action"}]}},C=["RadioOptions","CheckboxOptions","LinkOptions","GroupHeading"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};export{r as CheckboxOptions,n as GroupHeading,t as LinkOptions,e as RadioOptions,C as __namedExportsOrder,q as default};
