import{aa as i,a7 as c}from"./iframe-DTEeNdyk.js";import{b as o}from"./SearchField-BDcWIDhP.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-Q_O4EtL2.js";import"./FieldBase-DjxBgQLC.js";import"./Typography-CqVDEuXx.js";import"./useHighlightedText-D9AI5Zbv.js";import"./Field-IhE5_Jjk.js";import"./Label-B-q4Hdcy.js";import"./Input-BxybDda_.js";import"./useMenu-CTNN937Q.js";import"./MenuListItem-DQq69WCb.js";import"./MenuListHeading-vODo-CbQ.js";import"./MenuItem-CveCSlsE.js";import"./ItemMedia-BWl2RL2w.js";import"./Avatar-vmGSBU3d.js";import"./AvatarGroup-Sicw8XeK.js";import"./Checkmark-BHFJ8diG.js";import"./ItemLabel-CiRGygZk.js";import"./Heading-DUvNz5de.js";import"./ItemControls-BKFWWzHw.js";import"./Badge-CRnEe1Vv.js";import"./Tooltip-Oh_JH-x_.js";import"./ChevronRight-DC0APSAK.js";import"./index-szorRtVx.js";import"./InformationSquare-W352tleo.js";const R={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},e=a=>{const[n,r]=i.useState(""),s=p=>{r(p.target.value)},m=()=>{r("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
