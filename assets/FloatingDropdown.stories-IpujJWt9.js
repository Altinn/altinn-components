import{F as l}from"./FloatingDropdown-DTITLOv5.js";import{S as t}from"./InformationSquare-CZhEVvng.js";import{S as i}from"./ArrowLeft-CBE1u3F9.js";import{S as c}from"./Plus-gYiwb3vr.js";import{S as m}from"./XMark-DE16CL-6.js";import"./iframe-DgiLb7Jh.js";import"./preload-helper-PPVm8Dsz.js";import"./ButtonIcon-CpeMN0SU.js";import"./index-CzzvqmNv.js";import"./Avatar-D2ea3_hU.js";import"./useId-6J1VG5PF.js";import"./Skeleton-CjXkBVSw.js";import"./AvatarGroup-BGNg7yRW.js";import"./Icon-uoDJWBW9.js";import"./useMenu-7q5OpfBf.js";import"./useClickOutside-DXlVgUmO.js";import"./Button-D7CoEZHH.js";import"./button-2pQtb28r.js";import"./use-merge-refs-CpvzIuY-.js";import"./lite-DaUVFjkg.js";const T={title:"Components/Dropdown/FloatingDropdown",component:l,tags:["autodocs"],parameters:{layout:"padded"},args:{icon:c,iconAltText:"Actions menu",items:[{icon:t,title:"Vis nye funksjoner",onClick:()=>console.log("Show new features")},{icon:i,title:"Ta meg tilbake",onClick:()=>console.log("Go back")}]}},o={args:{}},r={args:{color:"neutral"}},n={args:{color:"company"}},e={args:{color:"person"}},a={args:{items:[{icon:t,title:"Vis nye funksjoner",onClick:()=>console.log("Show new features")},{icon:i,title:"Ta meg tilbake",onClick:()=>console.log("Go back")},{icon:c,title:"Legg til",onClick:()=>console.log("Add")},{icon:t,title:"Informasjon",onClick:()=>console.log("Info")}]}},s={args:{icon:c,iconOpen:m,color:"company"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const W=["Default","Neutral","Company","Person","WithManyItems","WithDifferentIcon"];export{n as Company,o as Default,r as Neutral,e as Person,s as WithDifferentIcon,a as WithManyItems,W as __namedExportsOrder,T as default};
