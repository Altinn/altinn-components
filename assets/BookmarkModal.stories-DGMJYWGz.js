import{s,p as o}from"./iframe-D7BK96qe.js";import{B as e}from"./BookmarkModal-Bqbar0-E.js";import{B as i}from"./Button-UbmuloFB.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-ygENr3l7.js";import"./ModalBody-CO_In9L6.js";import"./Section-G7MRDbZ9.js";import"./index-CL9j6gFH.js";import"./Flex-DKrdkBVD.js";import"./XMark-DKvmykI8.js";import"./useId-B1IjdNvC.js";import"./Icon-CXOWvudR.js";import"./Skeleton-C-TQnNEe.js";import"./Avatar-BzaJ_tLr.js";import"./AvatarGroup-BXGOcJTt.js";import"./Heading-Q-ep_pj6.js";import"./useHighlightedText-C3262gRX.js";import"./ButtonGroup-DiPjg2lm.js";import"./ButtonIcon-DuHIMlrP.js";import"./ButtonLabel-fpKRE7dz.js";import"./MagnifyingGlass-B3Q8Qlgl.js";import"./QueryLabel-CFET3oqh.js";import"./Plus-C-8iSYwG.js";import"./TextField-CdGCjvMA.js";import"./FieldBase-DmZ-AQhF.js";import"./Typography-CoOY9SxO.js";import"./Label-DW0yr3EV.js";import"./tooltip-B8elfXS-.js";import"./Input-wwG44gvy.js";const q={title:"Bookmarks/BookmarkModal",component:e,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=s.useState(!0),r=()=>{p(m=>!m)};return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:r,children:"Open modal"}),o.jsx(e,{...a,open:n,onClose:r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,q as default};
