"use client";import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{n as t}from"./SnackbarItem-BKvrCBQ1.js";import{n}from"./useSnackbar-DWpaQQBK.js";import{t as r}from"./Button-L6T5IVdq.js";import{t as i}from"./Flex-SBjIXoOg.js";var a={stack:`_stack_ilsfl_1`},o=e(),s=({children:e})=>(0,o.jsx)(`section`,{className:a.stack,children:e}),c=({className:e})=>{let{storedMessages:r,open:i,closeSnackbarItem:a}=n();return i?(0,o.jsx)(s,{className:e,children:(r||[]).map(e=>(0,o.jsx)(t,{onDismiss:()=>a(e.id),dismissable:e.dismissable,...e},e.id))}):null},l={title:`Layout/Snackbar`,component:c,tags:[`autodocs`,`beta`],parameters:{},args:{}},u=()=>{let{openSnackbar:e}=n();return(0,o.jsxs)(`div`,{children:[(0,o.jsxs)(i,{direction:`row`,spacing:3,children:[(0,o.jsx)(r,{onClick:()=>e({message:`Message`,color:`danger`,duration:1e3,dismissable:!0}),children:`Alert`}),(0,o.jsx)(r,{onClick:()=>e({message:`This is a longer message`,color:`company`,duration:1e3,dismissable:!0}),children:`Accent`}),(0,o.jsx)(r,{onClick:()=>e({message:`Message`,color:`danger`,duration:1e3*10,dismissable:!1}),children:`Non-dismissable, 10 seconds`})]}),(0,o.jsx)(c,{})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};var d=[`Default`];export{u as Default,d as __namedExportsOrder,l as default};