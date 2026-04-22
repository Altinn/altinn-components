import{r as i,j as c}from"./iframe-C5YDQF8t.js";import{M as o}from"./SearchField-DhRNQpTW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Wv9BNi45.js";import"./MagnifyingGlass-CEZChhW1.js";import"./useId-D8_RB8wa.js";import"./XMark-DdTqeOk-.js";import"./FieldBase-BeNWnE8F.js";import"./Typography-yp9Qf0rT.js";import"./useHighlightedText-n06FiY88.js";import"./Skeleton-Drx-E9Fo.js";import"./Label-DtjEPZjV.js";import"./index-B1UWFYtY.js";import"./use-merge-refs-C8sdFhVy.js";import"./lite-DaUVFjkg.js";import"./Input-CBT5zBbT.js";import"./input-D6WzUQ9f.js";import"./Button-BZAGm3c0.js";import"./button-CCJ82TCy.js";import"./MenuListItem-Dn26XcpH.js";import"./MenuListHeading-b0m4AzBM.js";import"./MenuItem-WQ9gCGs0.js";import"./ItemMedia-FRtQjDq_.js";import"./Avatar-BGjXXmrj.js";import"./AvatarGroup-DQC0T1Vh.js";import"./Icon-CecLgcvt.js";import"./Checkmark-B_9eKN07.js";import"./Heading-DpfkgbSv.js";import"./ItemControls-B4P5BjHw.js";import"./ChevronRight-N4TcqxLw.js";import"./Badge-BloMeVT9.js";import"./Tooltip-BhYnScUh.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BhI6CQre.js";import"./InformationSquare-BnjsTJI5.js";const K={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const N=["Default","WithState"];export{t as Default,r as WithState,N as __namedExportsOrder,K as default};
