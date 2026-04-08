import{r as i,j as c}from"./iframe-BaUVsogD.js";import{M as o}from"./SearchField-BG-HK4fX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-lARy5TPT.js";import"./MagnifyingGlass-DyxA-WAG.js";import"./useId-D8i_et7Z.js";import"./XMark-vPSUBj6u.js";import"./FieldBase-CZ-07bnd.js";import"./Typography-BHJ2EAGl.js";import"./useHighlightedText-C23yE0pM.js";import"./Skeleton-yH6qNAEo.js";import"./Label-Cge6OnF8.js";import"./index-D4SJX6je.js";import"./use-merge-refs-BV0MipOU.js";import"./lite-DaUVFjkg.js";import"./Input-BHiIXP8Y.js";import"./input-C1CvvkMg.js";import"./Button-mtd2C5dd.js";import"./button-BfXez8v8.js";import"./MenuListItem-Bh_jPdY2.js";import"./MenuListHeading-B40v5QW5.js";import"./MenuItem-6c1J0YV3.js";import"./ItemMedia-BVGZtNsE.js";import"./Avatar-u9iGVwtH.js";import"./AvatarGroup-DFVM-aUE.js";import"./Icon-7hKeNARf.js";import"./Checkmark-DTahSgDV.js";import"./Heading-Cdi1sqyd.js";import"./ChevronRight-sVn034m6.js";import"./Badge-DkZxiFUy.js";import"./useMenu-DnkwvAkg.js";import"./InformationSquare-CDbyjiK5.js";const F={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
