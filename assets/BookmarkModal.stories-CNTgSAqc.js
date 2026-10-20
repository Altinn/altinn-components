var l=Object.defineProperty;var a=(e,r)=>l(e,"name",{value:r,configurable:!0});import{aa as i,a7 as o,c}from"./iframe-uBWg0zsp.js";import{B as p}from"./BookmarkModal-Dh_LYm_B.js";import"./preload-helper-Cc2_yIPf.js";import"./SettingsModal-BznIzZKL.js";import"./ModalBody-BN9ps4gr.js";import"./Section-B5mZZWwm.js";import"./Flex-DndVrHjj.js";import"./Avatar-B2zjqVbH.js";import"./AvatarGroup-X4pMTDtc.js";import"./Heading-B2wyz-tz.js";import"./useHighlightedText-SyZl2q2q.js";import"./ButtonGroup-C6ZuBQRD.js";import"./ButtonIcon-CRTvNn4A.js";import"./ButtonLabel-BCgwFtnQ.js";import"./MagnifyingGlass-BtelB3DZ.js";import"./QueryLabel-BuGqoiMg.js";import"./Plus-BMtrBUYo.js";import"./TextField-Bm0uOHKU.js";import"./FieldBase-Bze69qIO.js";import"./Typography-nYxE8-3g.js";import"./Field-CRhxlWe8.js";import"./Label-BasS1jKP.js";import"./Input-BX-kD412.js";const P={title:"Bookmarks/BookmarkModal",component:p,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a(e=>{const[r,s]=i.useState(!0),n=a(()=>{s(m=>!m)},"onToggle");return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:n,children:"Open modal"}),o.jsx(p,{...e,open:r,onClose:n})]})},"Default");t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,P as default};
