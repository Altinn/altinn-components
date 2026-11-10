var c=Object.defineProperty;var t=(o,a)=>c(o,"name",{value:a,configurable:!0});import{a9 as u,a6 as l}from"./iframe-CFooeFlc.js";import{b as s}from"./SearchField-vc2j7DYW.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-BeyjX3_h.js";import"./MenuListItem-lDH_nIX2.js";import"./MenuListDivider-DbxP2E3y.js";import"./MenuItem-Bf8xgsdL.js";import"./CheckboxUncheckedIcon-BUUPFL_h.js";import"./RadioUncheckedIcon-SM_w6gXN.js";import"./ItemMedia-BiITU9Jf.js";import"./Avatar-BMLgJvdJ.js";import"./AvatarGroup-O59IIMZ1.js";import"./ItemLabel-uOYlRqGI.js";import"./Heading-BvwzGhlC.js";import"./useHighlightedText-CSeb_EVo.js";import"./ItemControls-a2iPy1rh.js";import"./Badge-4L7pEK9S.js";import"./Tooltip-Dsu4-yLP.js";import"./ChevronRight-Pp6aFK2W.js";import"./FieldBase--dF0uMSe.js";import"./Typography-DZMMTX6d.js";import"./Field-XgzC0Js-.js";import"./Label-BITGJPso.js";import"./Input-CijTBA3T.js";import"./useMenu-Bq9-gO9j.js";import"./InformationSquare-CkGSwppR.js";const z={title:"Menu/MenuSearch",component:s,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:t(()=>{},"onClear"),onChange:t(()=>{},"onChange")}},e={args:{}},r=t(o=>{const[a,n]=u.useState(""),m=t(i=>{n(i.target.value)},"onChange"),p=t(()=>{n("")},"onClear");return l.jsx(s,{...o,value:a,onChange:m,onClear:p})},"WithState"),A=["Default","WithState"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
