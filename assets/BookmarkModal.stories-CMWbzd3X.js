import{s,p as o}from"./iframe-HmDeAVAp.js";import{B as e}from"./BookmarkModal-D4BYig0c.js";import{B as i}from"./Button-SB9AH0kY.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-CygK-Zxf.js";import"./ModalBody-HgcUYgus.js";import"./Section-0rDkal-t.js";import"./index-CDtevUxF.js";import"./Flex-CKAWkLAd.js";import"./XMark-DFSmJjac.js";import"./useId-BNhfXdUV.js";import"./Icon-DE5JaAj2.js";import"./Skeleton-C_Dxe6ID.js";import"./Avatar-CUX9SLHz.js";import"./AvatarGroup-CpvcYsvD.js";import"./Heading-CYuK0FXt.js";import"./useHighlightedText-CVbcsWEJ.js";import"./ButtonGroup-IIZdVlDD.js";import"./ButtonIcon-CIUJ6U7l.js";import"./ButtonLabel-fQ3RMke8.js";import"./MagnifyingGlass-BBPHMis4.js";import"./QueryLabel-BRRwgwPe.js";import"./Plus-DQEVi2NZ.js";import"./TextField-CQ0deXKf.js";import"./FieldBase-DgiW3HLY.js";import"./Typography-C3y2BBzr.js";import"./Field-D-jjHIb3.js";import"./tooltip-DaXe8rKK.js";import"./Label-Bwfk_b4F.js";import"./Input-Dd7kdPyi.js";const w={title:"Bookmarks/BookmarkModal",component:e,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[p,n]=s.useState(!0),r=()=>{n(m=>!m)};return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:r,children:"Open modal"}),o.jsx(e,{...a,open:p,onClose:r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const z=["Default"];export{t as Default,z as __namedExportsOrder,w as default};
