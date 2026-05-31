import{s as i,p as c}from"./iframe-B0raGbVc.js";import{b as o}from"./SearchField-x-7DN5Df.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BFPoepm_.js";import"./MagnifyingGlass-M1myOHdK.js";import"./useId-DjmMrSjF.js";import"./XMark-Vu63tlKp.js";import"./FieldBase-COYRg4qt.js";import"./Typography-aMX_Xall.js";import"./useHighlightedText-Cy927kZm.js";import"./Skeleton-Bie46BNt.js";import"./Label-BU6sA0x8.js";import"./tooltip-C563LrpG.js";import"./Input-DWL065bb.js";import"./Button-DaZ5Xj9O.js";import"./useMenu-DBDHaupH.js";import"./MenuListItem-Cqp8gCsN.js";import"./MenuListHeading-BOiM7js_.js";import"./MenuItem-CO5pm5KV.js";import"./ItemMedia-vIK6hHXj.js";import"./Avatar-C_p7vVVJ.js";import"./AvatarGroup-CCFl7ITU.js";import"./Icon-CkGS8ofh.js";import"./Checkmark-w1Y8-xSD.js";import"./ItemLabel-WiIVldH2.js";import"./Heading-HwRbtbil.js";import"./ItemControls-0LHp_bwC.js";import"./Badge-LVeKbEwp.js";import"./Tooltip-drcV-Psw.js";import"./ChevronRight-B1cS3dE4.js";import"./index-BdK8fp8H.js";import"./InformationSquare-C1Z5-XLz.js";const F={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[s,e]=i.useState(""),n=m=>{e(m.target.value)},p=()=>{e("")};return c.jsx(o,{...a,value:s,onChange:n,onClear:p})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const G=["Default","WithState"];export{t as Default,r as WithState,G as __namedExportsOrder,F as default};
