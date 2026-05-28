import{s as i,p as c}from"./iframe-DrMVe4hJ.js";import{b as o}from"./SearchField-BnuJ-svS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B2LUQ97G.js";import"./MagnifyingGlass-BYmBhmCt.js";import"./useId-CwrI0QJg.js";import"./XMark-BXMpu0Gf.js";import"./FieldBase-C4Wnopmd.js";import"./Typography-BZD6V0ik.js";import"./useHighlightedText-BA3QT9FH.js";import"./Skeleton-BKl0bJYN.js";import"./Label-QaOAiYFD.js";import"./tooltip-BY1BnveL.js";import"./Input-kqR7j7M6.js";import"./Button-B40GVZAo.js";import"./useMenu-CrRt-E4f.js";import"./MenuListItem-D8f5vRSf.js";import"./MenuListHeading-UZ0vr2Pr.js";import"./MenuItem-B27UidAs.js";import"./ItemMedia-B9-jRKLO.js";import"./Avatar-toOOZ7nf.js";import"./AvatarGroup-CVynWGO_.js";import"./Icon-CK8FcAiF.js";import"./Checkmark-OKWU0xmP.js";import"./ItemLabel-DjesYwl7.js";import"./Heading-DYwrq57L.js";import"./ItemControls-ztKmX_ZB.js";import"./Badge-BnCvYltQ.js";import"./Tooltip-BEnHuPi8.js";import"./ChevronRight-u16zgCRT.js";import"./index-j3-eoKUd.js";import"./InformationSquare-J3q8zJp8.js";const F={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[s,e]=i.useState(""),n=m=>{e(m.target.value)},p=()=>{e("")};return c.jsx(o,{...a,value:s,onChange:n,onClear:p})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const G=["Default","WithState"];export{t as Default,r as WithState,G as __namedExportsOrder,F as default};
