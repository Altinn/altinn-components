import{aa as m,a7 as o,c as l}from"./iframe-Byxtd80g.js";import{B as r}from"./BookmarkModal-CZUsMr5_.js";import"./preload-helper-PPVm8Dsz.js";import"./SettingsModal-WDsBlCXN.js";import"./ModalBody-Cv8Rj8gS.js";import"./Section-BiXimCdL.js";import"./Flex-DvsQk1i3.js";import"./Avatar-DhukG_GJ.js";import"./AvatarGroup-CWET-veu.js";import"./Heading-MBvMqbLo.js";import"./useHighlightedText-Cf3y_8YK.js";import"./ButtonGroup-DCrOTCLv.js";import"./ButtonIcon-CXrG2Sb4.js";import"./ButtonLabel-7acsPO9C.js";import"./MagnifyingGlass-DByXWuC9.js";import"./QueryLabel-DnOFkVTS.js";import"./Plus-Baef_WWy.js";import"./TextField-WU3s1dS7.js";import"./FieldBase-BpV90x03.js";import"./Typography-B9U7pBH4.js";import"./Field-D8NU1WP1.js";import"./Label-BN9gSRd7.js";import"./Input-De6ZM0cy.js";const _={title:"Bookmarks/BookmarkModal",component:r,args:{title:"Lagre søk",params:[{type:"search",label:"skatt"},{type:"filter",label:"Krever handling"}],titleField:{placeholder:"Uten navn"},buttons:[{label:"Lagre"},{label:"Avbryt",variant:"outline"}]},parameters:{layout:"centered"}},t=a=>{const[n,p]=m.useState(!0),e=()=>{p(s=>!s)};return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:e,children:"Open modal"}),o.jsx(r,{...a,open:n,onClose:e})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,_ as default};
