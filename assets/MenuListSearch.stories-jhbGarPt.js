import{r as i,j as c}from"./iframe-yBEatwQ0.js";import{M as o}from"./SearchField-Dq16b7ar.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7J_eA84.js";import"./MagnifyingGlass-SlzD67D9.js";import"./useId-DyCIbqyR.js";import"./XMark-DRdfunCf.js";import"./FieldBase-DJNauVgJ.js";import"./Typography-ggurnZ72.js";import"./useHighlightedText-Dt8J34OD.js";import"./Skeleton-D2AOT5bt.js";import"./Label-jtu-OMH2.js";import"./index-4yM6tgpO.js";import"./use-merge-refs-BCyRe6aJ.js";import"./lite-DaUVFjkg.js";import"./Input-BprGT-wl.js";import"./input-ByeiaQUe.js";import"./Button-Du_F5DdO.js";import"./button-DDduZyu8.js";import"./MenuListItem-BYxhnGHY.js";import"./MenuListHeading-CMUrUTJP.js";import"./MenuItem-DG7ysQbI.js";import"./ItemMedia-po0tYTET.js";import"./Avatar-BHAY-jNJ.js";import"./AvatarGroup-Em3MhneF.js";import"./Icon-m6GSRHhZ.js";import"./Checkmark-BOqpEP7R.js";import"./Heading-gNorXCZa.js";import"./ItemControls-CsC9idfH.js";import"./ChevronRight-DNoffWLc.js";import"./Badge-Bt5kdhhY.js";import"./useMenu-DUoC-ldr.js";import"./InformationSquare-CID74XMT.js";const G={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const J=["Default","WithState"];export{t as Default,r as WithState,J as __namedExportsOrder,G as default};
