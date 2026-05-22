import{r as i,j as c}from"./iframe-C6Awlou2.js";import{M as o}from"./SearchField-BUnYpq_7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DlBZqmFk.js";import"./MagnifyingGlass-CS4fCaYb.js";import"./useId-InpKFtFj.js";import"./XMark-BEbAfGHw.js";import"./FieldBase-D62sKxwt.js";import"./Typography-B5eitD86.js";import"./useHighlightedText-BOeqc4_T.js";import"./Skeleton-Dzw9idTE.js";import"./Label-C48-SpFn.js";import"./tooltip-wBWP-9p3.js";import"./Input-DYyIZxUH.js";import"./Button-xDUaTd0f.js";import"./MenuListItem-DEkjbPAb.js";import"./MenuListHeading-0XPhJCtv.js";import"./MenuItem-DvRDzq7X.js";import"./ItemMedia-C094egTG.js";import"./Avatar-CJAvXADO.js";import"./AvatarGroup-CCkWNWoM.js";import"./Icon-DNxmTYNY.js";import"./Checkmark-dLQcEakJ.js";import"./Heading-CwC0m1gc.js";import"./ItemControls-vVSkFb-5.js";import"./ChevronRight-BPFGJ1iV.js";import"./Badge-4PTsP983.js";import"./Tooltip-CsuAugEU.js";import"./useMenu-CAczdzUV.js";import"./index-C-MjzqYY.js";import"./InformationSquare-DNjiq8ws.js";const B={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const F=["Default","WithState"];export{t as Default,r as WithState,F as __namedExportsOrder,B as default};
