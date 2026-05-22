import{F as l}from"./FloatingDropdown-CBndf-7q.js";import{S as t}from"./InformationSquare-DNjiq8ws.js";import{S as i}from"./ArrowLeft-C75heOGB.js";import{S as c}from"./Plus-CQfWxjRv.js";import{S as m}from"./XMark-BEbAfGHw.js";import"./iframe-C6Awlou2.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonIcon-CsIFcTMm.js";import"./index-DlBZqmFk.js";import"./Avatar-CJAvXADO.js";import"./useId-InpKFtFj.js";import"./Skeleton-Dzw9idTE.js";import"./AvatarGroup-CCkWNWoM.js";import"./Icon-DNxmTYNY.js";import"./useMenu-CAczdzUV.js";import"./useClickOutside-B3teLqpQ.js";import"./Button-xDUaTd0f.js";import"./tooltip-wBWP-9p3.js";const L={title:"Components/Dropdown/FloatingDropdown",component:l,tags:["autodocs"],parameters:{layout:"padded"},args:{icon:c,iconAltText:"Actions menu",items:[{icon:t,title:"Vis nye funksjoner",onClick:()=>console.log("Show new features")},{icon:i,title:"Ta meg tilbake",onClick:()=>console.log("Go back")}]}},o={args:{}},r={args:{color:"neutral"}},n={args:{color:"company"}},e={args:{color:"person"}},a={args:{items:[{icon:t,title:"Vis nye funksjoner",onClick:()=>console.log("Show new features")},{icon:i,title:"Ta meg tilbake",onClick:()=>console.log("Go back")},{icon:c,title:"Legg til",onClick:()=>console.log("Add")},{icon:t,title:"Informasjon",onClick:()=>console.log("Info")}]}},s={args:{icon:c,iconOpen:m,color:"company"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'neutral'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'company'
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'person'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      icon: InformationSquareIcon,
      title: 'Vis nye funksjoner',
      onClick: () => console.log('Show new features')
    }, {
      icon: ArrowLeftIcon,
      title: 'Ta meg tilbake',
      onClick: () => console.log('Go back')
    }, {
      icon: PlusIcon,
      title: 'Legg til',
      onClick: () => console.log('Add')
    }, {
      icon: InformationSquareIcon,
      title: 'Informasjon',
      onClick: () => console.log('Info')
    }]
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    icon: PlusIcon,
    iconOpen: XMarkIcon,
    color: 'company'
  }
}`,...s.parameters?.docs?.source}}};const M=["Default","Neutral","Company","Person","WithManyItems","WithDifferentIcon"];export{n as Company,o as Default,r as Neutral,e as Person,s as WithDifferentIcon,a as WithManyItems,M as __namedExportsOrder,L as default};
