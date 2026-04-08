import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./Button-L6T5IVdq.js";import{t as i}from"./BookmarkModal-AfOEB1sy.js";var a=e(t(),1),o=n(),s={title:`Bookmarks/BookmarkModal`,component:i,args:{title:`Lagre søk`,params:[{type:`search`,label:`skatt`},{type:`filter`,label:`Krever handling`}],titleField:{placeholder:`Uten navn`},buttons:[{label:`Lagre`},{label:`Avbryt`,variant:`outline`}]},parameters:{layout:`centered`}},c=e=>{let[t,n]=(0,a.useState)(!0),s=()=>{n(e=>!e)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{onClick:s,children:`Open modal`}),(0,o.jsx)(i,{...e,open:t,onClose:s})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: BookmarkModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const onToggle = () => {
    setOpen(prevState => !prevState);
  };
  return <>
      <Button onClick={onToggle}>Open modal</Button>
      <BookmarkModal {...args} open={open} onClose={onToggle} />
    </>;
}`,...c.parameters?.docs?.source}}};var l=[`Default`];export{c as Default,l as __namedExportsOrder,s as default};