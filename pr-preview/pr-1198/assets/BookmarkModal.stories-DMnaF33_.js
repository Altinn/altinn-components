import{r as s,j as o}from"./iframe-YdRL1NzV.js";import{B as e}from"./BookmarkModal-uioo9agG.js";import{B as i}from"./Button-BwQOxknK.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-CSoyY2cF.js";import"./ModalBody-CTEW1e2E.js";import"./Section-Bmd_KobT.js";import"./index-SoIsie1y.js";import"./Flex-8MCCOfGV.js";import"./XMark-1l7ZvP46.js";import"./useId-DxHKrSZ4.js";import"./Icon-B4-srULI.js";import"./Skeleton-C3i9Ug5T.js";import"./Avatar-02T2Z9c_.js";import"./AvatarGroup-B9OCrS5P.js";import"./Heading-56B0sdRG.js";import"./useHighlightedText-DI-ykGTt.js";import"./ButtonGroup-BTJ07o1P.js";import"./ButtonIcon-c6Xu1QVp.js";import"./ButtonLabel-DtM2G-uP.js";import"./MagnifyingGlass-C6-V8ObG.js";import"./QueryLabel-BLfanfjW.js";import"./Plus-BNGbhyZ6.js";import"./TextField-BcGNRTBS.js";import"./FieldBase-KNsWphki.js";import"./Typography-CYgzLoEf.js";import"./Label-CoBwam8t.js";import"./tooltip-D0NJwlFT.js";import"./Input-Co3wY2OB.js";const q={title:"Bookmarks/BookmarkModal",component:e,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=s.useState(!0),r=()=>{p(m=>!m)};return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:r,children:"Open modal"}),o.jsx(e,{...a,open:n,onClose:r})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,q as default};
