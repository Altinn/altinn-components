var c=Object.defineProperty;var t=(o,a)=>c(o,"name",{value:a,configurable:!0});import{a9 as u,a6 as l}from"./iframe-DKOj4Qmf.js";import{b as s}from"./SearchField-TPXYOreq.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-CQx-KSK5.js";import"./MenuListItem-DoNptxMM.js";import"./MenuListDivider-D3rKIdnM.js";import"./MenuItem-BIy6YDdy.js";import"./CheckboxUncheckedIcon-yrWrTRi3.js";import"./RadioUncheckedIcon-C00GN-tf.js";import"./ItemMedia-BRG2KhSe.js";import"./Avatar-CF_k6VZv.js";import"./AvatarGroup-DEy2HyjC.js";import"./ItemLabel-CcblWyxm.js";import"./Heading-CZ9YFV1k.js";import"./useHighlightedText-C5BJuUZa.js";import"./ItemControls-CBo-NxME.js";import"./Badge-DEZY09pU.js";import"./Tooltip-G6lw2ON-.js";import"./ChevronRight-BtINKUzX.js";import"./FieldBase-B2rDpv5b.js";import"./Typography-eLs7BNQP.js";import"./Field-BWfsO4dQ.js";import"./Label-Z9WrVSxL.js";import"./Input-BzqjTNtI.js";import"./useMenu-CQyV1KVq.js";import"./InformationSquare-CC_FvbA-.js";const z={title:"Menu/MenuSearch",component:s,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:t(()=>{},"onClear"),onChange:t(()=>{},"onChange")}},e={args:{}},r=t(o=>{const[a,n]=u.useState(""),m=t(i=>{n(i.target.value)},"onChange"),p=t(()=>{n("")},"onClear");return l.jsx(s,{...o,value:a,onChange:m,onClear:p})},"WithState"),A=["Default","WithState"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
