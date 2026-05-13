import{r as i,j as c}from"./iframe-CpLxKnDM.js";import{M as o}from"./SearchField-DF0MNejq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BZrYlxzi.js";import"./MagnifyingGlass-DhzKRFoX.js";import"./useId-Dk2QO8VQ.js";import"./XMark-BkFwP2BW.js";import"./FieldBase-zLQdXhmX.js";import"./Typography-jv3_dxzw.js";import"./useHighlightedText-De1FlINf.js";import"./Skeleton-B2kLb9z1.js";import"./Label-C0kuzyFW.js";import"./index-DjVenMls.js";import"./use-merge-refs-g_590vId.js";import"./lite-DaUVFjkg.js";import"./Input-Cnu7Dubv.js";import"./input-CwcuNrJh.js";import"./Button-DKJNFoHr.js";import"./button-DZ9B7a50.js";import"./MenuListItem-D6BVyzxR.js";import"./MenuListHeading-CtFt3nNd.js";import"./MenuItem-Da2X9VsT.js";import"./ItemMedia-DT3PutY3.js";import"./Avatar-Bh6xe4Ys.js";import"./AvatarGroup-DwxSIihj.js";import"./Icon-xH6stteC.js";import"./Checkmark-DpqhZdZ_.js";import"./Heading-Dmt1Hp0l.js";import"./ItemControls-SBEzslTa.js";import"./ChevronRight-16z1B_cb.js";import"./Badge-BprayW1R.js";import"./Tooltip-BKj7GKZF.js";import"./floating-ui.dom-DCpi3RTt.js";import"./useMenu-CCk7NyHy.js";import"./index-B76D54i4.js";import"./InformationSquare-xpUpd4lr.js";const N={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
