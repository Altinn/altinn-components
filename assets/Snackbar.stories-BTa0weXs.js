var i=Object.defineProperty;var a=(e,t)=>i(e,"name",{value:t,configurable:!0});import{K as n,ai as c,a7 as s,c as r}from"./iframe-DZEBeon6.js";import{F as l}from"./Flex-OuhsGVSH.js";import"./preload-helper-Cc2_yIPf.js";const p={title:"Layout/Snackbar",component:n,tags:["autodocs","beta"],parameters:{},args:{}},o=a(()=>{const{openSnackbar:e}=c();return s.jsxs("div",{children:[s.jsxs(l,{direction:"row",spacing:3,children:[s.jsx(r,{onClick:a(()=>e({message:"Message",color:"danger",duration:1e3,dismissable:!0}),"onClick"),children:"Alert"}),s.jsx(r,{onClick:a(()=>e({message:"This is a longer message",color:"company",duration:1e3,dismissable:!0}),"onClick"),children:"Accent"}),s.jsx(r,{onClick:a(()=>e({message:"Message",color:"danger",duration:1e3*10,dismissable:!1}),"onClick"),children:"Non-dismissable, 10 seconds"})]}),s.jsx(n,{})]})},"Default");o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const b=["Default"];export{o as Default,b as __namedExportsOrder,p as default};
