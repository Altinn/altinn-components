var i=Object.defineProperty;var e=(s,t)=>i(s,"name",{value:t,configurable:!0});import{J as r,ah as c,a5 as n,b as o}from"./iframe-k-5ppgch.js";import{F as l}from"./Flex-DfG9uaWh.js";import"./preload-helper-Cc2_yIPf.js";const p={title:"Layout/Snackbar",component:r,tags:["autodocs","beta"],parameters:{},args:{}},a=e(()=>{const{openSnackbar:s}=c();return n.jsxs("div",{children:[n.jsxs(l,{direction:"row",spacing:3,children:[n.jsx(o,{onClick:e(()=>s({message:"Message",color:"danger",duration:1e3,dismissable:!0}),"onClick"),children:"Alert"}),n.jsx(o,{onClick:e(()=>s({message:"This is a longer message",color:"company",duration:1e3,dismissable:!0}),"onClick"),children:"Accent"}),n.jsx(o,{onClick:e(()=>s({message:"Message",color:"danger",duration:1e3*10,dismissable:!1}),"onClick"),children:"Non-dismissable, 10 seconds"})]}),n.jsx(r,{})]})},"Default"),b=["Default"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};export{a as Default,b as __namedExportsOrder,p as default};
