import{r as i,j as c}from"./iframe-BUZW8AMM.js";import{M as o}from"./SearchField-DOgIBcSC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DDG5Qp_D.js";import"./MagnifyingGlass-e5Ddvpo2.js";import"./useId-CoMggIDA.js";import"./XMark-N_5CtkVA.js";import"./FieldBase-D0VPfoZq.js";import"./Typography-DPxU9lqg.js";import"./useHighlightedText-Df1F8nSN.js";import"./Skeleton-2WT-jYKy.js";import"./Label-EV3PcI6g.js";import"./index-BxrYGQ_D.js";import"./use-merge-refs-Cq-TarIz.js";import"./lite-DaUVFjkg.js";import"./Input-xWxScOYP.js";import"./input-Dl9c_xvZ.js";import"./Button-gpqpzK6E.js";import"./button-Bzfkec0d.js";import"./MenuListItem-DOB3vVPI.js";import"./MenuListHeading-BbGKJ44d.js";import"./MenuItem-B9Qpze_W.js";import"./ItemMedia-lV46z_8W.js";import"./Avatar-VmI9f2FC.js";import"./AvatarGroup-BSpRcNGO.js";import"./Icon-pO_LYxKU.js";import"./Checkmark-B1cvuYYq.js";import"./Heading-BBJzhiZm.js";import"./ItemControls-CILw3fe6.js";import"./ChevronRight-Be2F8dIE.js";import"./Badge-CcUYqUUV.js";import"./Tooltip-4HkvDlDY.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-DzfOGhde.js";import"./index-B1N1jCNu.js";import"./InformationSquare-D87nn8LZ.js";const N={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
