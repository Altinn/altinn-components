import{r as i,j as c}from"./iframe-BDpWuaMs.js";import{M as o}from"./SearchField-D16JUOzv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DVPUayQ0.js";import"./MagnifyingGlass-ItUM1KfV.js";import"./useId-BKmV9YxM.js";import"./XMark-Cx5Omj8e.js";import"./FieldBase-CGSHeWph.js";import"./Typography-DZRyPYmV.js";import"./useHighlightedText-B13W4IFy.js";import"./Skeleton-DC_TZb2p.js";import"./Label-7jR2lGh9.js";import"./tooltip-DLcd2lCg.js";import"./Input-BoCHA0_0.js";import"./Button-m_FXpHGO.js";import"./MenuListItem-Cx4K7HTt.js";import"./MenuListHeading-XsWTeeVe.js";import"./MenuItem-BH8ygUTz.js";import"./ItemMedia-CHwsaJTx.js";import"./Avatar-CT8r-oMP.js";import"./AvatarGroup-C5RQzawa.js";import"./Icon-4_NTN6mD.js";import"./Checkmark-DDYvLrrH.js";import"./Heading-D4nA4ZwT.js";import"./ItemControls-BtUdj5a9.js";import"./ChevronRight-BJTZ2o3o.js";import"./Badge-DPODtVho.js";import"./Tooltip-X0E0nlNG.js";import"./useMenu-CniiHJSE.js";import"./index-BHwG3h0W.js";import"./InformationSquare-CS8D_BUZ.js";const B={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const F=["Default","WithState"];export{t as Default,r as WithState,F as __namedExportsOrder,B as default};
