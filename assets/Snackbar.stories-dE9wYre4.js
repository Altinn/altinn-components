"use client";import{p as s,y as n}from"./iframe-D7BK96qe.js";import{a as m}from"./SnackbarItem-D0jeSPba.js";import{F as d}from"./Flex-DKrdkBVD.js";import{B as r}from"./Button-UbmuloFB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CL9j6gFH.js";import"./Icon-CXOWvudR.js";import"./Skeleton-C-TQnNEe.js";import"./useId-B1IjdNvC.js";import"./XMark-DKvmykI8.js";import"./tooltip-B8elfXS-.js";const u="_stack_ilsfl_1",p={stack:u},b=({children:e})=>s.jsx("section",{className:p.stack,children:e}),t=({className:e})=>{const{storedMessages:i,open:c,closeSnackbarItem:l}=n();return c?s.jsx(b,{className:e,children:(i||[]).map(a=>s.jsx(m,{onDismiss:()=>l(a.id),dismissable:a.dismissable,...a},a.id))}):null},_={title:"Layout/Snackbar",component:t,tags:["autodocs","beta"],parameters:{},args:{}},o=()=>{const{openSnackbar:e}=n();return s.jsxs("div",{children:[s.jsxs(d,{direction:"row",spacing:3,children:[s.jsx(r,{onClick:()=>e({message:"Message",color:"danger",duration:1e3,dismissable:!0}),children:"Alert"}),s.jsx(r,{onClick:()=>e({message:"This is a longer message",color:"company",duration:1e3,dismissable:!0}),children:"Accent"}),s.jsx(r,{onClick:()=>e({message:"Message",color:"danger",duration:1e3*10,dismissable:!1}),children:"Non-dismissable, 10 seconds"})]}),s.jsx(t,{})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    openSnackbar
  } = useSnackbar();
  return <div>
      <Flex direction="row" spacing={3}>
        <Button onClick={() => openSnackbar({
        message: 'Message',
        color: 'danger',
        duration: 1000,
        dismissable: true
      })}>
          Alert
        </Button>
        <Button onClick={() => openSnackbar({
        message: 'This is a longer message',
        color: 'company',
        duration: 1000,
        dismissable: true
      })}>
          Accent
        </Button>
        <Button onClick={() => openSnackbar({
        message: 'Message',
        color: 'danger',
        duration: 1000 * 10,
        dismissable: false
      })}>
          Non-dismissable, 10 seconds
        </Button>
      </Flex>
      <Snackbar />
    </div>;
}`,...o.parameters?.docs?.source}}};const A=["Default"];export{o as Default,A as __namedExportsOrder,_ as default};
