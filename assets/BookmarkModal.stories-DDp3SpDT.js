import{r as s,j as o}from"./iframe-CXxOXnma.js";import{B as e}from"./BookmarkModal-C4cVVEB-.js";import{B as i}from"./Button-Dot-dF6F.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-BLUe9oqE.js";import"./ModalBody-JOibBxNi.js";import"./Section-BI582Rxy.js";import"./index-DvzmMrBu.js";import"./Flex-Cdw8i_ge.js";import"./XMark-DvGwYctt.js";import"./useId-CYy4MNIP.js";import"./Icon-CyU2k-nr.js";import"./Skeleton-DaZzKoDP.js";import"./Avatar-De_JFqYW.js";import"./AvatarGroup-DdK_Ls54.js";import"./Heading-CD_Q6pfI.js";import"./useHighlightedText-Cggf4nMP.js";import"./ButtonGroup-DA7guRJP.js";import"./ButtonIcon-DRTRl_zA.js";import"./ButtonLabel-BtrlG-5t.js";import"./MagnifyingGlass-D50FbQFC.js";import"./QueryLabel-sjyVTaOI.js";import"./Plus-52Qbrw3J.js";import"./TextField-Q7sM8aCe.js";import"./FieldBase-DpHGffp6.js";import"./Typography-4yj_ylkx.js";import"./Label-CsbjAOhP.js";import"./tooltip-F-8CLWbq.js";import"./Input-jSu8pVt5.js";const q={title:"Bookmarks/BookmarkModal",component:e,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=s.useState(!0),r=()=>{p(m=>!m)};return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:r,children:"Open modal"}),o.jsx(e,{...a,open:n,onClose:r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,q as default};
