import{r as i,j as c}from"./iframe-CXxOXnma.js";import{M as o}from"./SearchField-Bi4ovUnL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvzmMrBu.js";import"./MagnifyingGlass-D50FbQFC.js";import"./useId-CYy4MNIP.js";import"./XMark-DvGwYctt.js";import"./FieldBase-DpHGffp6.js";import"./Typography-4yj_ylkx.js";import"./useHighlightedText-Cggf4nMP.js";import"./Skeleton-DaZzKoDP.js";import"./Label-CsbjAOhP.js";import"./tooltip-F-8CLWbq.js";import"./Input-jSu8pVt5.js";import"./Button-Dot-dF6F.js";import"./MenuListItem-Coun_kyi.js";import"./MenuListHeading-C-5Y0Jxa.js";import"./MenuItem-DUKdLPhz.js";import"./ItemMedia-BJW132yJ.js";import"./Avatar-De_JFqYW.js";import"./AvatarGroup-DdK_Ls54.js";import"./Icon-CyU2k-nr.js";import"./Checkmark-CEwGjLXr.js";import"./Heading-CD_Q6pfI.js";import"./ItemControls-D969--fk.js";import"./ChevronRight-fDr-lddl.js";import"./Badge-c48mXhtB.js";import"./Tooltip-CMWO30ox.js";import"./useMenu-B3yI9DRQ.js";import"./index-B9pxKBgX.js";import"./InformationSquare-C99f4nwm.js";const B={title:"Menu/MenuSearch",component:o,tags:["autodocs"],parameters:{},args:{name:"menu-search",placeholder:"Type to search",onClear:()=>{},onChange:()=>{}}},t={args:{}},r=a=>{const[n,e]=i.useState(""),s=p=>{e(p.target.value)},m=()=>{e("")};return c.jsx(o,{...a,value:n,onChange:s,onClear:m})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const F=["Default","WithState"];export{t as Default,r as WithState,F as __namedExportsOrder,B as default};
