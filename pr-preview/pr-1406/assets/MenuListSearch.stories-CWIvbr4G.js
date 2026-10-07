import{aa as i,a7 as c}from"./iframe-CH8mgD3C.js";import{b as o}from"./SearchField-UH995Up-.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-BnEAksKO.js";import"./FieldBase-D9urOdyW.js";import"./Typography-ClkFzU7o.js";import"./useHighlightedText-B_wEJ_uI.js";import"./Field-Dls_LVcA.js";import"./Label-CqTyDT0V.js";import"./Input-Sz2FhcYy.js";import"./useMenu-BlkNFW_W.js";import"./MenuListItem-dmpcOffB.js";import"./MenuListDivider-Dpg_gFHI.js";import"./MenuListHeading-Bwq8QFZh.js";import"./MenuItem-B2UgnfYQ.js";import"./ItemMedia-BK3BNMj0.js";import"./Avatar-DpRxDHCs.js";import"./AvatarGroup-B9kdZ47G.js";import"./Checkmark-BQdUfCkA.js";import"./ItemLabel-DGIpgk0p.js";import"./Heading-Yz0Kaix4.js";import"./ItemControls-dstWsIeL.js";import"./Badge-CSoF9iVN.js";import"./Tooltip-CT6ipS0w.js";import"./ChevronRight-CQGN_WtL.js";import"./InformationSquare-Dm8hsCNK.js";const R={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
