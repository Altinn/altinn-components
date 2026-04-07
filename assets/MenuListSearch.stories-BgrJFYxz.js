import{r as i,j as c}from"./iframe-D8UVhXtj.js";import{M as o}from"./SearchField-DrqRDMva.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DZ6CWLt4.js";import"./MagnifyingGlass-Dwu8NLc_.js";import"./useId-B_5z_sER.js";import"./XMark-RzwOtF1Q.js";import"./FieldBase-DzrGcQVO.js";import"./Typography-n-xWt5s-.js";import"./useHighlightedText-CniNcpSk.js";import"./Skeleton-DuOqXwDT.js";import"./Label-b2Pkfnmh.js";import"./index-B_UnVtHx.js";import"./use-merge-refs-PJHuZtY5.js";import"./lite-DaUVFjkg.js";import"./Input-CeOaqFsx.js";import"./input-Dh6CJXOW.js";import"./Button-C1dDhU4f.js";import"./button-BAeX-ygn.js";import"./MenuListItem-D2rOlDhJ.js";import"./MenuListHeading-BCjwSnwp.js";import"./MenuItem-D_QGB2bx.js";import"./ItemMedia-D1B_6Nv6.js";import"./Avatar-DcRqiXhT.js";import"./AvatarGroup-DAqs7ZMl.js";import"./Icon-DPTwfvyC.js";import"./Checkmark-DOivg6Pe.js";import"./Heading-BAduz1Vr.js";import"./ChevronRight-BBMrC_JJ.js";import"./Badge-FbSzRhwU.js";import"./useMenu-Bi-E8KDv.js";import"./InformationSquare-BUh6v1hF.js";const F={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
