import{r as i,j as c}from"./iframe-BakMcPB9.js";import{M as o}from"./SearchField-rHpPiKo0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DAwqyEdM.js";import"./MagnifyingGlass-BCCA0_9u.js";import"./useId-Btw-Kuqp.js";import"./XMark-D8cLqedS.js";import"./FieldBase-B35pktZu.js";import"./Typography-BzplxmiV.js";import"./useHighlightedText-nzhiVGnc.js";import"./Skeleton-CIZGLt5B.js";import"./Label-D58ijrT7.js";import"./index-Dmny_mDx.js";import"./use-merge-refs-CJ9f1t94.js";import"./lite-DaUVFjkg.js";import"./Input-Csjd-e9P.js";import"./input-DNwUo5r_.js";import"./Button-BJ-P2q8B.js";import"./button-Dqq-cscz.js";import"./MenuListItem-DLQbcaMe.js";import"./MenuListHeading-BYFBzopx.js";import"./MenuItem-DOoZvP8c.js";import"./ItemMedia-CMtvzv_T.js";import"./Avatar-bwZt4czp.js";import"./AvatarGroup-DgPgqKip.js";import"./Icon-D4ysQTre.js";import"./Checkmark-Bv6xEUnW.js";import"./Heading-Dpm-6zaj.js";import"./ItemControls-BIaUvdXD.js";import"./ChevronRight-C2TalX8u.js";import"./Badge-ChbpCNVq.js";import"./Tooltip-CQ3DXIuJ.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BaGtO6Vm.js";import"./InformationSquare-XaKmtjKI.js";const K={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
