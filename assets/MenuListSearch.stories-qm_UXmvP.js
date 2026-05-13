import{r as i,j as c}from"./iframe-DkQPO9ro.js";import{M as o}from"./SearchField-BFSdJUV0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BrTdOUlk.js";import"./MagnifyingGlass-DLwDZfMD.js";import"./useId-CwF4wxTL.js";import"./XMark-5G2rqhrX.js";import"./FieldBase-BPqKon2e.js";import"./Typography-cgJeIGtL.js";import"./useHighlightedText-BlkM7iRt.js";import"./Skeleton-8DklmnzK.js";import"./Label-DNmTNqvr.js";import"./index-BCCMT4X2.js";import"./use-merge-refs-B1oKProt.js";import"./lite-DaUVFjkg.js";import"./Input-CFLvjpxG.js";import"./input-BwL9rXep.js";import"./Button-OKMeorO5.js";import"./button-Byovksc3.js";import"./MenuListItem-BEjobN4X.js";import"./MenuListHeading-DNdWEvDL.js";import"./MenuItem-BCrg9AvC.js";import"./ItemMedia-CHWY5IG3.js";import"./Avatar-DlrsSRUv.js";import"./AvatarGroup-DkXzBnSr.js";import"./Icon-Dao4TSf9.js";import"./Checkmark-JWLDNW8H.js";import"./Heading-Otl-Ib-S.js";import"./ItemControls-Czqw_jtP.js";import"./ChevronRight-Ddmldm4v.js";import"./Badge-cGEpqNqN.js";import"./Tooltip-DHQ9pKqw.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BKpTfeOo.js";import"./index-DaA-2TAn.js";import"./InformationSquare-DS3QJ89x.js";const N={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const U=["Default","WithState"];export{t as Default,r as WithState,U as __namedExportsOrder,N as default};
