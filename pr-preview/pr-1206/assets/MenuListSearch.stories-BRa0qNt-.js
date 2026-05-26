import{r as i,j as c}from"./iframe-CdkbiINU.js";import{M as o}from"./SearchField-D9zkHyRI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ClUlC5r_.js";import"./MagnifyingGlass-MF_Zjyww.js";import"./useId-BBNwfwR-.js";import"./XMark-CXTea0I2.js";import"./FieldBase-CADFK9ds.js";import"./Typography-CbNgqrog.js";import"./useHighlightedText-Z8eL_Nst.js";import"./Skeleton-DNrLKFK9.js";import"./Label-DOiiUdXJ.js";import"./tooltip-ClrKYCC2.js";import"./Input-CXgAq3E9.js";import"./Button-DbqBa2Ra.js";import"./MenuListItem-CwD3vAur.js";import"./MenuListHeading-DRaOclWG.js";import"./MenuItem-DuLXc_4R.js";import"./ItemMedia-Mj1KUH0F.js";import"./Avatar-Dqj4y4ce.js";import"./AvatarGroup-XhgZMwS_.js";import"./Icon-Cn1mWE7M.js";import"./Checkmark-B8HStk1Z.js";import"./Heading-pV_B_Yzg.js";import"./ItemControls-2WNlOUKw.js";import"./ChevronRight-WcqCaCSB.js";import"./Badge-Nnj4VnpH.js";import"./Tooltip-CkfZKf5K.js";import"./useMenu-Cw7IEDma.js";import"./index-D4P432Vi.js";import"./InformationSquare-lXhFqiHS.js";const B={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
