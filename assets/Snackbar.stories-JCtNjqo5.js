import{y as n,p as s}from"./iframe-HmDeAVAp.js";import{S as r}from"./Snackbar-CnMZmwXp.js";import{F as t}from"./Flex-CKAWkLAd.js";import{B as o}from"./Button-SB9AH0kY.js";import"./preload-helper-PPVm8Dsz.js";import"./SnackbarItem-Bxz6QJuo.js";import"./index-CDtevUxF.js";import"./Icon-DE5JaAj2.js";import"./Skeleton-C_Dxe6ID.js";import"./useId-BNhfXdUV.js";import"./XMark-DFSmJjac.js";import"./tooltip-DaXe8rKK.js";const f={title:"Layout/Snackbar",component:r,tags:["autodocs","beta"],parameters:{},args:{}},e=()=>{const{openSnackbar:a}=n();return s.jsxs("div",{children:[s.jsxs(t,{direction:"row",spacing:3,children:[s.jsx(o,{onClick:()=>a({message:"Message",color:"danger",duration:1e3,dismissable:!0}),children:"Alert"}),s.jsx(o,{onClick:()=>a({message:"This is a longer message",color:"company",duration:1e3,dismissable:!0}),children:"Accent"}),s.jsx(o,{onClick:()=>a({message:"Message",color:"danger",duration:1e3*10,dismissable:!1}),children:"Non-dismissable, 10 seconds"})]}),s.jsx(r,{})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};const B=["Default"];export{e as Default,B as __namedExportsOrder,f as default};
