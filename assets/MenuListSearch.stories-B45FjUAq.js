import{r as i,j as c}from"./iframe-B56t8i7v.js";import{M as o}from"./SearchField-BtQfQfgA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CHgNdXFp.js";import"./MagnifyingGlass-U17pnqdh.js";import"./useId-Ce_44NzT.js";import"./XMark-CQR84vCO.js";import"./FieldBase-BkGCBc8B.js";import"./Typography-C36VcWyw.js";import"./useHighlightedText-YMvuFtwb.js";import"./Skeleton-Cer98cLN.js";import"./Label-Bx5THtMF.js";import"./index-pNH6Tvi1.js";import"./use-merge-refs-CJ3sV19d.js";import"./lite-DaUVFjkg.js";import"./Input-DqVNSGAW.js";import"./input-CtI4L4z7.js";import"./Button-x4ugPYkx.js";import"./button-BSGP1CSM.js";import"./MenuListItem-D1jjv5iI.js";import"./MenuListHeading-B46vfCnX.js";import"./MenuItem-CtKw3GMz.js";import"./ItemMedia-DJxakqLL.js";import"./Avatar-_1995Z8x.js";import"./AvatarGroup-kqIJtB4O.js";import"./Icon-CgN9F-ql.js";import"./Checkmark-cFLQXWmW.js";import"./Heading-B0k14T1s.js";import"./ItemControls-DurpuKFn.js";import"./ChevronRight-VYKVaZtU.js";import"./Badge-DuKldjFD.js";import"./Tooltip-uv_ZTnws.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-Bz8Gr0jh.js";import"./InformationSquare-TMwz5OzD.js";const K={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
