import{r as i,j as c}from"./iframe-CZMLD2fe.js";import{M as o}from"./SearchField-hPGSgF9W.js";import"./preload-helper-PPVm8Dsz.js";import"./index-iGjPLQV7.js";import"./MagnifyingGlass-DMBns2Fc.js";import"./useId-Dmu9AgSD.js";import"./XMark-BBRiAlI8.js";import"./FieldBase-bsYRos9m.js";import"./Typography-BegW4Ytw.js";import"./useHighlightedText-CmlayFSP.js";import"./Skeleton-D52MvI5U.js";import"./Label-C0JPWrbN.js";import"./index-DZ8nICMn.js";import"./use-merge-refs-BZH6UNTX.js";import"./lite-DaUVFjkg.js";import"./Input-1NX1qonS.js";import"./input-okGdJMyY.js";import"./Button-z0ZioQWK.js";import"./button-CZknkFMR.js";import"./MenuListItem-DDLkxBzW.js";import"./MenuListHeading-BJ84Vv6-.js";import"./MenuItem-BQTFtYYp.js";import"./ItemMedia-CE_zTi22.js";import"./Avatar-DzGFAhDt.js";import"./AvatarGroup-sNwukvT8.js";import"./Icon-CbE8dCFV.js";import"./Checkmark-CgCD7cxb.js";import"./Heading-5rlhad8Q.js";import"./ItemControls-CSi2HZsx.js";import"./ChevronRight-7zRCvc5i.js";import"./Badge-CuHz7XFr.js";import"./Tooltip-Cmq5kiMI.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CEG7UMF2.js";import"./index-CQNCMx5k.js";import"./InformationSquare-BauCIT4L.js";const N={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
