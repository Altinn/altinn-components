"use client";var W=Object.defineProperty;var n=(w,k)=>W(w,"name",{value:k,configurable:!0});import{ai as B,aa as t,a7 as a,c as D,I as G,T as V}from"./iframe-xlSYDLmX.js";import{u as z}from"./useMenu-C7Dhr05-.js";import{u as X}from"./useClickOutside-CEWAKnpL.js";import{B as K}from"./ButtonIcon-C0Iduzzq.js";import{S as y}from"./Plus-B94II9lJ.js";import{S as b}from"./InformationSquare-DlLj2oH8.js";import{S as R}from"./ArrowLeft-C90wH3GE.js";import"./preload-helper-Cc2_yIPf.js";import"./Avatar-DElWOLnF.js";import"./AvatarGroup-Dx8NgiU3.js";const $="_container_dqumv_1",H="_button_dqumv_13",J="_dropdown_dqumv_21",Q="_dropdownItem_dqumv_45",U="_itemTitle_dqumv_75",l={container:$,button:H,dropdown:J,dropdownItem:Q,itemTitle:U},Y=n(({variant:w="solid",size:k,icon:T,iconOpen:S,iconSize:q,iconAltText:A,id:c="floatingDropdown",color:x="company",items:M,"data-testid":L})=>{const{currentId:N,toggleId:i}=B(),o=N===c,C=t.useRef(o),v=t.useRef(null),I=t.useRef(null),_=t.useRef(null),F=n(e=>r=>{e(r),i(c)},"handleItemClick"),{menu:O,setActiveIndex:h,activeIndex:E}=z({items:M,groups:{ungrouped:{}},keyboardEvents:o,ref:v});t.useEffect(()=>{const e=C.current;C.current=o,e&&!o&&_.current?.focus()},[o]),t.useEffect(()=>{o&&h(0)},[o,h]),t.useEffect(()=>{if(!o)return;const e=requestAnimationFrame(()=>{I.current?.focus({preventScroll:!0})});return()=>cancelAnimationFrame(e)},[o]),t.useEffect(()=>{if(!o)return;const e=I.current;if(!e)return;const r=n(s=>{s.key!=="Tab"&&s.key!=="Escape"||e.contains(document.activeElement)&&(s.preventDefault(),i(c))},"onKeyDown");return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[o,c,i]),X(v,()=>{o&&i(c)});const j=o&&S?S:T,P=o&&E>=0?`floating-dropdown-button-${E}`:void 0;return a.jsxs("div",{className:l.container,ref:v,children:[o&&a.jsx("div",{id:"floating-dropdown-menu",className:l.dropdown,"data-color":x,role:"menu","aria-labelledby":"floating-dropdown-button","aria-activedescendant":P,tabIndex:-1,ref:I,children:O[0]?.items.map((e,r)=>{const s=e.props;return a.jsxs(D,{id:"floating-dropdown-button-"+r,className:l.dropdownItem,onClick:F(s.onClick),type:"button",role:"menuitem",tabIndex:-1,"data-active":e.active,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,children:[a.jsx(G,{svgElement:s.icon,size:"md",color:"inherit"}),a.jsx("span",{className:l.itemTitle,children:s.title})]},r)})}),a.jsx(D,{className:l.button,variant:w,color:x,size:k,onClick:n(()=>i(c),"onClick"),"data-testid":L,"aria-label":A,"aria-expanded":o,"aria-haspopup":"menu",id:"floating-dropdown-button",ref:_,autoFocus:!1,"aria-controls":o?"floating-dropdown-menu":void 0,children:j&&a.jsx(K,{icon:j,size:q})})]})},"FloatingDropdown"),uo={title:"Components/FloatingDropdown",component:Y,tags:["autodocs","deprecated"],parameters:{layout:"padded",docs:{description:{component:"**Deprecated.** FloatingDropdown will be removed in a future release."}}},args:{icon:y,iconAltText:"Actions menu",items:[{icon:b,title:"Vis nye funksjoner",onClick:n(()=>console.log("Show new features"),"onClick")},{icon:R,title:"Ta meg tilbake",onClick:n(()=>console.log("Go back"),"onClick")}]}},u={args:{}},d={args:{color:"neutral"}},m={args:{color:"company"}},p={args:{color:"person"}},f={args:{items:[{icon:b,title:"Vis nye funksjoner",onClick:n(()=>console.log("Show new features"),"onClick")},{icon:R,title:"Ta meg tilbake",onClick:n(()=>console.log("Go back"),"onClick")},{icon:y,title:"Legg til",onClick:n(()=>console.log("Add"),"onClick")},{icon:b,title:"Informasjon",onClick:n(()=>console.log("Info"),"onClick")}]}},g={args:{icon:y,iconOpen:V,color:"company"}},mo=["Default","Neutral","Company","Person","WithManyItems","WithDifferentIcon"];u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'neutral'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'company'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'person'
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    icon: PlusIcon,
    iconOpen: XMarkIcon,
    color: 'company'
  }
}`,...g.parameters?.docs?.source}}};export{m as Company,u as Default,d as Neutral,p as Person,g as WithDifferentIcon,f as WithManyItems,mo as __namedExportsOrder,uo as default};
