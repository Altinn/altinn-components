import{K as r,ai as n,a7 as s,c as o}from"./iframe-CdYVD6SD.js";import{F as t}from"./Flex-Cyvp2qjC.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Layout/Snackbar",component:r,tags:["autodocs","beta"],parameters:{},args:{}},e=()=>{const{openSnackbar:a}=n();return s.jsxs("div",{children:[s.jsxs(t,{direction:"row",spacing:3,children:[s.jsx(o,{onClick:()=>a({message:"Message",color:"danger",duration:1e3,dismissable:!0}),children:"Alert"}),s.jsx(o,{onClick:()=>a({message:"This is a longer message",color:"company",duration:1e3,dismissable:!0}),children:"Accent"}),s.jsx(o,{onClick:()=>a({message:"Message",color:"danger",duration:1e3*10,dismissable:!1}),children:"Non-dismissable, 10 seconds"})]}),s.jsx(r,{})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,d as default};
