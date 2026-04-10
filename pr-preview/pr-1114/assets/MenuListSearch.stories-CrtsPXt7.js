import{r as i,j as c}from"./iframe-COdTICiz.js";import{M as o}from"./SearchField-DQWZ98wb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-eHSiAaoN.js";import"./MagnifyingGlass-BjGJbcBP.js";import"./useId-lT615UMD.js";import"./XMark-CpgXVK2Q.js";import"./FieldBase-CQukmgiw.js";import"./Typography-CRI9HVXo.js";import"./useHighlightedText-FFYshbql.js";import"./Skeleton-DCT9M7tY.js";import"./Label-Bw83ICjW.js";import"./index-zPL8uGVu.js";import"./use-merge-refs-DMOZr-G2.js";import"./lite-DaUVFjkg.js";import"./Input-Dmsj72wJ.js";import"./input-DYzXaufk.js";import"./Button-Dqoqvefk.js";import"./button-BvBLLivB.js";import"./MenuListItem-BVxiRmRE.js";import"./MenuListHeading-C74FO8PH.js";import"./MenuItem-Pij9KqE-.js";import"./ItemMedia-BN92MYHv.js";import"./Avatar-30_b1gUS.js";import"./AvatarGroup-DMJoFLAP.js";import"./Icon-CpwjhC7D.js";import"./Checkmark-D_NJmpQs.js";import"./Heading-BXn08xBV.js";import"./ItemControls-DRloD8XX.js";import"./ChevronRight-tPPKpYH4.js";import"./Badge-CTG2EWNm.js";import"./useMenu-C9hrnnrl.js";import"./InformationSquare-BF6iEl5i.js";const G={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const J=["Default","WithState"];export{t as Default,r as WithState,J as __namedExportsOrder,G as default};
