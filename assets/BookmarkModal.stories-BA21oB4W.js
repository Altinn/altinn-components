import{aa as m,a7 as o,c as l}from"./iframe-DJnynaCo.js";import{B as r}from"./BookmarkModal-Dt7paQLe.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-3TFzA_aN.js";import"./ModalBody-cEHsgsLM.js";import"./Section-CrYFAueX.js";import"./Flex-DolhwIS-.js";import"./Avatar-BkXKEErw.js";import"./AvatarGroup-C7fA72SD.js";import"./Heading-DlyjjAZZ.js";import"./useHighlightedText-CYNOolzk.js";import"./ButtonGroup-BNd80tZA.js";import"./ButtonIcon-CQYxhvkg.js";import"./ButtonLabel-Dj11Yzi6.js";import"./MagnifyingGlass-D5ryHey3.js";import"./QueryLabel-CXwlxZCc.js";import"./Plus-Ddr8PqBX.js";import"./TextField-Cj0UT2Iw.js";import"./FieldBase-D0EiQS06.js";import"./Typography-CiLhkoi6.js";import"./Field-CUMpXqzl.js";import"./Label-DeMCQWn2.js";import"./Input-BYb8Xo7l.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
