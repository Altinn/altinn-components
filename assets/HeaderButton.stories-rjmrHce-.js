import{j as e}from"./iframe-BNDruhPA.js";import{c as n}from"./index-JM42q3xD.js";import{S as v}from"./XMark-vbUnhqfT.js";import{S as N}from"./PadlockLocked-oQs_26Wi.js";import{B as l}from"./Button-CaDKAluY.js";import{I as j}from"./Icon-Ch0vKaKK.js";import{B as i}from"./Badge-e7-dfLSt.js";import{A as S}from"./AvatarGroup-CBYJn5rG.js";import{A as h}from"./Avatar-Bc7K3VQ6.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-28rL4Hsl.js";import"./button-Bu4lXR2T.js";import"./use-merge-refs-DHcrFN31.js";import"./lite-DaUVFjkg.js";import"./Skeleton-3vFplc_z.js";import"./Tooltip-BwDwCRyx.js";import"./floating-ui.dom-DCpi3RTt.js";const I="_button_1p2eq_1",G="_label_1p2eq_12",k="_icon_1p2eq_18",q="_avatarGroup_1p2eq_28",A="_loginIcon_1p2eq_37",E="_closeIcon_1p2eq_42",C="_badge_1p2eq_46",a={button:I,label:G,icon:k,avatarGroup:q,loginIcon:A,closeIcon:E,badge:C},M=({className:s,as:o="button",color:t="company",variant:c="solid",avatar:b,avatarGroup:_,icon:f=N,expanded:B,label:m="Menu",badge:r,...p})=>B?e.jsxs(l,{...p,as:o,variant:c,color:t,className:n(a.button,s),children:[e.jsx("span",{className:a.label,children:m}),e.jsx("span",{className:n(a.icon,a.closeIcon),children:e.jsx(j,{svgElement:v})}),r&&e.jsx(i,{...r,className:a.badge})]}):_?e.jsxs(l,{...p,as:o,variant:c,color:t,className:n(a.button,s),children:[e.jsx("span",{className:a.label,children:m}),e.jsx(S,{..._,className:a.avatarGroup}),r&&e.jsx(i,{...r,className:a.badge})]}):b?e.jsxs(l,{...p,as:o,variant:c,color:t,className:n(a.button,s),children:[e.jsx("span",{className:a.label,children:m}),e.jsx(h,{type:b?.type,name:b?.name,style:{fontSize:"2.25rem"}}),r&&e.jsx(i,{...r,className:a.badge})]}):e.jsxs(l,{...p,as:o,variant:c,color:t,className:n(a.button,s),children:[e.jsx("span",{className:a.label,children:m}),e.jsx("span",{className:n(a.icon,a.loginIcon),children:e.jsx(j,{svgElement:f})}),r&&e.jsx(i,{...r,className:a.badge})]}),Y={title:"Layout/Header/HeaderButton",component:M,tags:["autodocs"],parameters:{layout:"centered"},args:{}},u={args:{}},d={args:{avatar:{type:"person",name:"Aurora Mikalsen"}}},g={args:{avatar:{type:"company",name:"Bergen bar"},badge:{color:"alert",label:"2"}}},x={args:{avatarGroup:{defaultType:"company",items:[{name:"Bergen bar"},{name:"Sportsklubben Brann"}]}}},y={args:{expanded:!0,avatar:{type:"company",name:"Bergen bar"}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    avatar: {
      type: 'person',
      name: 'Aurora Mikalsen'
    }
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    avatar: {
      type: 'company',
      name: 'Bergen bar'
    },
    badge: {
      color: 'alert',
      label: '2'
    }
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    avatarGroup: {
      defaultType: 'company',
      items: [{
        name: 'Bergen bar'
      }, {
        name: 'Sportsklubben Brann'
      }]
    }
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true,
    avatar: {
      type: 'company',
      name: 'Bergen bar'
    }
  }
}`,...y.parameters?.docs?.source}}};const Z=["Default","Person","Company","CompanyGroup","Expanded"];export{g as Company,x as CompanyGroup,u as Default,y as Expanded,d as Person,Z as __namedExportsOrder,Y as default};
