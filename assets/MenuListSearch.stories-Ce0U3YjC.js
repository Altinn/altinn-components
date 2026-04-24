import{r as i,j as c}from"./iframe-Dip44woq.js";import{M as o}from"./SearchField-B2BM1-WP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B24kaf2B.js";import"./MagnifyingGlass-B4ceu0rd.js";import"./useId-CMLjH0Fx.js";import"./XMark-CynTM0oO.js";import"./FieldBase-BLO6-Mjz.js";import"./Typography-9n0VU0yu.js";import"./useHighlightedText-DVvgBsxZ.js";import"./Skeleton-CxN7sZWy.js";import"./Label-BJSes-CJ.js";import"./index-kI5T7Faz.js";import"./use-merge-refs-BdW2KKDT.js";import"./lite-DaUVFjkg.js";import"./Input-BEs0_VSa.js";import"./input-BsOq1nZd.js";import"./Button-afp2Zwog.js";import"./button-CZ5tfceY.js";import"./MenuListItem-miXGiz4v.js";import"./MenuListHeading-BQZIqP1w.js";import"./MenuItem-BJUggRUL.js";import"./ItemMedia-5XSAaYKs.js";import"./Avatar-kiiFl4Mz.js";import"./AvatarGroup-sgYryoRH.js";import"./Icon-B7B4bUSp.js";import"./Checkmark-DnUC-Av1.js";import"./Heading-BGLknJpX.js";import"./ItemControls-CIGgXmTN.js";import"./ChevronRight-DRGzZC3s.js";import"./Badge-Bm1FFy1R.js";import"./Tooltip-D3ALbI7V.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BX85xV5m.js";import"./InformationSquare-Cyt3NFHk.js";const K={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
