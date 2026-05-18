import{r as i,j as c}from"./iframe-Bk_HwK4l.js";import{M as o}from"./SearchField-CcfOce7B.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bj80ru-z.js";import"./MagnifyingGlass-BtHw2Y5y.js";import"./useId-WArpTTRC.js";import"./XMark-BlM7H2uk.js";import"./FieldBase-zuKERQJx.js";import"./Typography-9_XA-VKE.js";import"./useHighlightedText-BjD5CEaG.js";import"./Skeleton-CZ4GHxMp.js";import"./Label-D1l41OtR.js";import"./index-RvDLUlZV.js";import"./use-merge-refs-BQmlI6PU.js";import"./lite-DaUVFjkg.js";import"./Input-kPMzbuYu.js";import"./input-6lO9tGv_.js";import"./Button-DXv-zg1S.js";import"./button-DRIhbrAI.js";import"./MenuListItem-p80RBs_A.js";import"./MenuListHeading-RVi62nau.js";import"./MenuItem-BW0J3eqZ.js";import"./ItemMedia-QvgC3e5a.js";import"./Avatar-B1R5c004.js";import"./AvatarGroup-CkGvw6sL.js";import"./Icon-BbsTdu7G.js";import"./Checkmark-BwmprQFp.js";import"./Heading-D6li-Zgs.js";import"./ItemControls-DoACt_K_.js";import"./ChevronRight-BEdxYQXL.js";import"./Badge-s1Xx1f1P.js";import"./Tooltip-B6sw6IF5.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-BNIm_aif.js";import"./index-BL_SwWgZ.js";import"./InformationSquare-D1WxufmY.js";const N={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
