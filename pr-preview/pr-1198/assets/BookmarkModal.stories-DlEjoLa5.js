import{r as s,j as o}from"./iframe-DXwGEFZf.js";import{B as e}from"./BookmarkModal-NDKl0Crt.js";import{B as i}from"./Button-BcOfKjgE.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-W0duOVpO.js";import"./ModalBody-v2jc6j_q.js";import"./Section-BSKZ_Frt.js";import"./index-DpQTH4Pc.js";import"./Flex-U6liI5ZR.js";import"./XMark-BspkucHC.js";import"./useId-Df52yuGg.js";import"./Icon-DEVqj2eM.js";import"./Skeleton-CD7VUCi3.js";import"./Avatar-OxvpOCq4.js";import"./AvatarGroup-vB7eodsE.js";import"./Heading-D1SypAUR.js";import"./useHighlightedText-NV3gg9HW.js";import"./ButtonGroup-BgmjkJuw.js";import"./ButtonIcon-DRE8-f_V.js";import"./ButtonLabel-pSIef_EU.js";import"./MagnifyingGlass-CllD3bzP.js";import"./QueryLabel-CpHrmLeu.js";import"./Plus-6DEjvg57.js";import"./TextField-DxbXRgx4.js";import"./FieldBase-BwCMZAv_.js";import"./Typography-CegVoZkA.js";import"./Label-ChoE5xRO.js";import"./tooltip-OQNLf2nv.js";import"./Input-CjRvyA41.js";const q={title:"Bookmarks/BookmarkModal",component:e,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=s.useState(!0),r=()=>{p(m=>!m)};return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:r,children:"Open modal"}),o.jsx(e,{...a,open:n,onClose:r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,q as default};
