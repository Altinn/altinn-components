import{aa as i,a7 as c}from"./iframe-CAjSv_nS.js";import{b as o}from"./SearchField-BeyrM52L.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-BZEvKjAk.js";import"./FieldBase-B3aukQxa.js";import"./Typography-CP4EAHNP.js";import"./useHighlightedText-BhVVUcDt.js";import"./Field-D8Qe0uka.js";import"./Label-CjI2CUCN.js";import"./Input-BnE3VUoY.js";import"./useMenu-DNlZtc9u.js";import"./MenuListItem-Cr3RaesB.js";import"./MenuListDivider-Cl5vSJ7C.js";import"./MenuListHeading-DK632LaI.js";import"./MenuItem-C500ZIIj.js";import"./ItemMedia-DCE7hmVr.js";import"./Avatar-CgMczA0n.js";import"./AvatarGroup-ujKKLt3E.js";import"./Checkmark-Da_1rBde.js";import"./ItemLabel-JZ_7_TI1.js";import"./Heading-Dl2CB_qz.js";import"./ItemControls-C86-eNC3.js";import"./Badge-Dlsqw5tH.js";import"./Tooltip-DmTt27sC.js";import"./ChevronRight-DBCR3hzH.js";import"./InformationSquare-CA9knMPH.js";const R={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const k=["Default","WithState"];export{t as Default,e as WithState,k as __namedExportsOrder,R as default};
