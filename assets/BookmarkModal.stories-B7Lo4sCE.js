import{aa as m,a7 as o,c as l}from"./iframe-DE6S9aZ4.js";import{B as r}from"./BookmarkModal-D_NBj-J2.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-C8iA9LGz.js";import"./ModalBody-Buzt5Y32.js";import"./Section-y38TddTh.js";import"./Flex-DAi1mqH2.js";import"./Avatar-CNN7KBYB.js";import"./AvatarGroup-kG5dzOiP.js";import"./Heading-BDklncvD.js";import"./useHighlightedText-C20f3R5e.js";import"./ButtonGroup-DMo1vjo2.js";import"./ButtonIcon-BPhBRYr6.js";import"./ButtonLabel-BM1cuKZU.js";import"./MagnifyingGlass-Cw9dgxbo.js";import"./QueryLabel-DQ8-tcRQ.js";import"./Plus-CwXksV0j.js";import"./TextField-kCiQvilu.js";import"./FieldBase-Dqt8MJKx.js";import"./Typography-Cfn_aMgf.js";import"./Field-CqVl0h_R.js";import"./Label-MWSbEF7h.js";import"./Input-DHBuxbkq.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
