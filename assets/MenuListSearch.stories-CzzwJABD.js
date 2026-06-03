import{aa as i,a7 as c}from"./iframe-pmb13xcr.js";import{b as o}from"./SearchField-xzT30cQx.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-HRL7caCa.js";import"./FieldBase-DlkZCCjW.js";import"./Typography-BgUhg-DC.js";import"./useHighlightedText-By0gZF-u.js";import"./Field-Dm0MSPIi.js";import"./Label-CxwvdH9w.js";import"./Input-CJNvWYoB.js";import"./useMenu-PFiIjJ-b.js";import"./MenuListItem-DW-1hJGg.js";import"./MenuListHeading-B2QtO_LB.js";import"./MenuItem-D_bFc04X.js";import"./ItemMedia-BGgA1RRu.js";import"./Avatar-DgFMZdvt.js";import"./AvatarGroup-C5Tz0kQR.js";import"./Checkmark-Cm7hyVD6.js";import"./ItemLabel-0x089RNk.js";import"./Heading-sU40TroH.js";import"./ItemControls-CCuuzoug.js";import"./Badge-CDoJNvMh.js";import"./Tooltip-BV9R0mmr.js";import"./ChevronRight-BcL3woie.js";import"./index-B1Y0FrCw.js";import"./InformationSquare-Bin60tyG.js";const R={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: MenuListSearchProps) => {
  const [q, setQ] = useState<string>('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQ(event.target.value);
  };
  const onClear = () => {
    setQ('');
  };
  return <MenuListSearch {...args} value={q} onChange={onChange} onClear={onClear} />;
}`,...e.parameters?.docs?.source}}};const k=["Default","WithState"];export{t as Default,e as WithState,k as __namedExportsOrder,R as default};
