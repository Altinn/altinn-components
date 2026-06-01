import{aa as i,a7 as c}from"./iframe-CAfDO4Rw.js";import{b as o}from"./SearchField-CVnH2ZZ_.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-CAS5EVy6.js";import"./FieldBase-E5ODadVE.js";import"./Typography-CTt20h0e.js";import"./useHighlightedText-D1Egz4xv.js";import"./Field-CeOsIMBN.js";import"./Label-Dty_TUWJ.js";import"./Input-xoXFTL9F.js";import"./useMenu-BpN0JSlm.js";import"./MenuListItem-qxQn0xnV.js";import"./MenuListHeading-DQuMrLgT.js";import"./MenuItem-CDhdlBX8.js";import"./ItemMedia-C1xz5qH-.js";import"./Avatar-CgZyFHuO.js";import"./AvatarGroup-wzegiK4S.js";import"./Checkmark-DWkR78Cr.js";import"./ItemLabel-CW9F7Ljc.js";import"./Heading-YvXsCKAz.js";import"./ItemControls-DVGHNPwh.js";import"./Badge-2r7QR-Ea.js";import"./Tooltip-CnjxI-as.js";import"./ChevronRight-CMD5YJ4n.js";import"./index-B1ZW1R_L.js";import"./InformationSquare-Dty64Wjx.js";const R={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
