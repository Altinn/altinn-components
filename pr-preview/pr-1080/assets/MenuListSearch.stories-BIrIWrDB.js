import{r as i,j as c}from"./iframe-CRyMHjBa.js";import{M as o}from"./SearchField-DHI_G06y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DHHnxdIx.js";import"./MagnifyingGlass-XVKvC6WT.js";import"./useId-Gvikg1Q9.js";import"./XMark-Bzo2iZ4y.js";import"./FieldBase-CJQ_rSUH.js";import"./Typography-KJ3duhAj.js";import"./useHighlightedText-Bmeo4cMl.js";import"./Skeleton-CU7lBKK8.js";import"./Label-BTqPQVQX.js";import"./index-DK7gfoBf.js";import"./use-merge-refs-BY8NGhF3.js";import"./lite-DaUVFjkg.js";import"./Input-Dhhr3RHW.js";import"./input-BbNQnC6I.js";import"./Button-CrFbX_o6.js";import"./button-W5jAAf--.js";import"./MenuListItem-DntYuD8P.js";import"./MenuListHeading-BM8Os7Ca.js";import"./MenuItem-BP5FkdDy.js";import"./ItemMedia-C-5aGPRT.js";import"./Avatar-CTjQUhWB.js";import"./AvatarGroup-B0xdyHS8.js";import"./Icon-BfxILC1T.js";import"./Checkmark-DF0LRIQJ.js";import"./Heading-DKMjfDI1.js";import"./ChevronRight-CBrYYsjR.js";import"./Badge-DxjDnsAp.js";import"./useMenu-lx2RC1HO.js";import"./InformationSquare-BIUK32sG.js";const F={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
