import{aa as i,a7 as c}from"./iframe-CId_qj2z.js";import{b as o}from"./SearchField-CLqhaeqA.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-C7MrVWIP.js";import"./FieldBase-BhNxXsJd.js";import"./Typography-DeDqtkyf.js";import"./useHighlightedText-B-8pDdyK.js";import"./Field-C9CrCSTd.js";import"./Label-Bri1HqH-.js";import"./Input-qq9zM3Qu.js";import"./useMenu-CkWSpni-.js";import"./MenuListItem-Bza4K3Vz.js";import"./MenuListDivider-CndLXr4L.js";import"./MenuListHeading-Dgk_gmcd.js";import"./MenuItem-D69ypsbK.js";import"./ItemMedia-DATZMrih.js";import"./Avatar-qewy70Fx.js";import"./AvatarGroup-DDqOMRUz.js";import"./Checkmark-CV_uUhR-.js";import"./ItemLabel-ezryvk3W.js";import"./Heading-sNyVbkrk.js";import"./ItemControls-s3x5r9Y_.js";import"./Badge-DHd56Np2.js";import"./Tooltip-B4yZ0kY7.js";import"./ChevronRight-CD2F4Mmq.js";import"./InformationSquare-DbymG94h.js";const R={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
