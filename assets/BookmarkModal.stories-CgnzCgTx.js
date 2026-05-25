import{r as s,j as o}from"./iframe-BFO1Hsm7.js";import{B as e}from"./BookmarkModal-DRyhgW3y.js";import{B as i}from"./Button-D67YnkXJ.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DOhzTr3z.js";import"./ModalBody-ZdU_Iwx_.js";import"./Section-D_8M4GBJ.js";import"./index-q4P8UESO.js";import"./Flex-QSO1QCFn.js";import"./XMark-DHT-JiZe.js";import"./useId-Bk4Ffxqs.js";import"./Icon-B4PZu81w.js";import"./Skeleton-BRac3_14.js";import"./Avatar-KSmNIbNE.js";import"./AvatarGroup-V6EVtbEK.js";import"./Heading-BaJonbem.js";import"./useHighlightedText-BBNMb3RU.js";import"./ButtonGroup-VRxYnWM6.js";import"./ButtonIcon-kFKVjrxN.js";import"./ButtonLabel-0Y2_Ghd1.js";import"./MagnifyingGlass-BT5t3YH7.js";import"./QueryLabel-BnybXsgq.js";import"./Plus-CzDIu3KD.js";import"./TextField-LW3IKJUT.js";import"./FieldBase-BLwJwwaJ.js";import"./Typography-Bd9N_lP-.js";import"./Label-D5tsUrXq.js";import"./tooltip-DUJ67ouq.js";import"./Input-D60Cokb5.js";const q={title:"Bookmarks/BookmarkModal",component:e,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=s.useState(!0),r=()=>{p(m=>!m)};return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:r,children:"Open modal"}),o.jsx(e,{...a,open:n,onClose:r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,q as default};
