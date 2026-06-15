import{aa as i,a7 as c}from"./iframe-h3kpEY-8.js";import{b as o}from"./SearchField-pLL_WmAV.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-Df6AiRyH.js";import"./FieldBase-CnX5WdHy.js";import"./Typography-ByLPxgtz.js";import"./useHighlightedText-Lwubglq6.js";import"./Field-BzJVbJyd.js";import"./Label-DRrcRV0r.js";import"./Input-BilJ5YTK.js";import"./useMenu-DIh14msT.js";import"./MenuListItem-DdKH3BDS.js";import"./MenuListDivider-BDzgWude.js";import"./MenuListHeading-B8DJ5av2.js";import"./MenuItem-CJxVZTG4.js";import"./ItemMedia-DOHb0jsR.js";import"./Avatar-xrrnEYLD.js";import"./AvatarGroup-COWd8M-x.js";import"./Checkmark-qxd_V6S7.js";import"./ItemLabel-DwG1GkVg.js";import"./Heading-Dn7fEFx7.js";import"./ItemControls-DTSXitWE.js";import"./Badge-DXobaynz.js";import"./Tooltip-DgP5yGn4.js";import"./ChevronRight-zeeAR8pp.js";import"./index-BRnuOkic.js";import"./InformationSquare-TM9O4ixW.js";const k={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const w=["Default","WithState"];export{t as Default,e as WithState,w as __namedExportsOrder,k as default};
