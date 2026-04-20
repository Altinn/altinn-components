import{r as i,j as c}from"./iframe-CULgtZWU.js";import{M as o}from"./SearchField-D5aR-gNH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvBdYXxj.js";import"./MagnifyingGlass-B-SEPcNi.js";import"./useId-COk2q28h.js";import"./XMark-BCb0_aBA.js";import"./FieldBase-DGffeSDz.js";import"./Typography-BrN0KsEX.js";import"./useHighlightedText-BLw72BO7.js";import"./Skeleton-B_F13Udl.js";import"./Label-TPhVVF1y.js";import"./index-DY3DIpTU.js";import"./use-merge-refs-BFFvRczq.js";import"./lite-DaUVFjkg.js";import"./Input-C5uL5M8v.js";import"./input-CIkisq6p.js";import"./Button-EDUaKVqz.js";import"./button-DZmMky1p.js";import"./MenuListItem-bQ_fc2Ge.js";import"./MenuListHeading-gj1aWH_N.js";import"./MenuItem-ByRPat9U.js";import"./ItemMedia-CstP66eQ.js";import"./Avatar-DIXtsktU.js";import"./AvatarGroup-C5aSOTjU.js";import"./Icon-G4wS9E1h.js";import"./Checkmark-DEc7m9Qo.js";import"./Heading-QgrsV_VA.js";import"./ItemControls-RibfoZmh.js";import"./ChevronRight-Q1coQceW.js";import"./Badge-CMQ7i3tF.js";import"./useMenu-Do_nneWd.js";import"./InformationSquare-C8Qq6I-D.js";const G={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
