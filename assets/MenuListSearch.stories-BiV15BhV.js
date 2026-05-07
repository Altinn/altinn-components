import{r as i,j as c}from"./iframe-Cqj3AiBb.js";import{M as o}from"./SearchField-qenOIdRZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CHG1hv9Q.js";import"./MagnifyingGlass-fMCV_alc.js";import"./useId-Bi-DL88I.js";import"./XMark-ReENydG3.js";import"./FieldBase-DDsWnoQi.js";import"./Typography-CV-E4tqG.js";import"./useHighlightedText-Cyl54eZj.js";import"./Skeleton-B33vAz-c.js";import"./Label-URmODKr6.js";import"./index-BZqr7PxG.js";import"./use-merge-refs-CZYKnUm1.js";import"./lite-DaUVFjkg.js";import"./Input-BUdc9Inw.js";import"./input-DoJ0-ffR.js";import"./Button-DYwdzfZG.js";import"./button-CcZ_KMhQ.js";import"./MenuListItem-BGLPSqCo.js";import"./MenuListHeading-CixMX2n6.js";import"./MenuItem-BHtFBHA3.js";import"./ItemMedia-DihsrAKt.js";import"./Avatar-D1U6ps5a.js";import"./AvatarGroup-CmMUwf3A.js";import"./Icon-CHi77IUK.js";import"./Checkmark-BFwQvgMU.js";import"./Heading-CJiOkJPI.js";import"./ItemControls-eJMUKPOH.js";import"./ChevronRight-CxmxTIkT.js";import"./Badge-Bd1M9WZo.js";import"./Tooltip-D1gbXzps.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CKPILulU.js";import"./index-hX5sl0T5.js";import"./InformationSquare-DK31GEUT.js";const N={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const U=["Default","WithState"];export{t as Default,r as WithState,U as __namedExportsOrder,N as default};
