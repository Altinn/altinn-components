import{r as i,j as c}from"./iframe-Bs6hWG43.js";import{M as o}from"./SearchField-CTJqYruH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DbNSDn3W.js";import"./MagnifyingGlass-ByFYxaCQ.js";import"./useId-eW1Sa_eP.js";import"./XMark-Cx14Anho.js";import"./FieldBase-BwWmF8XK.js";import"./Typography-4Wb6MR64.js";import"./useHighlightedText-ByR3-iok.js";import"./Skeleton-7NyHq6Da.js";import"./Label-CqwIAbNx.js";import"./index--1NR6hdE.js";import"./use-merge-refs-CXrn4uAk.js";import"./lite-DaUVFjkg.js";import"./Input-eDTGHBrL.js";import"./input-DdjwQdrU.js";import"./Button-eHvnmE12.js";import"./button-BtRKSTW7.js";import"./MenuListItem-CaCKNFL_.js";import"./MenuListHeading-DBtCNSz-.js";import"./MenuItem-BL3nnmC3.js";import"./ItemMedia-B6-8h9P0.js";import"./Avatar-BN7VNN79.js";import"./AvatarGroup-DiHJ7hxR.js";import"./Icon-DjH00Hl5.js";import"./Checkmark-YSQh9b-J.js";import"./Heading-C3DAZ3La.js";import"./ItemControls-CsoavSOP.js";import"./ChevronRight-Xe9lB9nu.js";import"./Badge-XV6ITEub.js";import"./Tooltip-8ajV2_Od.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-Be0b91uO.js";import"./InformationSquare-C3jahF3t.js";const K={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
