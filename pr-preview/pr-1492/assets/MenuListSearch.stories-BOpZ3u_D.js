var c=Object.defineProperty;var t=(o,a)=>c(o,"name",{value:a,configurable:!0});import{a9 as u,a6 as l}from"./iframe-ucBQ5HcJ.js";import{b as s}from"./SearchField-0Y9a3sbc.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-asWGm_ME.js";import"./MenuListItem-BGVKEzIM.js";import"./MenuListDivider-B7GAi5Kj.js";import"./MenuItem-DSDVSdKL.js";import"./CheckboxUncheckedIcon-Bxf-Z0Ny.js";import"./RadioUncheckedIcon-D7Forzmr.js";import"./ItemMedia-BkaFl7YX.js";import"./Avatar-D5ejQC2L.js";import"./AvatarGroup-pZn7_Hnk.js";import"./ItemLabel-CZZsCEBi.js";import"./Heading-B62YbUQ8.js";import"./useHighlightedText-DrXs5ARP.js";import"./ItemControls-DxZwYBlC.js";import"./Badge-DakQ_ooc.js";import"./Tooltip-CfIbxb_W.js";import"./ChevronRight-Vb4FEV6b.js";import"./FieldBase-BybGrojy.js";import"./Typography-z9HgrCC2.js";import"./Field-Do9LfNoA.js";import"./Label-Ch2cl7wL.js";import"./Input-CVLmoyI4.js";import"./useMenu-zMhFd5Ju.js";import"./InformationSquare-BC6md9kr.js";const z={title:"Menu/MenuSearch",component:s,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:t(()=>{},"onClear"),onChange:t(()=>{},"onChange")}},e={args:{}},r=t(o=>{const[a,n]=u.useState(""),m=t(i=>{n(i.target.value)},"onChange"),p=t(()=>{n("")},"onClear");return l.jsx(s,{...o,value:a,onChange:m,onClear:p})},"WithState"),A=["Default","WithState"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
