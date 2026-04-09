import{r as i,j as c}from"./iframe-DgiLb7Jh.js";import{M as o}from"./SearchField-CTb1s1hd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CzzvqmNv.js";import"./MagnifyingGlass-C5v4zKU0.js";import"./useId-6J1VG5PF.js";import"./XMark-DE16CL-6.js";import"./FieldBase-B0t89PB6.js";import"./Typography-Bp8CNLT3.js";import"./useHighlightedText-C3KXFHAg.js";import"./Skeleton-CjXkBVSw.js";import"./Label-6LQ7LXNA.js";import"./index-Cu0iGtDM.js";import"./use-merge-refs-CpvzIuY-.js";import"./lite-DaUVFjkg.js";import"./Input-Cmck_kaL.js";import"./input-BBC2L6cA.js";import"./Button-D7CoEZHH.js";import"./button-2pQtb28r.js";import"./MenuListItem-BzaUHJzz.js";import"./MenuListHeading-BHx30WUA.js";import"./MenuItem-CM4esdkj.js";import"./ItemMedia-BvSNOAVc.js";import"./Avatar-D2ea3_hU.js";import"./AvatarGroup-BGNg7yRW.js";import"./Icon-uoDJWBW9.js";import"./Checkmark-49Lv_3MM.js";import"./Heading-CAIwUoS2.js";import"./ChevronRight-B8GqJ6hU.js";import"./Badge-DFo-bNGw.js";import"./useMenu-7q5OpfBf.js";import"./InformationSquare-CZhEVvng.js";const F={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
