import{F as l}from"./FloatingDropdown-DREPOxCB.js";import{S as m}from"./XMark-BXMpu0Gf.js";import{S as c}from"./Plus-CPTNbqFv.js";import{S as t}from"./InformationSquare-J3q8zJp8.js";import{S as i}from"./ArrowLeft-DPWAXI9g.js";import"./iframe-DrMVe4hJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useMenu-CrRt-E4f.js";import"./useClickOutside-DkBfivfW.js";import"./Button-B40GVZAo.js";import"./tooltip-BY1BnveL.js";import"./Icon-CK8FcAiF.js";import"./index-B2LUQ97G.js";import"./Skeleton-BKl0bJYN.js";import"./ButtonIcon-DJjLAXS2.js";import"./Avatar-toOOZ7nf.js";import"./useId-CwrI0QJg.js";import"./AvatarGroup-CVynWGO_.js";const L={title:"Components/Dropdown/FloatingDropdown",component:l,tags:["autodocs"],parameters:{layout:"padded"},args:{icon:c,iconAltText:"Actions menu",items:[{icon:t,title:"Vis nye funksjoner",onClick:()=>console.log("Show new features")},{icon:i,title:"Ta meg tilbake",onClick:()=>console.log("Go back")}]}},o={args:{}},r={args:{color:"neutral"}},n={args:{color:"company"}},e={args:{color:"person"}},a={args:{items:[{icon:t,title:"Vis nye funksjoner",onClick:()=>console.log("Show new features")},{icon:i,title:"Ta meg tilbake",onClick:()=>console.log("Go back")},{icon:c,title:"Legg til",onClick:()=>console.log("Add")},{icon:t,title:"Informasjon",onClick:()=>console.log("Info")}]}},s={args:{icon:c,iconOpen:m,color:"company"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
