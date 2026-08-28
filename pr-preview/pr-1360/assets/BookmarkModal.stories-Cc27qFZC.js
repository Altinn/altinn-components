import{aa as m,a7 as o,c as l}from"./iframe-BRgClhpr.js";import{B as r}from"./BookmarkModal-BsHuoD-f.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-DtDMfpcs.js";import"./ModalBody-B3ugA79U.js";import"./Section-vNolLCey.js";import"./Flex-A0QnVpm8.js";import"./Avatar-X_UXtw_G.js";import"./AvatarGroup-Tv1EoB7j.js";import"./Heading-D9ujzuNV.js";import"./useHighlightedText-DTOSK592.js";import"./ButtonGroup-Ce1vy6GX.js";import"./ButtonIcon-CvMB-V2D.js";import"./ButtonLabel-DsKejs7R.js";import"./MagnifyingGlass-DQctf2To.js";import"./QueryLabel-DGuFu2RL.js";import"./Plus-Bhd65Ctm.js";import"./TextField-BidQRnSi.js";import"./FieldBase-D8LAV1W4.js";import"./Typography-BKJ9hmvo.js";import"./Field-DqCTTwOm.js";import"./Label-BrO-Curr.js";import"./Input-C7r6_Ftd.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
