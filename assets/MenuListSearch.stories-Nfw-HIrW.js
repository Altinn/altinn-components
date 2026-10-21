var c=Object.defineProperty;var t=(o,a)=>c(o,"name",{value:a,configurable:!0});import{aa as u,a7 as l}from"./iframe-CW69B4-4.js";import{b as s}from"./SearchField-LDFEPhQv.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-JTPy69Hm.js";import"./MenuListItem-CMSm7sFe.js";import"./MenuListHeading-Cky4DZUO.js";import"./MenuItem-WxsEDNt-.js";import"./ItemMedia-zpQSTqxO.js";import"./Avatar-DlTYOJ9X.js";import"./AvatarGroup-C54_5QsB.js";import"./Checkmark-BGDDfT19.js";import"./ItemLabel-BOWUd3uk.js";import"./Heading-BlWFVsgQ.js";import"./useHighlightedText-Coh-oebD.js";import"./ItemControls-Dz-gOQFJ.js";import"./Badge-pUt1HWk8.js";import"./Tooltip-Bdo2x66E.js";import"./ChevronRight-CxFkThxw.js";import"./FieldBase-Cx7I1cae.js";import"./Typography-CD2WmtRN.js";import"./Field-rkOFbQMU.js";import"./Label-DMxT2wjQ.js";import"./Input-BNHnVUMY.js";import"./useMenu-bx75--uT.js";import"./MenuListDivider-C9vQ7MZ-.js";import"./InformationSquare-O6zrlrVZ.js";const z={title:"Menu/MenuSearch",component:s,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:t(()=>{},"onClear"),onChange:t(()=>{},"onChange")}},e={args:{}},r=t(o=>{const[a,n]=u.useState(""),m=t(i=>{n(i.target.value)},"onChange"),p=t(()=>{n("")},"onClear");return l.jsx(s,{...o,value:a,onChange:m,onClear:p})},"WithState");e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const A=["Default","WithState"];export{e as Default,r as WithState,A as __namedExportsOrder,z as default};
