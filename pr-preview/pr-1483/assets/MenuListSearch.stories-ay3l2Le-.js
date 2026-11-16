var c=Object.defineProperty;var t=(o,a)=>c(o,"name",{value:a,configurable:!0});import{a9 as u,a6 as l}from"./iframe-DmXJhoHi.js";import{b as s}from"./SearchField-CmQy5YNq.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-CDTvYECp.js";import"./MenuListItem-fE8Z_sJw.js";import"./MenuListDivider-DKZNTDIg.js";import"./MenuItem-C_9NXDrO.js";import"./CheckboxUncheckedIcon-THpi2fsF.js";import"./RadioUncheckedIcon-HRy4h_Iy.js";import"./ItemMedia-BhUDoeQn.js";import"./Avatar-Ct1BUX51.js";import"./AvatarGroup-jJ6DuwRZ.js";import"./ItemLabel-D6letihH.js";import"./Heading-DMD9BytY.js";import"./useHighlightedText-PrDe8r-L.js";import"./ItemControls-CqWny7dI.js";import"./Badge-BPEkC0lf.js";import"./Tooltip-DWnRPb8d.js";import"./ChevronRight-BBhULSEW.js";import"./FieldBase-BmJ_0UFe.js";import"./Typography-TuByLUlM.js";import"./Field-x0yE1z9d.js";import"./Label-Dmk4_kaT.js";import"./Input-BP2xOaTX.js";import"./useMenu-CAAj79LJ.js";import"./InformationSquare-Cf67cLsl.js";const z={title:"Menu/MenuSearch",component:s,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:t(()=>{},"onClear"),onChange:t(()=>{},"onChange")}},e={args:{}},r=t(o=>{const[a,n]=u.useState(""),m=t(i=>{n(i.target.value)},"onChange"),p=t(()=>{n("")},"onClear");return l.jsx(s,{...o,value:a,onChange:m,onClear:p})},"WithState"),A=["Default","WithState"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: MenuListSearchProps) => {
  const [q, setQ] = useState<string>('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQ(event.target.value);
  };
  const onClear = () => {
    setQ('');
  };
  return <MenuListSearch {...args} value={q} onChange={onChange} onClear={onClear} />;
}`,...r.parameters?.docs?.source}}};export{e as Default,r as WithState,A as __namedExportsOrder,z as default};
