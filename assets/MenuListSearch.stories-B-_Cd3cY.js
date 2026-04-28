import{r as i,j as c}from"./iframe-DUgQHy5z.js";import{M as o}from"./SearchField-DrvAfAqD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CHKdKrFD.js";import"./MagnifyingGlass-Bvm8HrPp.js";import"./useId-BEmmm-9F.js";import"./XMark-CIC6hSAY.js";import"./FieldBase-B3m8Pe0B.js";import"./Typography-CInfIHKg.js";import"./useHighlightedText-BXy_Fo0F.js";import"./Skeleton-BWHbMU5J.js";import"./Label-B-nIzD7x.js";import"./index-DtFuKRqq.js";import"./use-merge-refs-tN_UguZ4.js";import"./lite-DaUVFjkg.js";import"./Input-DxofbABb.js";import"./input-BKf2w74T.js";import"./Button-DAj4Vb1f.js";import"./button-D0axoqj3.js";import"./MenuListItem-Cobo65pu.js";import"./MenuListHeading-USeQ6WLV.js";import"./MenuItem-rAhK0ZP8.js";import"./ItemMedia-CtpZg4yw.js";import"./Avatar-CQy8D3NB.js";import"./AvatarGroup-DAp73R1d.js";import"./Icon-D31Usj2D.js";import"./Checkmark-CEKDqcfc.js";import"./Heading-CGuufgH4.js";import"./ItemControls-eEEzDso3.js";import"./ChevronRight-DcPr7c69.js";import"./Badge-Tkc8PhNy.js";import"./Tooltip-svLS9stx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-DKqXZTHj.js";import"./InformationSquare-C5uyE4ek.js";const K={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: MenuListSearchProps) => {
  const [q, setQ] = useState<string>('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQ(event.target.value);
  };
  const onClear = () => {
    setQ('');
  };
  return <MenuListSearch {...args} value={q} onChange={onChange} onClear={onClear} />;
}`,...r.parameters?.docs?.source}}};const N=["Default","WithState"];export{t as Default,r as WithState,N as __namedExportsOrder,K as default};
