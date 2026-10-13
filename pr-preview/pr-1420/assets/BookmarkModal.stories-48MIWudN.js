import{aa as m,a7 as o,c as l}from"./iframe-BidFzEoe.js";import{B as r}from"./BookmarkModal-D8iri1q7.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-Lyf15yKp.js";import"./ModalBody-BGmAjdb1.js";import"./Section-D00_D8ux.js";import"./Flex-BXtaAm49.js";import"./Avatar-BEQBdv4x.js";import"./AvatarGroup-D1zH3sob.js";import"./Heading-XBMlN0kz.js";import"./useHighlightedText-B2dzt3_l.js";import"./ButtonGroup-BDN4dAIH.js";import"./ButtonIcon-BtY_BXUj.js";import"./ButtonLabel-ym8yEuVp.js";import"./MagnifyingGlass-B4YFwzX0.js";import"./QueryLabel-qqGQLvyU.js";import"./Plus-CSCOqkzm.js";import"./TextField-mKP-hw_s.js";import"./FieldBase-q2Ok1lDz.js";import"./Typography-BKRo6hXJ.js";import"./Field-BqmdGdCd.js";import"./Label-BzAQ2d9C.js";import"./Input-D8eTVnZO.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
