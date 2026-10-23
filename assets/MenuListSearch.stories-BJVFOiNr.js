var c=Object.defineProperty;var t=(o,a)=>c(o,"name",{value:a,configurable:!0});import{aa as u,a7 as l}from"./iframe-Ck42qOx1.js";import{b as s}from"./SearchField-B8KiDBUc.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-CxCtlPHN.js";import"./MenuListItem-BIqpRdYe.js";import"./MenuListHeading-C_C2TzXD.js";import"./MenuItem-BT6sfN7d.js";import"./ItemMedia-Br8-csYo.js";import"./Avatar-BGxIkqoE.js";import"./AvatarGroup-47nQolqa.js";import"./Checkmark-Di95vAnU.js";import"./ItemLabel-BKKQ8yMh.js";import"./Heading-CWc2O27X.js";import"./useHighlightedText-BgClQYDl.js";import"./ItemControls-3hwzA3sg.js";import"./Badge-Cjd2AmoZ.js";import"./Tooltip-CTYi4ppJ.js";import"./ChevronRight-DWZnEevf.js";import"./FieldBase-ly-5mtcw.js";import"./Typography-nObbjg0R.js";import"./Field-DflaqZhu.js";import"./Label-BQ9ZPq2G.js";import"./Input-DGLuCKOz.js";import"./useMenu-BBAeNj9K.js";import"./MenuListDivider-CthpKcql.js";import"./InformationSquare-CGuPpOub.js";const z={title:"Menu/MenuSearch",component:s,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:t(()=>{},"onClear"),onChange:t(()=>{},"onChange")}},e={args:{}},r=t(o=>{const[a,n]=u.useState(""),m=t(i=>{n(i.target.value)},"onChange"),p=t(()=>{n("")},"onClear");return l.jsx(s,{...o,value:a,onChange:m,onClear:p})},"WithState");e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
