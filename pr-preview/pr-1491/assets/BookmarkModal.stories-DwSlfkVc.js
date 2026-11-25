var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{a9 as i,a6 as o,c}from"./iframe-CjTVLX0J.js";import{B as p}from"./BookmarkModal-jPNGRSAU.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-Bh9cutIH.js";import"./ModalBody-Bv7CSic6.js";import"./Section-Srp_Bqeg.js";import"./Flex-DPGhARfx.js";import"./Avatar-Bte94cY6.js";import"./AvatarGroup-C543ATGD.js";import"./Heading-iGdZKzrq.js";import"./useHighlightedText-DSpkTug-.js";import"./ButtonGroup-CI4WR3eO.js";import"./ButtonIcon-DqZCck6e.js";import"./ButtonLabel-Bj2vcKLA.js";import"./MagnifyingGlass-DkbBbRdW.js";import"./QueryLabel-B1UB3cfm.js";import"./Plus-DW7oopwP.js";import"./TextField-22K0hTJ0.js";import"./FieldBase-C5zYRo5L.js";import"./Typography-D5LJyQSI.js";import"./Field-DCjNXD15.js";import"./Label-em-S6i9n.js";import"./Input-B0rqselK.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default"),R=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};export{t as Default,R as __namedExportsOrder,P as default};
