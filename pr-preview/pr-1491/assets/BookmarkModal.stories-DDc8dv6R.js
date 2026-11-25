var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a9 as i,a6 as o,c}from"./iframe-CmRPDbOf.js";import{B as p}from"./BookmarkModal-BSMZn9rK.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-CEuFBG6Q.js";import"./ModalBody-MM25gKZr.js";import"./Section-BoLEShm2.js";import"./Flex-CHIj3aXb.js";import"./Avatar-CwlqlX3p.js";import"./AvatarGroup-CLRHdYA5.js";import"./Heading-Bga8Ehqe.js";import"./useHighlightedText-DjvNujh0.js";import"./ButtonGroup-Cg6ykbdg.js";import"./ButtonIcon-CNrehQ60.js";import"./ButtonLabel-B207nJqR.js";import"./MagnifyingGlass-CwhdRafK.js";import"./QueryLabel-BMHDr2yF.js";import"./Plus-BIlgSaK7.js";import"./TextField-BmqYfvA4.js";import"./FieldBase-uTfpYKlO.js";import"./Typography-3Ni-pGxm.js";import"./Field-BGZ86hwn.js";import"./Label-DME-k-qs.js";import"./Input-SsfERmB5.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
