import{r as i,j as c}from"./iframe-BNDruhPA.js";import{M as o}from"./SearchField-BS2BtTJs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JM42q3xD.js";import"./MagnifyingGlass-BEj5aS_0.js";import"./useId-28rL4Hsl.js";import"./XMark-vbUnhqfT.js";import"./FieldBase-CqddQ4KB.js";import"./Typography-0VzQ_bGw.js";import"./useHighlightedText-Bss46XCz.js";import"./Skeleton-3vFplc_z.js";import"./Label-DEPud0Ho.js";import"./index-BuvBvGLs.js";import"./use-merge-refs-DHcrFN31.js";import"./lite-DaUVFjkg.js";import"./Input-Bq2zza5V.js";import"./input-CeK3s4nJ.js";import"./Button-CaDKAluY.js";import"./button-Bu4lXR2T.js";import"./MenuListItem-DJZ7kLfZ.js";import"./MenuListHeading-CJCU8c8j.js";import"./MenuItem-Zvnz-i4w.js";import"./ItemMedia-C5U6F78e.js";import"./Avatar-Bc7K3VQ6.js";import"./AvatarGroup-CBYJn5rG.js";import"./Icon-Ch0vKaKK.js";import"./Checkmark-BnLjHgWq.js";import"./Heading-C1Pb_LrU.js";import"./ItemControls-nx23Lp4C.js";import"./ChevronRight-Bcu8s-U3.js";import"./Badge-e7-dfLSt.js";import"./Tooltip-BwDwCRyx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BrVLonhI.js";import"./InformationSquare-BrTKrkbD.js";const K={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
