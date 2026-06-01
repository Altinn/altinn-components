import{aa as m,a7 as o,c as l}from"./iframe-CAfDO4Rw.js";import{B as r}from"./BookmarkModal-DQXRWtKn.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-YVbPlhU4.js";import"./ModalBody-BswaS8cy.js";import"./Section-BoMEazBp.js";import"./Flex-T7A62cDZ.js";import"./Avatar-CgZyFHuO.js";import"./AvatarGroup-wzegiK4S.js";import"./Heading-YvXsCKAz.js";import"./useHighlightedText-D1Egz4xv.js";import"./ButtonGroup-CUCgVY-r.js";import"./ButtonIcon-DGXgnp7S.js";import"./ButtonLabel-Dlfdkbnt.js";import"./MagnifyingGlass-CAS5EVy6.js";import"./QueryLabel-AutZj0NM.js";import"./Plus-Do7Jzj4H.js";import"./TextField-Ds_w_q0K.js";import"./FieldBase-E5ODadVE.js";import"./Typography-CTt20h0e.js";import"./Field-CeOsIMBN.js";import"./Label-Dty_TUWJ.js";import"./Input-xoXFTL9F.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
